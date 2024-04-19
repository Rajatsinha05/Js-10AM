import navbar from "../Components/nav.js";
import postData from "../api/post.js";

document.getElementById("navbar").innerHTML = navbar()




const isUserExists = (user) => {

   try {
     fetch(`http://localhost:3000/users?email=${user.email}`)
         .then((response) => response.json())
         .then((response) => {
 
             if (response.length == 0) {
               postData(user,"http://localhost:3000/users")
             }
             else {
                 alert("User already exists")
             }
         })
   } catch (error) {
    console.log(error.message);
   }


}

const HandleData = (e) => {
    e.preventDefault();
    let user = {

        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    // postData(user)
    isUserExists(user)
}


document.getElementById("userData").addEventListener("submit", HandleData)