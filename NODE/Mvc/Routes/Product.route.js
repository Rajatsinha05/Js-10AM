const { Router } = require('express')
const { createPage, createProduct, getProducts, getProductsPage, deleteProduct } = require('../controllers/Prodcut.controller')
const upload = require('../middlewares/uploadImage')
const { isLoggedIn, isAdmin } = require('../middlewares/user')

const productRoute = Router()
productRoute.get('/create', isAdmin, createPage)
productRoute.post('/', isAdmin, upload.single("img"), createProduct)

productRoute.get('/', isLoggedIn, getProducts)
productRoute.get("/page", isLoggedIn, getProductsPage)

productRoute.get("/:id", isAdmin, deleteProduct)

module.exports = productRoute