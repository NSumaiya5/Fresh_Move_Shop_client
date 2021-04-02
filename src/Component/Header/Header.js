import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';





const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {

        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
        }

    return (
        <div>
        
        < Navbar  text="primary"  expand="lg" >
        <Navbar.Brand href="/home"><h2 style={{ color: 'greenyellow' }}className=" rounded p-3 "><b>Fresh Move Shop</b></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="nav justify-content-end">
        <Link to ="/home"style={{ color: 'greenyellow' }} className="nav-link"><b>Home</b></Link>
        <Link to ="/Order"style={{ color: 'greenyellow' }}  className="nav-link"><b>Order</b></Link>
        <Link to ="/admin"style={{ color: 'greenyellow' }} className="nav-link"><b>Admin</b></Link>
        <Link to="/login"style={{ color: 'greenyellow' }} className="nav-link text-blue"onClick={handleSignOut}>{loggedInUser.email?'Logout':'Login'}</Link>
        <Link to="#" className="nav-link active text-blue">{loggedInUser.displayName||loggedInUser.email}</Link>
            </Navbar.Collapse>
            </Navbar>
      
        </div>
    );
};

export default Header;