const postData = (data,url) => {

    try {
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error.message);
    }
}




export default postData