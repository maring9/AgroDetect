<script setup>
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import { Auth } from 'aws-amplify';
import {APIGatewayClient, CreateApiKeyCommand, CreateUsagePlanKeyCommand} from "@aws-sdk/client-api-gateway";
import {v4 as uuidv4} from 'uuid';
import store from '../../../store/index';
import router from '../../../router';

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter you email'
    },
    password: {
      placeholder: 'Enter your password'
    }
  }
}
const services = {
  async handleSignIn(formData) {
    let {username, password} = formData;
    try {
      const user = await Auth.signIn(username, password);
      store.commit('setUser', user);
      const api_key = await handleKeyCreation();
      console.log('key: ', api_key);
      store.commit('setApiKey', api_key);
      router.push('/home');
      console.log(user);
    }catch(error) {
      console.log("Error signing in: ", error);
    }
  }
}

async function handleKeyCreation() {
  const api_client = new APIGatewayClient({region: "eu-central-1"});
  console.log("API CLIENT: ", api_client);
  const key_identifier = uuidv4();
  console.log("UUID: ", key_identifier);
  key = await createApiKey(api_client, key_identifier)
  console.log("Returned key: ", key);

  api_key = await associateKeyToUsagePlan(client, key)
  console.log("Assciated key: ", api_key);
  if (api_key !== null) {
    return api_key;
  }
  console.log("ERROR");
  return null;
}

async function associateKeyToUsagePlan(client, api_key, usagePlan="Basic") {
  const usagePlans = {
    'Basic': "psu7wi",
    'Premium': "4wznv0"
  };

  if (!usagePlan || !(usagePlan in usagePlans)) {
    console.log(usagePlan + " usage plan does not exist");
    return false;
  }

  const params = {
    keyId: api_key.id,
    keyType: "API_KEY",
    usagePlanId: usagePlans[usagePlan]
  };
  console.log("Usage plan params: ", params);

  const command = new CreateUsagePlanKeyCommand(params);
  console.log("Usage plan params: ", params);

  const associated_api_key = client.send(command)
  .then((data) => {
    console.log("Associated key to usage plan")
    console.log("Data: " + data)
    return data;
  })
  .catch((error) => {
    console.log("Failed to associate key to usage plan " + error);
    return null;
  });

  return associated_api_key;
}
async function createApiKey(client, apiKeyName, usagePlan='Basic') {
  const params = {
    name: apiKeyName,
    description: "API Key for " + usagePlan + " usage plan created on " + (new Date).toISOString(),
    enabled: true,
    generateDistinctId: true
  };

  console.log("Create key params: ", params);

  const command = new CreateApiKeyCommand(params);
  console.log("Create key command: ", command);
  const api_key = client.send(command)
  .then((data) => {
    console.log("Created API KEY: " + data);
    return data;
  })
  .catch((error) => {
    console.log("Failed to create API KEY: " + error);
    return null;
  })

  return api_key;
}

</script>

<template>
    <authenticator :form-fields="formFields" :services="services">
      <template v-slot:header>
        <div style="padding: var(--amplify-space-large); text-align: center">
          <img
            class="amplify-image"
            alt="Amplify logo"
            src="../../../assets/logo.png"
          />
        </div>
      </template>
  
      <template v-slot:sign-in-header>
        <h3
          class="amplify-heading"
          style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)"
        >
          Sign in to your account
        </h3>
      </template>
  
      <template v-slot:sign-in-footer>
        <div style="text-align: center">
          <button
            @click="toResetPassword"
            class="amplify-button amplify-field-group__control"
            data-fullwidth="false"
            data-size="small"
            data-variation="link"
            type="button"
            style="font-weight: normal"
          >
            Reset Password
          </button>
        </div>
      </template>
  
      <template v-slot:sign-up-header>
        <h3
          class="amplify-heading"
          style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)"
        >
          Create a new account
        </h3>
      </template>
  
      <template v-slot:sign-up-footer>
        <div style="text-align: center">
          <button
            @click="toSignIn"
            class="amplify-button amplify-field-group__control"
            data-fullwidth="false"
            data-size="small"
            data-variation="link"
            type="button"
            style="font-weight: normal"
          >
            Back to Sign In
          </button>
        </div>
      </template>
  
      <template v-slot:footer>
        <div style="padding: var(--amplify-space-large); text-align: center">
          <p class="amplify-text" style="color: var(--amplify-colors-neutral-80)">
            © 2023 AgroDetect <br/>All Rights Reserved
          </p>
        </div>
      </template>
  
      <template v-slot:confirm-sign-up-header>
        <h3
          class="amplify-heading"
          style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)"
        >
          Enter Information:
        </h3>
      </template>
  
      <template v-slot:confirm-sign-up-footer>
        <div>Footer Information</div>
      </template>
  
      <template v-slot:setup-totp-header>
        <h3
          class="amplify-heading"
          style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)"
        >
          Enter Information:
        </h3>
      </template>
  
      <template v-slot:setup-totp-footer>
        <div>Footer Information</div>
      </template>
  
      <template v-slot:confirm-sign-in-header>
        <h3
          class="amplify-heading"
          style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)"
        >
          Enter Information:
        </h3>
      </template>
  
      <template v-slot:confirm-sign-in-footer>
        <div>Footer Information</div>
      </template>
  
      <template v-slot:reset-password-header>
        <h3
          class="amplify-heading"
          style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)"
        >
          Enter Information:
        </h3>
      </template>
  
      <template v-slot:reset-password-footer>
        <div>Footer Information</div>
      </template>
  
      <template v-slot:confirm-reset-password-header>
        <h3
          class="amplify-heading"
          style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)"
        >
          Enter Information:
        </h3>
      </template>
  
      <template v-slot:confirm-reset-password-footer>
        <div>Footer Information</div>
      </template>
  
      <RouterView></RouterView>
    </authenticator>
  </template>