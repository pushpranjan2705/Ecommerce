import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from '../controllers/productController.js'
import  formidable from 'express-formidable'

//routes
const router = express.Router()

router.post('/create-product', requireSignIn,isAdmin,formidable(),createProductController);

router.post('/update-product', requireSignIn,isAdmin,formidable(),updateProductController);

//get products
router.get('/get-product', getProductController);

//single product
router.get('/get-product/:slug', getSingleProductController);

//get photo
router.get('/product-photo/:pid',productPhotoController);

// delete router
router.delete('/delete-product/:pid', deleteProductController)
// filter product route 
router.post('/product-filters',productFiltersController)

// product count
router.get('/product-count', productCountController)

// product per page
router.get('/product-list/:page', productListController)

// search product
router.get('/search/:keyword',searchProductController)

// similar product
router.get('/related-product/:pid/:cid',realtedProductController )

//category wise product
router.get('/product-category/:slug',productCategoryController)

// payments route
//token
router.get('/braintree/token',braintreeTokenController)

//payment
router.post('/braintree/payment',requireSignIn,brainTreePaymentController)


export default router