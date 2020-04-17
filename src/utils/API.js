
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
        localStorage.clear();
        return axios.post(`/api/user/logout`,{},{headers})
    },
/////////////////CATEGORIES//////////////////
    categoryAdd: function(nom) {
      return axios.post(`/api/category/add`, {nom}, {headers});
    },
    categoryView: function() {
      return axios.get(`/api/category/view`);
    },
    categoryDelete: function(id) {
      return axios.post(`/api/category/delete`, {id}, {headers})
    },
    categoryModify: function(category) {
      return axios.post(`/api/category/modify`, {category}, {headers})
    },
///////////GALLERY/////////////////////
    imagesView: function() {
      return axios.get(`/api/images/view`, {headers});
    },
    imagesDelete: function(id) {
      return axios.post(`/api/images/delete`, {id}, {headers})
    },
///////////PDFS/////////////////////
    pdfsView: function() {
      return axios.get(`/api/pdfs/view`);
    },
    pdfsDelete: function(id) {
      return axios.post(`/api/pdfs/delete`, {id}, {headers})
    },
/////////RUBRIQUE////////////
    rubriqueAdd: function(category_id, img_id, img_data) {
      return axios.post(`/api/gallery/add`, {category_id, img_id, img_data}, {headers});
    },
    rubriqueDelete: function(category_id, img_id) {
      return axios.post(`/api/gallery/delete`, {category_id, img_id}, {headers});
    },
    rubriqueView: function() {
      return axios.get(`/api/gallery/view`);
    },
////////CONTACTS/////////////////
    contactView: function() {
      return axios.get(`/api/contact/view`);
    },
    contactDelete: function(id){
      return axios.post(`/api/contact/delete`, {id}, {headers})
    },
//////////A PROPOS//////////////
    aproposView: function(){
      return axios.get(`/api/apropos/view`)
    }
};
