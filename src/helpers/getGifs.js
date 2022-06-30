export const getGifs = async( category)=>{
    //backticks alt+96
    const url = `https://api.giphy.com/v1/gifs/search?api_key=U26pAMdcNMmN3zo71PmFlaEP3so6a5s9&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const {data = []} = await resp.json();
    
    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}