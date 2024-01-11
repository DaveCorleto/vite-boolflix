<script>
// import axios from 'axios';
import { store } from '../store';
export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },

}

</script>

<template>
    <header>
        <div>Sono AppHeader</div>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 80px;
    border: 2px solid red;
}
</style>