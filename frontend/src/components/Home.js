class Home {
  constructor(){
    this.render();
    this.addEventListeners();
  }

    render(){
      document.body.innerHTML = "";
      
        let main = 
        `
        <div class="container main" style="width: 980px; padding-top: 15px;font-size:smaller;">
        <div class="row" style="text-align:center;">
          <div class="col-2 sidebar" style="flex: 0 0 20%; max-width:20%;">
            
            <div class="row" style="display:block;">
              <h1 style="font-size: 2em"><a class="link" >craigslist</a></h1>
            </div>
            <div class="row" style="display:block; padding: 5px;" >
              <a class="link" id="homecreatepost" style="background-color: #ffc" >
                create a posting
              </a>
            </div>
            <div class="row" id="session" style="display:block; padding:5px;">
              <div id="myaccount">my account</div>
            </div>
            <div class="row"style="display:block; padding:5px; " >
              <input style="width: 90%; text-align:center; border: 1px black solid;"placeholder="search craigslist">
            </div>
  
            <div class="row" style="display:block; padding:10px; ">
                <a class="link" >event calendar</a>
  
                <div class="container" style="margin-right:0;" id="calendar">
  
                </div>
            </div>
            
            <div style="padding-top:15px;padding-bottom:15px">
              <div class="link" style="padding:2px">
                craigslist app
              </div>
              <div class="link" style="padding:2px">
                help, faq, abuse, legal
              </div>
              <div class="link" style="padding:2px">
                avoid scams & fraud
              </div>
              <div class="link" style="padding:2px">
                personal safety tips
              </div>
              <div class="link" style="padding:2px">
                terms of use
              </div>
              <div class="link" style="padding:2px">
                privacy policy
              </div>
              <div class="link" style="padding:2px">
                system status
              </div>
            </div>
  
            <div style="padding-top:15px;padding-bottom:15px">
              <div class="link" style="padding:2px">
                about craigslist
              </div>
              <div class="link" style="padding:2px">
                craigslist open source
              </div>
              <div class="link" style="padding:2px">
                craigslist blog
              </div>
              <div class="link" style="padding:2px">
                best-of-craigslist
              </div>
              <div class="link" style="padding:2px">
                "craigslist joe"
              </div>
              <div class="link" style="padding:2px">
                crig newmark philanthropies
              </div>
            </div>
  
          </div>
  
          <div class="col-9"  style="flex: 0 0 70%; max-width:70%;">
            <div class="row headers"  style="display:block; margin-right:10px; margin-left:10px;padding:5px;">
              <h4 id="header">Welcome</h4>
            </div>
  
            <div class="container" id="categories">
              <div class="row">
  
                <div class="col-5" id="column-1">
  
                  <div id="column-1-1" >
                  </div>
  
  
                  <div id="column-1-61">
                  </div>
  
                  <div id="column-1-137">
                  </div>
  
                </div>
                <div class="col-5" style="padding:0px;">
  
                  <div class="container">
                    <div id="column-1-19">
                    </div>
  
                  </div>
                  
                  <div class="container">
                    <div id="column-1-82">
                    </div>
  
                  </div>
  
                  
                </div>
                <div class="col-2" style="padding:0px;" >
                  
                  <div class="container"style="padding:0px;" >
                    <div id="column-1-30">
                    </div>
  
                  </div>
  
                  <div class="container" > 
                        <div id="column-1-127">
  
                        </div>
                </div>
  
                <div class="container">
                  <div id="column-1-136">
                  </div>
                </div>
  
              </div>
           </div>
          </div>
        </div>
  
          
          <div class="col-1 sidebar"  style="flex: 0 0 9%; max-width:9%;">
            <div class="row" style="display:block; padding-top:10px">
              <select>
                <option value="english">english</option>
                <option value="spanish">Spanish</option>
              </select>
              <br><br>
            </div>
            <div class="row" style="display:block;">
              <p >dallas</p>
            </div>
            <div class="row" style="display:block;">
              <p >columbia</p>
            </div>
          </div>
  
  
        </div>
      </div>
        `

        document.body.innerHTML = main;
        let div = document.createElement("div");
        div.classList.add("footer");
        document.body.append(div);

        div.innerHTML += 
        `
        <div class="footer" >@2020 craigslist 
        <a class="footerlinks" href="#">help</a> 
        <a class="footerlinks" href="#">privacy</a>
        <a class="footerlinks" href="#">feedack</a>
        <a class="footerlinks" href="#">terms</a>
        <a class="footerlinks" href="#">about</a>
        <a class="footerlinks" href="#">mobile</a>
      </div>
        `
        this.displayCalendar();
        this.getlocation();
        this.getCategories();

    }

    getCategories = () => {
      this.clickCategory();
      let arr = [];
      api.fetchallcategories()
      .then((categories) => {
        let on = true;
        let j = 0;
       let community_div;
        for (let i = 0;i < categories.length-1; i++ ){
    
          // setting up headers
          if(categories[i].parent_id == null){
            let div = document.getElementById(`column-1-${categories[i].id}`);
            div.innerHTML += 
            `
              <h5 class="subheaders link" name="${categories[i].name}" data-id="${categories[i].id}"  >${categories[i].name}</h5>
              <div class="container"  id="category-${categories[i].id}" style="font-size:12px; padding:0px;">
              </div>
            `
    
          }else if([1,61,82, 127].includes(categories[i-1].parent_id) && j == 1){
             community_div = document.getElementById(`category-${categories[i].parent_id}`);
            if(categories[i+1]){
              on = false;
              if(categories[i+1].parent_id){
              j=0;
              community_div.innerHTML += 
              `
                <div class="row" >
                  <div class="col-6 linkcategory" name="${categories[i-1].name}"  style="padding:0px;"  data-id="${categories[i-1].id}" >
                  <a>${categories[i-1].name}</a>
                  </div>
                  <div class="col-6 linkcategory" name="${categories[i].name}"  style="padding:0px;"data-id="${categories[i].id}" >
                  ${categories[i].name}
                  </div>
                </div>
              `
            }else{
              j=0;
    
              community_div.innerHTML += 
              `
                <div class="row" >
                  <div class="col-6 linkcategory" name="${categories[i].name}  style="padding:0px;"  data-id="${categories[i].id}" >
                  ${categories[i].name}
                  </div>
                </div>
              `
            }
           }
          }else if([19,30].includes(categories[i].parent_id)){
           j = 0;
             community_div = document.getElementById(`category-${categories[i].parent_id}`);
    
              community_div.innerHTML += 
              `
                <div class="row" >
                  <div class="col-12 linkcategory" name="${categories[i].name} style="padding:0px;" data-id="${categories[i].id}" >
                  ${categories[i].name}
                  </div>
                </div>
              `
    
          }
          else{
            on = true;
            j++;
          }

        if([137].includes(categories[i].parent_id) && j == 2){
          arr.push(categories[i])
          community_div = document.getElementById(`category-${categories[i].parent_id}`);
          j=0;
        }

        }

        //sort challenge
        arr = this.sortlist(arr);
        let rowdiv = ``;
        let rowid = 0;
        let category = document.getElementById(`category-${137}`);
        let div = document.createElement("div");
        div.classList.add("row");
        div.setAttribute("id", "forum")
        category.append(div);
        let row = document.getElementById("forum")

        for(let i = 0; i < arr.length-1; i++){
          if(i%8 == 0){
            rowdiv = `<div class="col-4 " id="row-${i}"></div>`;
            row.innerHTML += rowdiv;
            rowid = i;
          }
          document.getElementById(`row-${rowid}`).innerHTML += 
          `
              <div class="row linkcategory" name="${arr[i].name}  style="padding:0px;"  data-id="${arr[i].id}" >
              ${arr[i].name}
              </div>
          `
        }

      });

  }
  addEventListeners(){
    document.getElementById("myaccount").addEventListener("click",()=>{
    if(userstate.islogin()){
      userstate.renderMyAccount();
    }else{
      let login = new Login;
      login.render();
    }
    })

    document.getElementById("homecreatepost").addEventListener("click", ()=>{
      let post = new PostForm;
      post.render();
    })
  }

  getlocation(){
    console.log(userstate.islogin())
    if(userstate.islogin() || userstate.city != ""){
      document.getElementById("header").innerHTML = userstate.city; 
    }else{
      const sucessfulLookup =  (position) => {
        const { latitude, longitude} = position.coords; 
        api.fetchLocation(latitude, longitude)
        .then(location =>  {
          userstate.city = location.results[0].formatted.split(",")[1].substring(1);
          document.getElementById("header").innerHTML = location.results[0].formatted.split(",")[1].substring(1); 
        })
      };
      navigator.geolocation.getCurrentPosition(sucessfulLookup)
    }
  }

  displayCalendar(){
    let dated = new Date();
    let firstDayy = new Date(dated.getFullYear(), dated.getMonth(), 1);
    let day_of_week = firstDayy.getDay(); 
    let calendar_days = [];
    if(day_of_week == 0){
      for(let i = day_of_week+2; i < 30;i++){
        calendar_days.push(i);
      }
    }
  
    let div = document.getElementById("calendar");
    let getcol = ``;
    for(let i=1; i<29; i++){
      getcol += 
        `
            <div class="col-1" >
            ${calendar_days[i-1]}
          </div>
        `
      if(i%7 == 0){
        div.innerHTML += 
        `
          <div class="row">
            ${getcol}
          </div>
        `
        getcol = ``;
      }
  
    }
  
    let getcal = `
    <div class="row">
      <div class="col-1">M</div>
      <div class="col-1">T</div>
      <div class="col-1">W</div>
      <div class="col-1">T</div>
      <div class="col-1">F</div>
      <div class="col-1">S</div>
      <div class="col-1">S</div>
    </div>
  
    `;
  
    getcal += div.innerHTML; 
    div.innerHTML = getcal;
  }


    clickCategory(){
      document.getElementById("categories").addEventListener("click", function(event){
        if(event.target.attributes["data-id"]){
            let name = event.target.attributes["name"].value
            let category_id = event.target.attributes["data-id"].value;
            api.fetchCategories(category_id).then((posts) => {
            let postpage = new Post;
            postpage.displayposts(name,posts);
            });
          }
      })
    }

    sortlist(arr){
      return arr.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); 
        var nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        return 0;
      });
    }

}