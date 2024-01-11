<script>
import AppHeader from './components/AppHeader.vue';
import AppCardMovies from './components/AppCardMovies.vue';
import AppCardTvSeries from './components/AppCardTvSeries.vue';
import axios from 'axios';
import { store } from './store';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppCardMovies,
    AppCardTvSeries
  },
  data() {
    return {
      store
    }
  },


  // methods: {

  // },
  // computed: {},
  // created() { }

}
</script>

<template>
  <div class="container">
    <AppHeader />
    <AppMain />
    <AppCardMovies />
    <AppCardTvSeries />
  </div>
</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;
@use '../src/styles/mixins.scss' as *;

.container {
  width: 100%;
  background-color: red;
}
</style>
