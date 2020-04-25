
const setLink = async(id) => {

  const bIsLink = id.startsWith("http")
  let link = ""
  //Si c'est un lien vidéo ou fichier d'image
  if(bIsLink){
    if(id.includes('youtube')){
      const videoID = id.replace("https://www.youtube.com/embed/", "")
      link = "http://i3.ytimg.com/vi/"+ videoID +"/maxresdefault.jpg"
    }
    if(id.includes('vimeo')){
      const videoID = id.replace("https://player.vimeo.com/video/", "")
      fetch('https://vimeo.com/api/v2/video/' + videoID + '.json')
      .then(async(res) => {
        const video = await res.json()
        link = video.thumbnail_large
      })
    }
  }else{
    link =  "../../preview/" + id
  }
  return link;
}

export default setLink;
