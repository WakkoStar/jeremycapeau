import config from "../config.js"
const setLink = (id) => {

  const bIsLink = id.startsWith("http")
  let link = ""
  //Si c'est un lien vidéo ou fichier d'image
  if(bIsLink){
    const videoID = id.replace("https://www.youtube.com/embed/", "")
    link = "https://img.youtube.com/vi/"+ videoID +"/0.jpg"
  }else{
    link = config.serverUrl + "/preview/" + id
  }
  return link;
}

export default setLink;
