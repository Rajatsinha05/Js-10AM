let cart = JSON.parse(localStorage.getItem("cart")) || []


const handleQty = (opr, index) => {

    if (opr == "+") {
        cart[index].qty += 1
    }
    else {
        if (cart[index].qty == 1) {
            cart.splice(index, 1)
        }
        else {

            cart[index].qty -= 1
        }

    }

    localStorage.setItem("cart", JSON.stringify(cart))
    uiMaker(cart)

}





const clearCart = () => {
    localStorage.removeItem("cart")
    window.location.reload()
}

const uiMaker = (productsdata) => {
    let totalPrice = 0
    document.getElementById("container").innerHTML = ""
    productsdata.map((ele, index) => {
        totalPrice += ele.price * ele.qty
        let title = document.createElement("p")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("p")
        price.innerHTML = ele.price
        let add = document.createElement("span")
        add.innerHTML = "+"

        add.addEventListener("click", () => handleQty("+", index))

        let qty = document.createElement("span")
        qty.innerHTML = ele.qty

        let remove = document.createElement("span")
        remove.innerHTML = "-"

        remove.addEventListener("click", () => handleQty("-", index))
        let qtydiv = document.createElement("div")
        qtydiv.append(add, qty, remove)
        let div = document.createElement("div")
        div.append(img, title, price, qtydiv)

        document.getElementById("container").append(div)
    })

    // document.getElementById("totalPrice").innerHTML = totalPrice

    let btn2 = document.createElement("button")

    btn2.innerHTML = totalPrice

    btn2.setAttribute("class", "btn btn-danger")
    let btn = document.createElement("button")
    btn.innerHTML = "CheckOut"
    btn.setAttribute("class", "btn btn-dark")
    document.getElementById("container").append(btn2, btn)
    btn.addEventListener("click", clearCart)

}


uiMaker(cart)






