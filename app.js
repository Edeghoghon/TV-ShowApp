const form = document.querySelector("#searchform");
const clear = document.querySelector('#mybtn');

form.addEventListener("submit", async function(e){
    e.preventDefault();
    console.log("SUBMITTED"); 
    const searchForm = form.elements.query.value;
    const config = { params: {q: searchForm}}
    const resp = await axios.get(`https://api.tvmaze.com/search/shows?`, config)
    makeImages(resp.data)
    // form.elements.query.value = " ";
    
})


    const makeImages = (shows) => {
        for (let result of shows){
            if(result.show.image){
                const img = document.createElement('img')
                img.src = result.show.image.medium; 
                document.body.append(img)
            }
          
        }
    }



function myClear(){
    form.elements.query.value = " ";
    let images = document.querySelectorAll('img');
  for (let i = 0; i < images.length; i++) {
    let imageSource = images[i].src;
    if (imageSource.includes('`https://api.tvmaze.com/search/shows?')) {
      images[i].remove();
    }
  }
}
    
    

    

