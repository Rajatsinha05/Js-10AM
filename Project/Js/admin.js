import navbar from "../Components/nav.js";
import postData from "../api/post.js";
document.getElementById("navbar").innerHTML = navbar()



const HandleData = (e) => {
    e.preventDefault();
    let data = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
        img: document.getElementById("url").value
    }
   postData(data,"http://localhost:3000/products");


}


document.getElementById("form").addEventListener("submit", HandleData)