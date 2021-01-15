


let app = new Vue ({
    el: "#app",
    data: {
        userRequest: "",
        movies: []
    },
 
    methods: {
        onClickButton: function(find) {
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=e711a9a7f93bd4ad57163f1845d0059f&query=userRequest")
            .then(response => {  
                // console.log(response);
                this.movies = response.data.results;
                console.log(this.movies);
            })
            .catch(error => {
                console.log("Error: " + error) // gestiamo l'errore
            })
        }

    },
    mounted(){
        
    }
})


                



