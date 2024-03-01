

let products = []

const UiMaker = () => {
    document.getElementById("data").innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        let img = document.createElement("img")
        img.src = products[i].img
        let title = document.createElement("h2")
        title.innerHTML = products[i].title
        let price = document.createElement("p")
        price.innerHTML = products[i].price
        let div = document.createElement("div")
        let btn = document.createElement("button")
        btn.innerHTML = "Destroy"

        btn.addEventListener("click", () => {
            products.splice(i, 1)
            UiMaker()
        })
        div.append(img, title, price, btn)
        title.setAttribute("class", "title")
        document.getElementById("data").append(div)
    }
}



const handleSubmit = (e) => {
    e.preventDefault()
    let title = document.getElementById("title").value
    let img = document.getElementById("img").value
    let price = document.getElementById("price").value
    let password = document.getElementById("password").value


    if (title.length < 2) {
        alert("Please enter a title")

        let p = document.createElement("p")

        p.innerHTML = "Please enter a  valid title "
        p.style.color = "red"

        console.log(p);
        document.getElementById("t-error").append(p)

        return
    }

    if (price < 0) {
        alert("Please enter a price")
        return
    }

    if (password.length < 8) {
        alert("must be 8 character")
        return
    }




    let product = {
        title: title,
        img: img,
        price: price
    }
    products.push(product)


    UiMaker()

}







document.getElementById("form").addEventListener("submit", handleSubmit)


