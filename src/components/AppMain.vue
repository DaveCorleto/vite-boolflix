<script>
import axios from 'axios';
// Importo lo Store! 
import { store } from '../store';
export default {
    name: "AppMain",
    data() {
        return {
            store,

        }
    },

}

</script>

<template>
    <div>Sono AppMain</div>
    <div v-if="store.Movies !== ''" class="prova">
        <div>{{ store.Movies[0].title }}</div>
        <div>{{ store.Movies[0].original_title }}</div>
        <div>{{ store.Movies[0].original_language }}</div>
        <div>{{ store.Movies[0].vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/mixins.scss' as *;
</style>