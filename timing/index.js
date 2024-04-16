// setTimeout(()=>{

//     console.log("Timeout");
// },3000)

let counter = 0;


// let id = setInterval(() => {
//     counter = counter + 1;
//     console.log(counter);

//     if (counter == 20) {
//         clearInterval(id)
//     }

// }, 100)



let maxCount=document.querySelector("#count").innerHTML
let count=0;
let id=setInterval(() => {
count = count + 1;
document.querySelector("#count").innerHTML=count;
if(count==maxCount){
    clearInterval(id);
}

},100)