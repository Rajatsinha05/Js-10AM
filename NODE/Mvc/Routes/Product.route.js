const { Router } = require('express')
const { createPage, createProduct, getProducts, getProductsPage, deleteProduct } = require('../controllers/Prodcut.controller')
const upload = require('../middlewares/uploadImage')
const { isLoggedIn, isAdmin } = require('../middlewares/user')
const { Admin, isLogged } = require('../middlewares/validateUser')

const productRoute = Router()
productRoute.get('/create', isLogged,Admin, createPage)
productRoute.post('/', isLogged,Admin, upload.single("img"), createProduct)

productRoute.get('/', isLogged, getProducts)
productRoute.get("/page", isLogged, getProductsPage)

productRoute.get("/:id", isLogged,Admin, deleteProduct)

module.exports = productRoute