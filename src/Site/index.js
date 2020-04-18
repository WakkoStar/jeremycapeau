import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar"
import Main from "./Main"

import "./styles/site.sass"

import API from "../utils/API";

const Site = () => {

  const[categories, setCategories] = useState([]);

  useEffect(() => {
    viewCategory();
  },[]);

  const viewCategory = async() => {
    const res = await API.categoryView();
    setCategories(res.data.categories);
  }

  document.oncontextmenu = function (e) {
      console.log(e.button);
      if (e.button === 2) {
          e.preventDefault();
          return false;
      }
  }

  return(
      <div className="main_site">
        <Navbar cat={categories}/>
        <Main cat={categories}/>
      </div>
  )
}

export default Site
