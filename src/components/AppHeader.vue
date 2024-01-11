<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "AppHeader",
    data() {
        return {
            store,
        }
    },
    methods: {

    }

}


</script>

<template>
    <header>
        <div class="logo">
            <h1>BOOLFLIX</h1>
        </div>
        <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search title" aria-label="Search"
                aria-describedby="search-addon" v-model="store.UserSearch" />
            <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>
                SEARCH
            </button>
        </div>
    </header>

    <div> {{ store.UserSearch }} </div>
</template>

<style lang="scss" scoped>
header {
    height: 80px;
    border: 2px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;

    .logo {
        color: red;
    }

    .form-control {
        margin-right: 15px;
    }

    .btn-outline-primary {
        background-color: red;
        padding: 4px;
        border-radius: 5px;
    }
}
</style>