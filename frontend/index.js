const BASE_URL = "http://localhost:3000/";
const api = new ApiService(BASE_URL);
const homepage = new Home();
var userstate = new User(sessionStorage);
var nav = new Navbar();
document.addEventListener("DOMContentLoaded", () => {
  homepage.render();
});