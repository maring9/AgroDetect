<script>

import TheHeader from '../../layout/TheHeader.vue';
import TheFooter from '../../layout/TheFooter.vue';
import { Auth } from 'aws-amplify';
export default {
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<template>
    <TheHeader></TheHeader>
    <BaseCard>
        <h1>In home page</h1>
        <button @click="Auth.signOut">Sign out</button>
    </BaseCard>

<TheFooter></TheFooter>
</template>

