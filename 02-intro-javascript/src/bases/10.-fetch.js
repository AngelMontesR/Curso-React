/*****************************/
// Fetch API
//  es una característica de JavaScript que proporciona una manera moderna, flexible y más potente de realizar solicitudes HTTP desde el navegador
/*****************************/

const apikey = 'vIGZQF8GYwhNqlspLlc8uzj8LFEgtzwj';

const http = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

http
.then(resp=> resp.json() )
.then(({data})=>{
   const {url} = data.images.original;
    const img  = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(console.error)


