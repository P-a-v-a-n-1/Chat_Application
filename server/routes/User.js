
// Import the required modules
const express = require("express")
const router = express.Router();

// Import the required controllers and middleware functions
const {
  login,
  signUp,
  // sendOTP
} = require("../controllers/Auth")


// const { auth } = require("../middleware/auth");

// routes for login, signup , sendOtp and changePassword

// // routes for user login
router.post("/login",login);
// // // route for user singup 
router.post("/signUp",signUp);
// // // route for sending otp to user's email
// router.post("/sendOTP",sendOTP);

// Export the router for use in the main application
module.exports = router;