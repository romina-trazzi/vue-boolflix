/* Milestone 3:
In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. Dovremo prendere quindi l’URL base delle immagini di TMDB: 
https://image.tmdb.org/t/p/​ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le dimensioni possibili a questo link: 
https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400​) per poi aggiungere la parte finale dell’URL passata dall’API.
Esempio di URL: 
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png */


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

                    for (let key in this.tvSeries) {
                        let stars = Math.ceil(this.tvSeries[key].vote_average / 2); 
                        // console.log(stars); 
                        this.tvSeries[key].vote_average = stars;
                    
                        // eccezioni linguistiche nelle serie tv
                    if (this.tvSeries[key].original_language == "en") {   
                        this.tvSeries[key].original_language = "gb";
                    } else if 
                        (this.tvSeries[key].original_language == "zh") {
                        this.tvSeries[key].original_language = "cn"
                    } else if
                        (this.tvSeries[key].original_language == "ko") {
                        this.tvSeries[key].original_language = "kr"
                    } else if 
                        (this.tvSeries[key].original_language == "vi") {
                        this.tvSeries[key].original_language = "vn";
                    } else if 
                        (this.tvSeries[key].original_language == "et") {
                        this.tvSeries[key].original_language = "ee";
                    } else if
                        (this.tvSeries[key].original_language == "ja") {
                        this.tvSeries[key].original_language = "jp"
                    } else if 
                        (this.tvSeries[key].original_language == "da") {
                        this.tvSeries[key].original_language = "dk"
                    } else if 
                        (this.tvSeries[key].original_language == "hu") {
                        this.tvSeries[key].original_language = "ua"
                    } 
                }
            })

            .catch(error => {
                console.log("Error: " + error) 
            })
        
        }
    }
  


})


