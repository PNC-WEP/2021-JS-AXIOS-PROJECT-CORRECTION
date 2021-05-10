const container = document.getElementsByClassName("container")[0];
const updateBtn = document.getElementById("update-list");

const displayMovieList = function(list){
    console.log('tes');
    let oldMoviesData = document.getElementsByClassName("movies-data")[0];
    if (oldMoviesData !== undefined){
        oldMoviesData.remove();
    }
    
    if ((list !== undefined) && (list.length !== 0)){

        let moviesData = document.createElement("div");
        moviesData.className = "movies-data";
        container.appendChild(moviesData);

        let listOfMovies = document.createElement("ul");
        listOfMovies.className = "list-of-movies";
        moviesData.append(listOfMovies);
        
        for (movieID in list){
            displayOneMovie(list[movieID], movieID, listOfMovies);
        }
    }
    else{
        let messageNoResult = document.createElement("h1");
        messageNoResult.className = "movies-data";
        messageNoResult.textContent = "No movie matches this search request in our database";
        container.appendChild(messageNoResult);
    }

}


const displayOneMovie = function(movieObject, idNumber, list){
    // poster, title type, year

    let listElement = document.createElement("li");
    listElement.className = "post";
    list.appendChild(listElement);

    let imageDOM = document.createElement("div");
    imageDOM.className = "post-img";
    listElement.appendChild(imageDOM);

    let posterDOM = document.createElement("img");
    posterDOM.className = "poster";
    posterDOM.setAttribute("src", movieObject.Poster);
    imageDOM.appendChild(posterDOM);

    let contentDOM = document.createElement("div");
    contentDOM.className = "post-content";
    listElement.appendChild(contentDOM);

    let titleDOM = document.createElement("h3");
    titleDOM.className ="title";
    titleDOM.textContent = movieObject.Title;
    contentDOM.appendChild(titleDOM);

    let yearDOM = document.createElement("p");
    yearDOM.className = "year";
    yearDOM.textContent = "Year: " + movieObject.Year;
    contentDOM.appendChild(yearDOM);

    let typeDOM = document.createElement("p");
    typeDOM.className = "type";
    typeDOM.textContent = "Type: " + movieObject.Type;
    contentDOM.appendChild(typeDOM);

    let separation = document.createElement("hr");
    list.appendChild(separation)



}

let movieList = [
    {Title: "Twin Peaks: Fire Walk with Me", Year: "1992", Type: "movie", Poster: "https://media.senscritique.com/media/000015367870/source_big/Twin_Peaks_Les_7_derniers_jours_de_Laura_Palmer.jpg"},
    {Title: "Blade runner", Year: "1982", Type: "movie", Poster: "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/blade_runner016_0.jpg?itok=CH-FSW2S&sc=99a30588b721ecf76154228ac8518698"},
    {Title: "Twelve angry man", Year: "1957", Type: "movie", Poster: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg"}
]   


updateBtn.addEventListener('click', function() {displayMovieList(movieList)});

