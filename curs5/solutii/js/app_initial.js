
console.log(movies);

 const main = document.getElementById("main");
 const IMGPATH = "https://image.tmdb.org/t/p/w1280";
 showMovies(movies);
function showMovies(results){
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


