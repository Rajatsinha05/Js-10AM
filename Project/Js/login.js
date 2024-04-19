import navbar from "../Components/nav.js";
document.getElementById("navbar").innerHTML = navbar()

const postData = (email, password) => {

    try {
        fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
            .then((response) => response.json())
            .then((response) => {
                if (response.length == 0) {
                    alert("check your password and try again")
                }
                else {
                    alert("Logged in successfully")
                }
            })
    } catch (error) {
        console.log(error.message);
    }
}
const HandleData = (e) => {
    e.preventDefault();
    let user = {

        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    postData(user.email, user.password)
}
document.getElementById("userData").addEventListener("submit", HandleData)
