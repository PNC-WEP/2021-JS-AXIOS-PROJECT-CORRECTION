const input = document.querySelector('#search');
const searchButton = document.querySelector('#search-this');
const form =document.querySelector('.form-inline');


const displaySearch = function(event){
    const search = input.value;
    axios.get('http://www.omdbapi.com/?apikey=fab8d88e&s='+search)
        .then(
            function(response){
                movieList = response.data.Search;
                console.log("Search request response:")
                console.log(movieList);
            })
        .catch(
            function(error) {
                console.log(error);
            });
}


// This is to make the search with the enter button. And it also avoid the refreshment of the page every time you click on enter key
const enterKeyPressed = function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        displaySearch(event);
    }else{}
}


searchButton.addEventListener('click',displaySearch);
form.addEventListener('keydown',enterKeyPressed);

