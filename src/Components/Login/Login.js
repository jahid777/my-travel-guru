import React from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import googleIcon from '../images/Icon/google.png';
import facebookIcon from '../images/Icon/fb.png';
import { useHistory, useLocation } from 'react-router-dom';



if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}


const Login = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
 const [loggedInUser, setLoggedInUser] = useContext(UserContext);

 const history = useHistory();
 const location = useLocation();
 

 let { from } = location.state || { from: { pathname: "/hotel" } };



  const handleGoogleSign = () => {
    
    firebase.auth().signInWithPopup(googleProvider)
    .then(function(result) {
      const {displayName, email} = result.user;
      const signedInUser = {name: displayName, email}
       
      console.log(signedInUser);
      setLoggedInUser(signedInUser);
      history.replace(from);

      
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(error.message);
    });
     
  }




  return (
    <div style={{textAlign: 'center'}}>

       <div onClick={handleGoogleSign}     className="google-sign-btn">
         {/* <div>
         <img className="google-icon" src={googleIcon} alt=""/>
         </div>
          <div>
          <span className="google-text">Continue With Google</span>
          </div> */}

          <div className="google-sign-btn">
         <img className="google-icon" src={googleIcon} alt=""/>
         <span className="google-text">Continue With Google</span>
       </div>
       </div>


       <div className="google-sign-btn">
         <img className="google-icon" src={facebookIcon} alt=""/>
         <span className="google-text">Continue With Facebook</span>
       </div>


    </div>
);
};

export default Login;