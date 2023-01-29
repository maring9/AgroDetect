<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { Authenticator } from '@aws-amplify/ui-vue';
import Inference from './components/Inference.vue';
import '@aws-amplify/ui-vue/styles.css';
</script>

<template>
  <header>
    <img alt="AgroDetectLogo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!!" />
    </div>
  </header>

  <main>
    <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <Inference></Inference>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
