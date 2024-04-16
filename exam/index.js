

let data = [
    {
        img: "https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg",
        title: "blog post"


    },
    {
        img: "https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg",
        title: "blog post"


    }, {
        img: "https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg",
        title: "blog post"


    }, {
        img: "https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg",
        title: "blog post"


    }, {
        img: "https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg",
        title: "blog post"


    }, {
        img: "https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg",
        title: "blog post"


    }, {
        img: "https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg",
        title: "blog post"


    }, {
        img: "https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg",
        title: "blog post"


    }, {
        img: "https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg",
        title: "blog post"


    }, {
        img: "https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg",
        title: "blog post"


    }, {
        img: "https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg",
        title: "blog post"


    },
]





data.map((ele) => {

    let img = document.createElement("img");
    img.src = ele.img
    let title = document.createElement("h1")
    title.innerHTML = ele.title


    let div = document.createElement("div");
    div.append(img, title);
    document.getElementById("box").append(div)

})




