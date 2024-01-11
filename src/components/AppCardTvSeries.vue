
<script>
import axios from 'axios';
// Importo lo Store! 
import { store } from '../store';
export default {
    name: "AppCardTvSeries",
    data() {
        return {
            store,
        }
    },

}

</script>

<template>
    <div>Sono AppCardTvSeries</div>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/mixins.scss' as *;

div {
    color: white;
}
</style>