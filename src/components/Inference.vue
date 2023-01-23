<script>
import {Auth, API} from 'aws-amplify';

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
            }
        }

    }

</script>

<template>
    <h1> {{ returnObject }}
    </h1>
    
    <button @click="testLambda">Test Lambda</button>
    
</template>