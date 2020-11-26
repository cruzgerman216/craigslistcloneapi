class Navbar {
    hide(){
        document.querySelector(".navigator").style.display = "none";
    }

    show(){
        document.querySelector(".navigator").style.display = "block";
    }

    render(){
        document.body.innerHTML = "";
        let div;
        if(document.querySelector(".navigator")){
            div = document.querySelector(".navigator")
        }else{
            div = document.createElement("div");
            div.classList.add("navigator");
            document.body.append(div);

            div.innerHTML =
            `
            <span class="navlink"style="bored: 1px solid black; border-radius: 100%; padding:3px;background-color:white;cursor:pointer"  onClick="clickHome()">CL</span> >
            <span id="navtext" class="navlink">${userstate.email}</span>
            <span id="logout" class="navlink" style="float:right;" >[Logout]</span>
            `
        }

        if(userstate.islogin()){
            div.innerHTML = `
                <span id="homenav" class="navlink"style="bored: 1px solid black; border-radius: 100%; padding:3px;background-color:white;cursor:pointer"  ">CL</span> >
                <span id="navtext" class="navlink">${userstate.email}</span>
                <span id="logout" class="navlink" style="float:right;" >[Logout]</span>
            `
        }else{
            div.innerHTML = `            <div class="navigator" id="home" >
            <span id="homenav" class="navlink"style="bored: 1px solid black; border-radius: 100%; padding:3px;background-color:white;cursor:pointer"  ">CL</span> >
            <span id="navtext" class="navlink">account log in</span>
            <span id="logout" class="navlink" style="float:right;display:none;" >[Logout]</span>

         </div>
        `
        }
        div.querySelector("#logout").addEventListener('click', this.logout);
        div.querySelector("#homenav").addEventListener('click', this.clickHome);

    }

    logout = () =>{
        this.clickHome()
        document.getElementById("logout").style.display = "none";
        userstate.logout();
      }

      clickHome = () => {
        new Home();
        // let user_account = document.querySelector("#user_account");
        // let post_forms = document.querySelector("#post_forms");
        // if(post_forms){
        //     post_forms.style.display = 'none';
        // }
        // let sessionforms = document.getElementById("sessionforms");
        // if(sessionforms){
        //     sessionforms.style.display = "none";
        // }
        // let createpost = document.querySelector(".createpost");
        // if(createpost){
        //     createpost = document.querySelector(".createpost").innerText = "";
        // }
        // document.getElementById("post").style.display = 'none';
        // document.getElementById("getpost").innerHTML = "";
        // document.getElementById("getpost").style.display = "none";
        // document.getElementById("myposts").innerHTML= "";
        
        // user_account.style.display = 'none';
        // this.hide();
      }
}