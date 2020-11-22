class Post {
  constructor(id, title, description) {
    this.id = id
    this.title = title;
    this.description = description;
  }

  displaypost(postid = event.target.attributes["data-id"].value){

    let display_posts = document.getElementById("post");
    display_posts.style.display = "block"
    let getpost = document.getElementById("getpost");
    let mainposts = document.getElementById("mainposts");
    document.getElementById("user_account").style.display = "none"
    mainposts.style.display = "none"
    api.fetchPost(postid)
    .then((post) => {
      getpost.style.display = "block";
      getpost.innerHTML = '';
      getpost.innerHTML += `
      <div class="container">
        <div class="row">
          <div class="col-4">
              <div class="row" style="text-align:center;">
                <div class="col-3"><button class="replybutton">reply</button></div>
                <div class="col-3">
                  <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg></div><div>favorite</div>
                </div>
                <div class="col-3"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.533.133a1.75 1.75 0 00-1.066 0l-5.25 1.68A1.75 1.75 0 001 3.48V7c0 1.566.32 3.182 1.303 4.682.983 1.498 2.585 2.813 5.032 3.855a1.7 1.7 0 001.33 0c2.447-1.042 4.049-2.357 5.032-3.855C14.68 10.182 15 8.566 15 7V3.48a1.75 1.75 0 00-1.217-1.667L8.533.133zm-.61 1.429a.25.25 0 01.153 0l5.25 1.68a.25.25 0 01.174.238V7c0 1.358-.275 2.666-1.057 3.86-.784 1.194-2.121 2.34-4.366 3.297a.2.2 0 01-.154 0c-2.245-.956-3.582-2.104-4.366-3.298C2.775 9.666 2.5 8.36 2.5 7V3.48a.25.25 0 01.174-.237l5.25-1.68zM6.78 5.22a.75.75 0 10-1.06 1.06L6.94 7.5 5.72 8.72a.75.75 0 001.06 1.06L8 8.56l1.22 1.22a.75.75 0 101.06-1.06L9.06 7.5l1.22-1.22a.75.75 0 10-1.06-1.06L8 6.44 6.78 5.22z"></path></svg></div><div>hide</div></div>
                <div class="col-3"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"></path></svg></div><div>flag</div></div>
              </div>
          </div>
          <div class="col-4" style="text-align:center">
          Posted
          </div>
          <div class="col-4" style="text-align:right;">
          <span class="link">print</span>
          </div>
        </div>
      </div>
    `;
      let column = 
      `
        <div class="row">
          <div class="col-8">
          <h3>${post.title}</h3>
          <div>${post.description}</div>
          </div>
          <div class="col-4">
            <img style="width:100%"src="https://media.wired.com/photos/5a6a61938c669c70314b300d/master/pass/Google-Map-US_10.jpg"/>
          </div>

        </div>
        <p class="posting">post id: ${post.id}</p>
        <p class="posting">posted</p>
        <p class="posting"><button class="button link">email to friend</button></p>
        <p class="posting link">best of</p>
        `

      getpost.innerHTML += column;
    });
  }

   displayposts(name, posts){
    nav.render();
    nav.show();
    let elem = document.querySelector(".main");
    elem.style.display = 'none';
  
    let display_posts = document.getElementById("mainposts");
    display_posts.style.display = "block";
    document.getElementById("sidenavname").innerHTML = name;
    document.getElementById("searchinput").placeholder = `search ${name}`;
    
    let getposts = document.getElementById("posts");
    getposts.innerHTML = ``;
  
    for(let post of posts){
      // console.log(post);
      let month = post.created_at.split("T")[0].split("-")[1]
      let day = post.created_at.split("T")[0].split("-")[2]
  
      getposts.innerHTML += 
      `
        <div class="link" data-id=${post.id}>${month}-${day} ${post.title}(${userstate.city})</div>
      `
    }
    getposts.innerHTML += `<button  class="button"><a href="#top">^back to top<a></button>`;
    document.getElementById("mainposts").addEventListener("click",(event)=>{
      this.displaypost(event.target.attributes["data-id"].value)
    })
  }

  deletepost(id){
    let postid = parseInt(id);
    console.log(userstate);
    api.deletePost(postid).then(()=>{
      userstate.renderMyAccount();
    })
  }
}
