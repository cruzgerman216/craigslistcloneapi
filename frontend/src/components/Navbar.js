class Navbar {
    constructor(){
        this.render();
        this.addEventListener();
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
    }

    addEventListener(){
        document.querySelector("#logout").addEventListener('click', this.logout);
        document.querySelector("#homenav").addEventListener('click', this.clickHome);
    }

    logout = () =>{
        this.clickHome()
        userstate.logout();
      }

    clickHome = () => {
        new Home();
    }
}