
import axios from "axios";
axios.defaults.withCredentials = true
//headers
let headers = {
    "Content-Type": "application/json"
};


export default {
///////////////////AUTH///////////////////
    login: function(email, password) {
        return axios.post(`/api/user/login`,{ email,password }, {headers});
    },
    /*
    signup: function(send) {
        return axios.post(`${burl}/user/signup`, send, {headers });
    },
    */

    isAuth: function() {
        //if the token is kept
        return axios.post(`/api/user/auth`,{}, {headers})
    },
    logout: function() {
        return axios.post(`/api/user/logout`,{},{headers})
    },
/////////////////CATEGORIES//////////////////
    categoryAdd: function(nom) {
      return axios.post(`/api/category/`, {nom}, {headers});
    },
    categoryView: function() {
      return axios.get(`/api/category/`);
    },
    categoryDelete: function(id) {
      return axios.delete(`/api/category/`,{data: {id}}, {headers})
    },
    categoryModify: function(category) {
      return axios.put(`/api/category/`, {category}, {headers})
    },
///////////GALLERY/////////////////////
    imagesView: function() {
      return axios.get(`/api/images/`, {headers});
    },
    imagesDelete: function(id) {
      return axios.delete(`/api/images/`,{data: {id}}, {headers})
    },
    imagesAdd: function(images) {
      return axios.post(`/api/images/`, images, {'Content-Type': 'multipart/form-data'})
    },
///////////PDFS/////////////////////
    pdfsView: function() {
      return axios.get(`/api/pdfs/`);
    },
    pdfsDelete: function(id) {
      return axios.delete(`/api/pdfs/`,{data: {id}}, {headers})
    },
    pdfsAdd: function(pdf) {
      return axios.post(`/api/pdfs/`, pdf ,  {'Content-Type': 'multipart/form-data'})
    },
/////////RUBRIQUE////////////
    rubriqueAdd: function(category_id, img_id, index) {
      return axios.post(`/api/gallery/`, {category_id, img_id,index}, {headers});
    },
    rubriqueMove: function(rubrique) {
      return axios.put(`/api/gallery/`, {rubrique}, {headers});
    },
    rubriqueDelete: function(category_id, img_id) {
      return axios.delete(`/api/gallery/`,{data: {category_id, img_id}}, {headers});
    },
    rubriqueView: function() {
      return axios.get(`/api/gallery/`);
    },
////////CONTACTS/////////////////
    contactView: function() {
      return axios.get(`/api/contact/`);
    },
    contactDelete: function(id){
      return axios.delete(`/api/contact/`, {data: {id}}, {headers})
    },
    contactAdd: function(contact){
      return axios.post(`/api/contact/`, contact , {'Content-Type': 'multipart/form-data'})
    },
    contactModify: function(contact){
      return axios.put(`/api/contact/`, contact , {'Content-Type': 'multipart/form-data'})
    },
//////////A PROPOS//////////////
    aproposView: function(){
      return axios.get(`/api/apropos/`)
    },
    aproposModify: function(apropos){
      return axios.put(`/api/apropos/`, apropos, {'Content-Type': 'multipart/form-data'})
    }
};
