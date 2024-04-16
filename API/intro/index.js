




// const newFunction = () => {
//     fetch("https://dummyjson.com/products")
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch((err) => { console.log(err) })
// }

// newFunction()




const ui = (data) => {
    let temp = ""
    data.map((ele) => {
        temp += `<div class="box">
<img src=${ele.images[0]} alt="">
<h5 >${ele.title}</h5>
<p>${ele.price}</p>
<p>${ele.category}</p>
</div>`
    })
    document.getElementById("container").innerHTML = temp
}


const get = async () => {
    try {
        let res = await fetch("https://dummyjson.com/products")
        let data = await res.json()
        ui(data.products)

    } catch (error) {
        console.log(error);
    }
}

get()

const search=()=>{
let val=document.getElementById("search").value

console.log(val);

}




document.getElementById("search").addEventListener("keypress",(e)=>{


if(e.key=="Enter"){
search()
    
}
})