const BASE_URL = "http://localhost:3000/";
const api = new ApiService(BASE_URL);
const state = {userstate: new User(sessionStorage)};
new Home();