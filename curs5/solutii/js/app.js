
console.log(movies);
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

showMovies(movies, searchTerm='');
function showMovies(results, searchTerm=''){
    if(searchTerm !==''){
        alert(searchTerm);
        results = results.filter(function (element) {
            // return element.title == searchTerm;
            return (element.title.toLowerCase().indexOf(searchTerm) > -1);
          });
    }
    results.forEach(element => {
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');

        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
    }); 
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
     
    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(movies, searchTerm.toLowerCase());
        search.value = "";
    }
});

