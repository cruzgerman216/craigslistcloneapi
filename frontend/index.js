// SPA
// In this application, with each click, the browser will render that information of what you need.

// BASE_URL is a string that is the local server to gather data from that acts as our api
const BASE_URL = "http://localhost:3000/";
// ApiService is a class that makes ajax calls
// ajax stands for asynchronous javascript and XML which makes requests to our server without
// reloading the page 
const api = new ApiService(BASE_URL);
// const is hoisted so it is fine to use this api instance as throughout each
// js file as it is within scope 
var userstate = new User(sessionStorage);
// var nav = new Navbar();
new Home();