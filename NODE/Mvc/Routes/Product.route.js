const { Router } = require('express')
const { createPage, createProduct, getProducts, getProductsPage, deleteProduct } = require('../controllers/Prodcut.controller')
const upload = require('../middlewares/uploadImage')
const productRoute=Router()
productRoute.get('/create',createPage)
productRoute.post('/',upload.single("img"),createProduct)

productRoute.get('/',getProducts)
productRoute.get("/page",getProductsPage)

productRoute.get("/:id",deleteProduct)

module.exports =productRoute