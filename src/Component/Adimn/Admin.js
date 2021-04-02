import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddProducts from '../AddProducts/AddProducts';


import ManageProduct from '../ManageProduct/ManageProduct';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div className="row mr-0">
            <Router>
                 <div className="col-md-3">
               <Sidebar></Sidebar>

            </div>
            <div className="col-md-9">
                <Switch>
                    <Route path='/manageProduct'>
                        <ManageProduct></ManageProduct>
                    </Route>
                    <Route path='/addProduct'>
                     <AddProducts></AddProducts>
                    </Route>

                </Switch>

            </div>
            </Router>

        </div>
    );
};



export default Admin;