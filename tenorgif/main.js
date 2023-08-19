const key='2IsXpZXrD56H25LLqSamDLM2qkfjtAeq';


document.addEventListener("DOMContentLoaded",init);
function init(){
    document.getElementById("btnSearch").addEventListener("click", e=>{
        e.preventDefault();
        let url= `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=3&q=`	
        let str= document.getElementById("search").value.trim()
        url=url.concat(str)
        console.log(url)
        fetch(url)
        .then(response=> response.json())
        .then(content =>{
            console.log(content.data)
            console.log('META',content.meta)

            let fig =document.createElement('figure');
            let img =document.createElement('img');
            let fc =document.createElement('figcaption');
            
            img.src =content.data[0].images.downsized.url;
            img.alt =content.data[0].title
            
            fig.appendChild(img)
            fig.appendChild(fc)
            let out =document.querySelector('#out');
            out.insertAdjacentElement('afterbegin',fig);

        })
        .catch(err=>{
            console.error(err);
        })
    })
}