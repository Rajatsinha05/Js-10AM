let products = JSON.parse(localStorage.getItem('data')) || []
let cart = JSON.parse(localStorage.getItem('cart')) || []
const uiMaker = (productsdata) => {

    document.getElementById("box").innerHTML = ""
    productsdata.map((ele) => {
        let title = document.createElement("h1")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("p")
        price.innerHTML = ele.price

        let category = document.createElement("h4")
        category.innerHTML = ele.category
        let btn = document.createElement("button")
        btn.innerHTML = "Buy now"

        btn.addEventListener("click", () => {
           
            cart.push({...ele,qty:1})
            localStorage.setItem("cart", JSON.stringify(cart))

        })

        btn.setAttribute("class", "btn btn-info")
        let div = document.createElement("div")
        div.append(img, title, price, category, btn)
        div.setAttribute("class", "col-4")
        document.getElementById("box").append(div)
    })
}

let isLogin = localStorage.getItem("isLogin")
if (isLogin) {
    document.getElementById("login").innerHTML = "Logout"
}
else {

    window.location.href = '/local/login.html'
}

uiMaker(products)


const handleSorting = (val) => {
    if (val == "htl") {
        products.sort((a, b) => b.price - a.price)
        console.log(products);
        uiMaker(products)

    }
    else {
        products.sort((a, b) => a.price - b.price)
        console.log(products);
        uiMaker(products)
    }

}

const handleFilter = (val) => {
    let temp = products.filter((ele) => ele.category == val)
    console.log(temp);
    uiMaker(temp)

}

const search = (val) => {
    let temp = products.filter((ele) => ele.title.includes(val))
    console.log(temp);
    uiMaker(temp)

}



// search form

const handleSearch = (e) => {
    e.preventDefault()

    let title = document.getElementById("search-value").value
    search(title)
}

document.getElementById("htl").addEventListener("click", () => handleSorting("htl"))
document.getElementById("lth").addEventListener("click", () => handleSorting("lth"))
document.getElementById("kids").addEventListener("click", () => handleFilter("kid"))
document.getElementById("male").addEventListener("click", () => handleFilter("male"))
document.getElementById("female").addEventListener("click", () => handleFilter("female"))
document.getElementById("search").addEventListener("submit", handleSearch)








