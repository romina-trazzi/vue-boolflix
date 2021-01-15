
/* Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. 
Possiamo, cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente. 
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
1. Titolo
2. Titolo Originale 
3. Lingua
4. Voto */

let app = new Vue ({
    el: "#app",
    data: {
        userRequest: "",
        movies: []
    },
 
    methods: {
        onClickButton: function() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e711a9a7f93bd4ad57163f1845d0059f&language=itIT&query=${this.userRequest}&include_adult=false`)
            .then(response => {  
                this.movies = response.data.results;
                console.log(this.movies);
            })
            .catch(error => {
                console.log("Error: " + error) 
            })
        }

    },
    mounted(){
        
    }
})


                



