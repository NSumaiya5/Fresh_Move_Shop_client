import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { createContext, useState } from 'react';


import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Nomatch from './Component/Nomatch/Nomatch';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Order from './Component/Order/Order';
import Admin from './Component/Adimn/Admin';
import CheckOut from './Component/CheckOut/CheckOut';
import ThankYou from './Component/ThankYou/ThankYou';



export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser]= useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
      <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          
          <PrivateRoute path="/Order">
            <Order></Order>
         </PrivateRoute>

          <PrivateRoute path="/admin">
          <Admin></Admin>
          </PrivateRoute>

          <PrivateRoute path="/addProduct">
          <Admin></Admin>
         </PrivateRoute>

          <PrivateRoute path="/manageProduct">
          <Admin></Admin>
         </PrivateRoute>

         <PrivateRoute path="/products/:id">
          <CheckOut></CheckOut>
         </PrivateRoute>

         <Route path="/thankYou">
         <ThankYou></ThankYou>
          </Route>
         
          
          <Route path="/login">
            <Login></Login>
          </Route>
  
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
           <Nomatch></Nomatch>
          </Route>
          

        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
