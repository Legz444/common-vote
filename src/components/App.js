import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import axios from "axios";

import './App.css';
import NavBar from './Navigation/NavBar';
import RegisterForm from './Register/register';
import About from './About/whyVote';
import LogInForm from './LogInForm/login';
import LogOut from './LogOut/logout';
import Profile from './Profile/profile';


function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoggedIn: false
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
    setState({
      email: "",
      password: "",
      isLoggedIn: false,
    });
    localStorage.clear();
  };

  const handleInput = (e) => {
    setState({...state, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3001/register", {
        email: state.email,
        password: state.password
      });
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
    }catch(err){
      console.log(err);
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3001/", {
        email: state.email,
        password: state.password
      });
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true)
    }catch(err){
      console.log(err)
    }
  };

  return (
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
                path="/profile"
                render={(props) =>{
                  return(
                    <Profile/>
                  )
                }}/>
              <Route
                path="/about"
                render={(props) =>{
                  return(
                  <About/>
                  );
                }}/>
              <Route
                path="/vote"
                render={(props) =>{
                  return(
                    <Vote/>
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
  );
}

export default App;
