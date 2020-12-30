import React, { createContext } from 'react';
import bg from '../src/Components/images/Image/Rectangle1.png';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import { useState } from 'react';
import Book from './Components/Book/Book';
import Hotel from './Components/Hotel/Hotel';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/Not Found/NotFound';
import HotelDetails from './Components/HotelDetails/HotelDetails';



export const UserContext = createContext();
export const PlaceContext = createContext();

const App = () => {
const [loggedInUser, setLoggedInUser] = useState({});

  return (
     <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`}} className="bg-design">   
      <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      
       <Router>
       <Header></Header>
         <Switch>
           <Route path="/home">
              <Home></Home>
           </Route>
           <Route path="/login">
              <Login></Login>
           </Route>
           <Route path="/book:bookId">
              <Book></Book>
           </Route>
           <PrivateRoute path="/hotel">
              <Hotel></Hotel>
           </PrivateRoute>

           <Route path="/hotelDetails">
               <HotelDetails></HotelDetails>
           </Route>
           
           <Route exact path="/home">
              <Home></Home>
           </Route>
           <Route  path="*">
              <NotFound></NotFound>
           </Route>
         </Switch>
       </Router>

       </UserContext.Provider>
       </div>
  );
};

export default App;