let user = []

let isLogin=localStorage.getItem("isLogin")
if(isLogin){
document.getElementById("login").innerHTML="Logout"
}

const HandleUser = (e) => {

    e.preventDefault();

    let data = {

        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    if ((data.name.length == 0 || data.name == null) || (data.email.length == 0 || data.email == null) || (data.password.length < 4 || data.password == null)) {
        alert("Please enter a name or email address or password")
        return
    }

    user.push(data);
    localStorage.setItem('user', JSON.stringify(user));

    localStorage.setItem('isLogin', true);

    window.location.href = "/local/form.html"
}


document.getElementById("signupform").addEventListener("submit", HandleUser)