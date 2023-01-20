

 document.getElementById('search-bar').addEventListener("submit", e => {

    e.preventDefault();

    fetch('/api/search/plants').then(data=>{
        console.log(data);
    })    
});