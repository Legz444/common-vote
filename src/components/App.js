import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import axios from "axios";

import './App.css';
import NavBar from './Navigation/NavBar';
import RegisterForm from './Register/register';
import LogInForm from './LogInForm/login';
import LogOut from './LogOut/logout';
import PollList from "./Vote/pollList";


function App() {
  const [userState, setUserState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    isRegistered: false, 
    isLoggedIn: false,
    votes: ""
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if(localStorage.token) {
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);


  const handleLogOut = () => {
    setUserState({
      email: "",
      password: "",
      isLoggedIn: false,
    });
    localStorage.clear();
  };

  const handleInput = (e) => {
    setUserState({...userState, [e.target.name]: e.target.value });
  };

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
      localStorage.setItem('userId', response.data.id);
      setIsLoggedIn(true);
      console.log("User has registered");
    }catch(err){
      console.log(err);
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3001/", {
        email: userState.email,
        password: userState.password
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.id);
      setIsLoggedIn(true)
      console.log("User is logged in");
    }catch(err){
      console.log(err)
    }
  };

  const submitVote = async (e) => {
    e.preventDefault();
    try{
        const response= await axios.post("http://localhost:3001/vote", {
            votes: userState.votes
        });
        localStorage.setItem('votes', response.data.votes);
        setUserState(response.data);
    }catch(err){
        console.log(err);
    }
}

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
                    handleInput={handleInput}
                    submitVote = {submitVote}
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
