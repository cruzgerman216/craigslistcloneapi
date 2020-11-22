class Login{
    render(){

        nav.render();
        nav.show();
        let div;

        if(document.querySelector("#sessionforms")){
            document.getElementById("sessionforms").style.display = "block";
        }else{
            div = document.createElement("div");
            div.classList.add("container");
            div.setAttribute("id", "sessionforms")
            document.body.append(div);
            console.log(div)
            div.innerHTML +=
            `
            <div class="mainlogin">
            <div id="headerform">
              Log in
            </div>
            <form  id="login-form">
              <label>Email / Handle</label><br>
               <input class="inputform" type="text" id="email"><br>
              <div class="row" style="margin-top:5px;">
                <div class="col-6">
                  <label>Password</label><br>
                </div>
                <div class="col-6 link" style="text-align: right; font-size: smaller;">
                  Forgot password?
                </div>
              </div>
               <input class="inputform" type="password" id="password"><br>
               <div class="row" style="margin-top:5px;">
                <div class="col-6">
                  <input class="button" type="submit" value="Email a log in link">
                </div>
                <div class="col-6 link" style="text-align: right; font-size: smaller;">
                  <input class="button" type="submit" value="Log in">
                </div>
              </div>
              
            </form>
          </div>
          <div id="or">or</div>
          <div class="mainlogin">
            <div id="headerform">
              Create an account
            </div>
            <form id="signup-form">
              <label>Email</label><br>
               <input class="inputform" type="text" id="signupemail"><br>
              <label>Passowrd:</label><br>
               <input class="inputform" type="password" id="signuppassword"><br>
               <div class="row" style="margin-top:5px;">
                  <div class="col-6 link" style=" font-size: smaller;">
                  <label>Account help</label><br>
                </div>
                <div class="col-6" style="text-align: right; ">
                  <input type="submit" value="Create account"/>
                </div>
              </div>
            </form>
          </div>
            `
        }
        document.getElementById("sessionforms").style.display = "block";
        let usersForm = document.getElementById("login-form");
        let signupForm = document.getElementById("signup-form");
        signupForm.addEventListener("submit", this.userFormSubmission)
        usersForm.addEventListener("submit", this.userFormLoginSubmission)
    }

    userFormLoginSubmission = (event) =>{
        event.preventDefault();
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
      
        let user = {
          password: password,
          email: email
        }
      
        api.fetchLogin(user).then (user => {
          if(user.errors){
            let errors = "does not exist";
          }else {
            userstate.id = user.id;
            userstate.email = user.email;
            userstate.city = user.city;
            sessionStorage.setItem("email", `${user.email}`);
            sessionStorage.setItem("city", `${user.city}`);
            sessionStorage.setItem("id", `${user.id}`);
            document.getElementById("logout").style.display = "none";
            document.getElementById("header").innerHTML = user.city; 
            nav.clickHome();
        document.getElementById("sessionforms").style.display = "none";

          }
        })
      }

      userFormSubmission = (event) =>{
        event.preventDefault();
        let email = document.getElementById("signupemail").value
        let password = document.getElementById("signuppassword").value
        let user = {
          password: password,
          email: email,
          city: "dallas"
        }
      
        api.fetchsignup(user)
        .then (user => {
          let u = new User(user.id, user.email, user.city);
          sessionStorage.setItem("email", `${u.email}`);
          sessionStorage.setItem("city", `${u.city}`);
          sessionStorage.setItem("id", `${u.id}`);
      
          u.renderUser();
        })
      }
}