// update the db



const updateData = (id, data) => {
    try {
        fetch(`http://localhost:3000/products/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error.message);
    }

}

// Delete data from the database

const deleteData = (id) => {

    try {
        fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
        })
    } catch (error) {
        console.log(error.message);
    }
}



let id = -1
// appending data to the form
const appendDataForm = (ele) => {
    document.getElementById("title").value = ele.title;
    document.getElementById("price").value = ele.price;
    document.getElementById("url").value = ele.img
    id = ele.id

}


// uimaker
const uimaker = (data) => {
    document.getElementById("productList").innerHTML = ""
    data.map((ele) => {

        let title = document.createElement("h3")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("p")
        price.innerHTML = ele.price
        let DeleteBtn = document.createElement("button")
        DeleteBtn.innerHTML = "Delete"
        let updateBtn = document.createElement("button")
        updateBtn.innerHTML = "Update"

        // adding event handlers
        updateBtn.addEventListener("click", () => appendDataForm(ele))
        DeleteBtn.addEventListener("click", () => deleteData(ele.id))
        let div = document.createElement("div")
        div.append(img, title, price, DeleteBtn, updateBtn)

        document.getElementById("productList").append(div)
    })
}





// get data
const getData = () => {
    try {
        fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(response => uimaker(response));   // calling uimaker function
    } catch (error) {
        console.log(error.message);
    }
}

// calling getData
getData()





// post data

const postData = (data) => {
    try {
        fetch("http://localhost:3000/products", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
}


const handleData = (e) => {
    e.preventDefault()

    let data = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        img: document.getElementById("url").value
    }


    if (id != -1) {
        updateData(id, data)
    }
    else {
        postData(data)
    }

}

document.getElementById("myForm").addEventListener("submit", handleData)