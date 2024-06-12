const Product = require("../models/Product.model")

const createProduct = async (req, res) => {
    if(req.file){
        req.body.img = req.file.path
    }
    let product = await Product.create(req.body)
    res.send(product)
}
// create page
const createPage =  (req, res) => {

    res.render("createProduct")
}
// products
const getProducts = async (req, res) => {
    let products = await Product.find()
    res.send(products)
}
// products page

const getProductsPage = (req, res) => {
    res.render("products")
}


module.exports = {createProduct, createPage,getProducts,getProductsPage}