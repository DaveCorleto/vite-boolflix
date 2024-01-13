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
    <div v-if="store.Movies.length > 0" class="prova">
        <div>Questo è il titolo: {{ store.Movies[0].title }}</div>
        <div>Questo è il titolo originale {{ store.Movies[0].original_title }}</div>
        <div>Questa è la lingua {{ store.Movies[0].original_language }}</div>
        <div>Votazione film {{ store.Movies[0].vote_average }}</div>
        <div><img :src="store.Movies[0].backdrop_path" alt=""></div>
        <div>Id del film {{ store.Movies[0].id }}</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/mixins.scss' as *;
</style>