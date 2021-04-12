import './App.css';
import React, { useState, useEffect, Context } from "react";
import { Route, Switch } from 'react-router-dom';
import axios from "axios";

import './App.css';
import NavBar from './Navigation/NavBar';
import RegisterForm from './Register/register';
import LogInForm from './LogInForm/login';
import LogOut from './LogOut/logout';
import PollList from "./Vote/pollList";
import Profile from "./Profile/profile";
import About from "./About/whyVote";

function App() {
  

  const [userState, setUserState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    isRegistered: false, 
    isLoggedIn: false,
    id: "",
    votes: ""
  });
  
  //initial state of logged in is false. useEffect allows that to change when a token is given to the user in local storage
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if(localStorage.token) {
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);



  //event listener sets isloggedin to false when the user logs out
  const handleLogOut = () => {
    setUserState({
      email: "",
      password: "",
      isLoggedIn: false,
    });
    localStorage.clear();
  };


  //event listener sets the value for the targeting input fields-register, login, voting radio btns
  const handleInput = (e) => {
    setUserState({...userState, [e.target.name]: e.target.value });
  };

  //event listener submits the registering user into localstorage with a unique id and shows they are logged in
  const handleRegister = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3001/register", {
        email: userState.email,
        password: userState.password,
        firstName: userState.firstName,
        lastName: userState.lastName,
        dob: userState.dob,
        isRegistered: userState.isRegistered,
        id: userState.id,
        votes: userState.votes
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('id', response.data._id);
      setIsLoggedIn(true);
      console.log("User has registered");
    }catch(err){
      console.log(err);
    }
  };

  //event listener allows user to log in again
  const handleLogIn = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3001/", {
        email: userState.email,
        password: userState.password
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('id', response.data._id);
      setIsLoggedIn(true)
      console.log("User is logged in");
    }catch(err){
      console.log(err)
    }
  };

  //When the user clicks the submit vote btn, the value of the radio btn chosen is added to the array of user votes. It is by default an empty string.


  return (
    <>
    {/* <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </head> */}
    <div className="App_page">
      <NavBar isLoggedIn={isLoggedIn}/>
      <div className="main">
        <Switch>
        <Route  
            path="/about"
            render={(props) => {
              return (
                <About/>
              );
            }}/>
          <Route  
            path="/register"
            render={(props) => {
              return (
                <RegisterForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleRegister={handleRegister}/>
              );
            }}/>
            <Route  
            path="/profile"
            render={(props) => {
              return (
                <Profile/>
              );
            }}/>
            <Route
              path="/logout"
              render={(props) => {
                return (
                  <LogOut isLoggedIn={isLoggedIn}
                  handleLogOut={handleLogOut}/>
                );
              }}/>
              <Route
                path="/vote"
                render={(props) =>{
                  return(
                    <PollList
                    />
                  );
                }}/>
              <Route
                path="/"
                render={(props) =>{
                  return(
                    <LogInForm
                      isLoggedIn={isLoggedIn}
                      handleInput={handleInput}
                      handleLogIn={handleLogIn}/>
                  );
                }}/>
        </Switch>
      </div>
    </div>
    </>
  );
}

export default App;
