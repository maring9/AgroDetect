<script>
import {Auth, API, Storage} from 'aws-amplify';

    export default {
        data() {
            return {
                uploadedImage: null,
                b64EncodedImage: '',
                response: null,
                returnStatus: ''
            }
        },
        methods: {
            async testLambda() {
                const user = await Auth.currentAuthenticatedUser()
                const authenticationToken = user.signInUserSession.idToken.jwtToken
                console.log("token: ", authenticationToken)
                const requestData = {
                    headers: {
                        Authorization: authenticationToken
                    }
                }

                const testResult = await API.get('agrodetect', '/detectDisease', requestData)
                console.log("result: ", testResult)

                // this.returnObject = testResult
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
    <h1> {{ returnObject }}
    </h1>
    
    <button @click="testLambda">Test Lambda</button>
    <br>
    <input type="file" accept="image/*" @change="handleImageUpload"/>
    <button @click="runInference" >Run inference</button>
    <br>
</template>