import express from "express"
import  {registerController, loginController, testController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
// router obj
const router=express.Router()

//routing
router.post("/register", registerController);


// LOGIN || POST
router.post('/login', loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get('/test',requireSignIn, isAdmin, testController)  // do middleware hai ek token check kr rha h dusra admin check ho rha h


//protected user route auth
router.get('/user-auth', requireSignIn,(req,res)=>{
   res.status(200).send({ok:true});
} );

// protected Admin route auth

router.get('/admin-auth', requireSignIn,isAdmin,(req,res)=>{
   res.status(200).send({ok:true});
} );

// update profile
router.put('/profile', requireSignIn,updateProfileController)


//order
router.get('/orders', requireSignIn,getOrdersController)

//All order
router.get('/all-orders', requireSignIn,isAdmin,getAllOrdersController)

//order status update
router.put("/order-status/:orderId",requireSignIn,isAdmin,orderStatusController)
export default router;

