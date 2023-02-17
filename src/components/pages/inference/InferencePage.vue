<script>

import TheHeader from '../../layout/TheHeader.vue';
import TheFooter from '../../layout/TheFooter.vue';

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
        <h1>On inference page</h1>
    </BaseCard>
    
    <TheFooter></TheFooter>
</template>