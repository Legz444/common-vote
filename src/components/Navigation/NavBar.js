import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';



function NavBar(props) {

    
        let navLinks = [
            <Nav.Link key={1} href="/about">Why CommonVote?</Nav.Link>
        ];
        if(props.isLoggedIn){
            navLinks.push(
                <Nav.Link key={2} href="/profile">Profile</Nav.Link>
            );
            navLinks.push(
                <Nav.Link key={3} href="/vote">Vote</Nav.Link>
            );
            navLinks.push(
                <Nav.Link key={4} href="logout">Logout</Nav.Link>
            );
        }else{
            navLinks.push(
                <Nav.Link key={5} href="/register">Sign Up</Nav.Link>
            );
            navLinks.push(
                <Nav.Link key={6} href="/">Log In</Nav.Link>
            );
        }
//   </Navbar>

    // let navLinks = [
    //     <li className="navlinks" key={1}>
    //         <a href="/about">Why CommonVote?</a>
    //     </li>
    // ];
    // if(props.isLoggedIn){
    //     navLinks.push(
    //         <li className="navlinks" key={2}>
    //             <a href="/profile">Profile</a>
    //         </li>
    //     );
    //     navLinks.push(
    //         <li className="navlinks" key={3}>
    //             <a href="/vote">Vote</a>
    //         </li>
    //     );
    //     navLinks.push(
    //         <li className="navlinks" key={4}>
    //             <a href="/logout">Logout</a>
    //         </li>
    //     );
    // }else {
    //     navLinks.push(
    //         <li className="navlinks" key={5}>
    //             <a href="/register">Sign Up</a>
    //         </li>
    //     );
    //     navLinks.push(
    //         <li className="navlinks" key={6}>
    //             <a href="/">Log In</a>
    //         </li>
    //     );
    // }

    return(
        <>
        <Navbar className="Nav_container vw-100" bg="light" variant="light">
            
            <Navbar.Brand className="Nav_brand" href="/">
            <img
                alt=""
                src="https://res.cloudinary.com/legz444/image/upload/v1618246976/Common_4_grcsxp.png"
                width="250"
                height="200"
                className="d-inline-block align-top"
            />
            </Navbar.Brand>
            <Nav>
                {navLinks}
            </Nav>
        </Navbar>
        {/* <nav className="navbar">
            <img className ="nav-img" src="https://res.cloudinary.com/legz444/image/upload/v1616790149/Common_vgwgbf.png" width="200px" height="200px"/>
            <ul>{navLinks}</ul>
        </nav> */}
        </>
    );
}

export default NavBar;
