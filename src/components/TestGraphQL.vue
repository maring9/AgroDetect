<script>
import {Auth, API} from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import {User, Inference, AccountType} from "../models";

    export default {
        data() {
            return {
                user: {},
                account_type: null
            }
        },
        methods: {
            async saveUser() {
                Auth.currentAuthenticatedUser().then(user =>{
                    this.user = user.attributes;
                    console.log(this.user.attributes)
                    DataStore.save(new User({
                    name: this.user.name,
                    email: this.user.email,
                    account_type: AccountType.BASIC
                    })
                    ).then(() => {
                        console.log("Saved user")
                    }).catch(e => {
                        console.log("ERROR: " + e)
                    })
                })
            },
            async uploadImageToS3(imageFile) {
                try {
                    await Storage.put(imageFile.name, imageFile, {
                        level: "private",
                        contentType: "image/*"
                    });
                } catch (error) {
                    console.log("Error uploading file: ", error)
                }
            },
            encodeImage(fileObject) {
                const reader = new FileReader();
                
                reader.onloadend = () => {
                    const readerResult = reader.result

                    this.b64EncodedImage = readerResult.split(',')[1]
                    // console.log("b64 ", this.b64EncodedImage)
                }
                reader.readAsDataURL(fileObject)
            },
            handleImageUpload(event) {
                this.uploadedImage = event.target.files[0]

                this.uploadImageToS3(this.uploadedImage)
                this.encodeImage(this.uploadedImage)
            },
            async runInference() {
                const user = await Auth.currentAuthenticatedUser()
                const authenticationToken = user.signInUserSession.idToken.jwtToken
                console.log(authenticationToken)
                const requestData = {
                    body: this.b64EncodedImage,
                    headers: {
                        Authorization: authenticationToken
                    }
                }
                console.log('Sending request, waiting for response...')
                try {
                    this.response = await API.post('agrodetect', '/detectDisease', requestData)
                    console.log(response)    
                } catch (error) {
                    console.log("Error running inference: ", error)
                }
                
            }
            
        }
    }

</script>

<template>
    <h1> {{ this.user }}</h1>
    <button @click="saveUser">Save User</button>
    <br>
</template>