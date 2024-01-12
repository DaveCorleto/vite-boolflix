<script>
import AppHeader from './components/AppHeader.vue';
import AppCardMovies from './components/AppCardMovies.vue';
import AppCardTvSeries from './components/AppCardTvSeries.vue';
import AppMain from './components/AppMain.vue'
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
  // dichiaro l'emit 
  emits: ['ricercautente'],
  data() {
    return {
      store
    }
  },
  methods: {
    getcallTMDBMovies() {

      // Mi creo una variabile per catturare la richiesta dell'utente. Se ha effettuato una ricerca allora myUrlMovies cambierà 
      let myUrlMovies = `https://api.themoviedb.org/3/search/movie?api_key=8577ddfe1686e0538f479ffca7d3424e`;

      if (store.UserSearch !== "") {
        myUrlMovies += `&query=${store.UserSearch}`
      }
      axios
        .get(myUrlMovies)
        .then((res => {
          console.log("Questo è l'elenco dei film che mi ritorna da myUrlMovies", res.data);
          storeMovies = res.data;
        }))

        .catch((err) => {
          console.log("Errori", err)
        }
        )
    }
  }

  // methods: {

  // },
  // computed: {},
  // created() { }

}
</script>

<template>
  <div class="container">
    <AppHeader @ricercautente="getcallTMDBMovies" />
    <AppMain />
    <AppCardMovies />
    <AppCardTvSeries />
  </div>
</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;
@use '../src/styles/mixins.scss' as *;
</style>
