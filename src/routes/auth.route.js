const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.get("/signup", authController.showSignup);  // shows signup form
router.post("/signup", authController.signup);     // handles signup

router.get("/login", authController.showLogin);    // shows login form
router.post("/login", authController.login);       // handles login

router.post("/logout", authController.logout);      // handles logout


module.exports = router;
