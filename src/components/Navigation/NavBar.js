import React from 'react';

function NavBar(props) {
    let navLinks = [
        <li key={1}>
            <a href="/about">Why CommonVote?</a>
        </li>
    ];
    if(props.isLoggedIn){
        navLinks.push(
            <li key={2}>
                <a href="/profile">Profile</a>
            </li>
        );
        navLinks.push(
            <li key={3}>
                <a href="/vote">Vote</a>
            </li>
        );
        navLinks.push(
            <li key={4}>
                <a href="/logout">Logout</a>
            </li>
        );
    }else {
        navLinks.push(
            <li key={5}>
                <a href="/register">Sign Up</a>
            </li>
        );
        navLinks.push(
            <li key={6}>
                <a href="/">Log In</a>
            </li>
        );
    }

    return(
        <>
        <h1>CommonVote</h1>
        <nav>
            <ul>{navLinks}</ul>
        </nav>
        </>
    );
}

export default NavBar;
