import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import './assets/main.css'

import { Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
import BaseCard from './components/ui/BaseCard.vue';

Amplify.configure(awsExports);

const app = createApp(App);

app.use(router);

app.component('BaseCard', BaseCard);

app.mount('#app');
