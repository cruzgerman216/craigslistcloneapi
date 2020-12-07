class ApiService{
    constructor(url){
        this.url = url
    }

    fetchLogin = (user) => {
        return fetch(`${this.url}/login`,{
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          .then(resp => resp.json())
    }

    
    fetchsignup = (user) => {
        return fetch(`${this.url}/users`,{
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          .then(resp => resp.json())
    }

    deleteUser = (userId) => {
        return fetch(`${this.url}/users/${userId}`,{
            method: 'DELETE'
        })
    }

    fetchUsers = () => fetch(`${this.url}/users`).then((resp) => resp.json())

    fetchPost = (postid) => fetch(`${this.url}/posts/${postid}`).then((resp) => resp.json())

    fetchCreatePost = (userpost) => {
        return fetch(`${this.url}/posts`,{
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userpost)
          })
          .then(resp => resp.json())
    }

    fetchUserPosts = (userId) => fetch(`${this.url}/users/${userId}/posts`).then((resp) => resp.json())
    

    deletePost = (postid) => {
        return  fetch(`${this.url}/posts/${postid}`,{
            method: 'DELETE'
          }).catch (error =>{
            let errors = "errors";
          })
    }

    fetchLocation = (latitude, longitude) =>{
        return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f51f687021cb4b56bdb9899d71042ad0`)
        .then(response =>  response.json())
    }

    fetchCategories = (category_id) => {
        return fetch(`${this.url}/categories/${category_id}/posts`)
        .then((resp) => resp.json())
    }


    fetchSubcategories = (category) =>{
        return fetch(`${this.url}/${category}/subcategories`)
        .then((resp) => resp.json())
    }

    fetchallcategories = () =>{
      return fetch(`${this.url}/categories`)
        .then((resp) => resp.json())
    }
}