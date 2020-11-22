class User {
  constructor(session){
    if(this.islogin()){
      this.id = session.id;
      this.email = session.email;
      this.city = session.city;
    }else{
      this.id = -1;
      this.email = "";
      this.city = "";
    }
  }

  islogin(){
    let condition;
    sessionStorage.length != 0 ? condition = true : condition = false;
     return condition;
  }

  logout(){
    sessionStorage.clear()
    this.id = -1;
    this.email = "";
    this.city = "";
  }

  renderMyAccount(){
    let post = new Post;
    let user_account = document.querySelector("#user_account");
    user_account.style.display = 'block';
    nav.render();
    nav.show();
    let myposts = document.getElementById("myposts");
    api.fetchUserPosts(sessionStorage.id).then((posts)=>{
      myposts.innerHTML = "";
      for(let i = 0; i < posts.length; i++){
        myposts.innerHTML += 
        `
          <div class="row adjustable">
            <div class="col-1 mypostentry" style="background-color:lightgreen;">
              status
            </div>
            <div class="col-3 mypostentry">
              <a class="link" data-id="${posts[i].id}" name="display">display</a>
              <a class="link" data-id="${posts[i].id}" name="delete">delete</a>
              <a class="link">edit</a>
            </div>
            <div class="col-5 mypostentry">
              ${posts[i].title}
            </div>
            <div class="col-2 mypostentry">
              ${posts[i].created_at}
            </div>

            <div class="col-1 mypostentry">
              ${posts[i].id}
            </div>
          </div>
        `
      }
    })
    myposts.addEventListener("click", (event)=>{
      if(event.target.attributes["data-id"]){
        console.log(event.target.attributes["data-id"].value);
        if(event.target.attributes["name"].value =="delete"){
          post.deletepost(event.target.attributes["data-id"].value)
        }else if(event.target.attributes["name"].value =="display"){
          
          post.displaypost(event.target.attributes["data-id"].value)
        }              
      }
    })

  }
}
