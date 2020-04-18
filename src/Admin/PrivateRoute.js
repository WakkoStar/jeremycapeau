import React,{useState, useEffect} from 'react';
import { Route} from 'react-router-dom';
import API from '../utils/API';

const PrivateRoute = ({component: Component, ...rest}) => {

    const [auth, setAuth] = useState('En chargement')

    useEffect(() => {
      setRoute()
    },[])

    const setRoute = async() => {
      API.isAuth()
      .then( (res) => {
        if(res.data.auth){
          setAuth(res.data.auth.toString())
        }
      })
      .catch((err) => {
        document.location.href=  "http://jeremycapeau/user";
      })
    }

    const SetPage = () => {
      if(auth === "En chargement"){
        return <p>{auth}</p>
      }else if(auth === "true"){
        return <Component/>
      }
    }

    return (
        <Route {...rest} render={props => (
          <SetPage />
        )} />
    );
};

export default PrivateRoute;
