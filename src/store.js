import { reactive } from 'vue';

export const store = reactive({
    apiUrl: '',
    // Usersearch (valorizzato da v-model ricerca...inizializzato a vuoto come dev'essere)
    UserSearch: '',
    myUrlMovies: "https://api.themoviedb.org/3/search/movie?api_key=8577ddfe1686e0538f479ffca7d3424e&query=" + UserSearch,



});

