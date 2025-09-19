const bcrypt = require("bcryptjs");
const User = require("../models/user");

// Show signup page
exports.showSignup = (req, res) => res.render("auth/signup", { error: null });
exports.showLogin  = (req, res) => res.render("auth/login", { error: null });

// Signup logic
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render("auth/signup", { error: "User already exists" });
    }

    // ❌ don't hash here, let pre("save") handle it
    const user = await User.create({ username, email, password });

    // Auto-login after signup (optional)
    req.session.user = { id: user._id, username: user.username, email: user.email };
    res.redirect("/chats");
  } catch (err) {
    console.error(err);
    res.render("auth/signup", { error: "Signup failed" });
  }
};

// Login logic
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.render("auth/login", { error: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.render("auth/login", { error: "Invalid credentials" });

    // Store user in session
    req.session.user = { id: user._id, username: user.username, email: user.email };
    res.redirect("/chats");
  } catch (err) {
    console.error(err);
    res.render("auth/login", { error: "Login failed" });
  }
};


// Logout logic
exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/auth/login");
};
