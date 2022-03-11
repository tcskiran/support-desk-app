const asyncHandler = require('express-async-handler');

// desc: Register new user
// route: /api/users
// access: public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please fill all fields');
  }
  res.send('Register done');
});

// desc: Login user
// route: /api/users/login
// access: public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login done');
});

module.exports = { registerUser, loginUser };
