/*****************************/
// Async - Await
// Async
/*****************************/

const getImagen = async() =>{
   try{
    const apikey    = 'vIGZQF8GYwhNqlspLlc8uzj8LFEgtzwj';
    const http      = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    const {data}    = await http.json();
    const {url}     = data.images.original;
    const img       = document.createElement('img');
    img.src         = url;
    document.body.append(img);
   }catch(error){
    console.log(error)
   }
}

getImagen();
