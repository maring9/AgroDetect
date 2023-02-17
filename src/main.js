import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import BaseCard from './components/ui/BaseCard.vue';
import { Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const app = createApp(App);

app.use(router);

app.component('BaseCard', BaseCard);

app.mount('#app')
