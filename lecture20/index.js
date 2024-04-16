

const handleUser = (e) => {
    e.preventDefault();

    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
    let number = document.querySelector("#number").value
    var nameRegex = /^[a-zA-Z\-]+$/;
    var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    var IndNum = /^[0]?[6789]\d{9}$/;

    // if (nameRegex.test(username) == false) {
    //     alert("Please enter a valid username")
    //     return
    // }
    // else {
    //     alert("valid username")
    // }

    // if (regexPassword.test(password) == false) {

    //     alert("Please enter a valid password")

    // }
    // else {
    //     alert("valid password")
    // }

  if(IndNum.test(number)==false) {

    alert("Please enter  a valid number")
  }
  else{
    alert(" valid number")
  }



}











document.querySelector("form").addEventListener("submit", handleUser)