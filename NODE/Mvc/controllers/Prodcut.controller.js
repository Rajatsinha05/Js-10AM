const Product = require("../models/Product.model")

const createProduct = async (req, res) => {
    if (req.file) {
        req.body.img = req.file.path
    }
    let product = await Product.create(req.body)
    res.redirect("/product/page")
}
// create page
const createPage = (req, res) => {

    res.render("createProduct")
}
// products
const getProducts = async (req, res) => {
    let products = await Product.find()
    res.send(products)
}
// products page

const getProductsPage = async (req, res) => {
    let products = await Product.find()
    res.render("products", { products })
}

const deleteProduct = async (req, res) => {
    let { id } = req.params
    console.log(id, "delete");
    let data = await Product.findByIdAndDelete(id)
    res.redirect("/product/page")
}

module.exports = { createProduct, createPage, getProducts, getProductsPage, deleteProduct }