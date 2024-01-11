<script>
import axios from 'axios';
// Importo lo Store! 
import { store } from '../store';
export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },

}

</script>

<template>
    <div>Sono AppMain</div>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/mixins.scss' as *;
</style>