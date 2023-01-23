<script>
import {Auth, API, Storage} from 'aws-amplify';

    export default {
        data() {
            return {
                returnMessage: '',
                returnStatus: null,
                returnObject: null
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

                this.returnObject = testResult
            },
            async uploadImage(event) {
                const imageFile = event.target.files[0]
                try {
                    await Storage.put(imageFile.name, imageFile, {
                        level: "private",
                        contentType: "image/*"
                    });
                } catch (error) {
                    console.log("Error uploading file: ", error)
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
    <input type="file" accept="image/*" @change="uploadImage"/>
</template>