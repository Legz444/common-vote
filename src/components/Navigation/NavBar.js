import "./navBar.css";
import React from 'react';


function NavBar(props) {
    let navLinks = [
        <li className="navlinks" key={1}>
            <a href="/about">Why CommonVote?</a>
        </li>
    ];
    if(props.isLoggedIn){
        navLinks.push(
            <li className="navlinks" key={2}>
                <a href="/profile">Profile</a>
            </li>
        );
        navLinks.push(
            <li className="navlinks" key={3}>
                <a href="/vote">Vote</a>
            </li>
        );
        navLinks.push(
            <li className="navlinks" key={4}>
                <a href="/logout">Logout</a>
            </li>
        );
    }else {
        navLinks.push(
            <li className="navlinks" key={5}>
                <a href="/register">Sign Up</a>
            </li>
        );
        navLinks.push(
            <li className="navlinks" key={6}>
                <a href="/">Log In</a>
            </li>
        );
    }

    return(
        <>
        
        <nav className="navbar">
            <img className ="nav-img" src="https://res.cloudinary.com/legz444/image/upload/v1616790149/Common_vgwgbf.png" width="200px" height="200px"/>
            <ul>{navLinks}</ul>
        </nav>
        </>
    );
}

export default NavBar;
