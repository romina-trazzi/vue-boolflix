/* Milestone 2:
Trasformiamo il voto da 1 a 10 decimale in un numero intero da 1 a 5, 
così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, 
lasciando le restanti vuote (troviamo le icone in FontAwesome).
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote :P)

Trasformiamo poi la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, 
gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv,
stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv: 
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs */


let app = new Vue ({
    el: "#app",
    data: {
        userRequest: "",
        movies: [],
        tvSeries: [],
    },
 
    methods: {
        onClickButton: function() {
            axios.all([
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e711a9a7f93bd4ad57163f1845d0059f&language=it_IT&query=${this.userRequest}&include_adult=false`), 
                axios.get(`https://api.themoviedb.org/3/search/tv?api_key=e711a9a7f93bd4ad57163f1845d0059f&language=it_IT&query=${this.userRequest}&include_adult=false`)
            ])

            .then(response => {
                this.movies = response[0].data.results; // richiesta film - dati in array
                this.tvSeries = response[1].data.results; // richiesta tvSeries - dati in array
                
            
                // gestione delle stelle
                for (let key in this.movies) {
                    let stars = Math.ceil(this.movies[key].vote_average / 2); 
                    // console.log(stars); 
                    this.movies[key].vote_average = stars;

                    // eccezioni linguistiche nei film
                    if (this.movies[key].original_language == "en") {   
                        this.movies[key].original_language = "gb";
                    } else if 
                        (this.movies[key].original_language == "zh") {
                        this.movies[key].original_language = "cn"
                    } else if
                        (this.movies[key].original_language == "ko") {
                        this.movies[key].original_language = "kr"
                    } else if 
                        (this.movies[key].original_language == "vi") {
                        this.movies[key].original_language = "vn";
                    } else if 
                        (this.movies[key].original_language == "et") {
                        this.movies[key].original_language = "ee";
                    } else if
                        (this.movies[key].original_language == "ja") {
                        this.movies[key].original_language = "jp"
                    } else if 
                        (this.movies[key].original_language == "da") {
                        this.movies[key].original_language = "dk"
                    } else if 
                        (this.movies[key].original_language == "hu") {
                        this.movies[key].original_language = "ua"
                    }
                
                }
            })
    

            .catch(error => {
                console.log("Error: " + error) 
            })
        
        }
    }
  


})


