const bcrypt = require('bcrypt');
const authRoutes = require('./routes/authRoutes');

// Example usage of bcrypt
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Hashed Password:', hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
  }
};

// Example function to verify password
const verifyPassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Password Match:', isMatch);
    return isMatch;
  } catch (error) {
    console.error('Error verifying password:', error);
  }
};

// Example usage
(async () => {
  const password = 'examplePassword';
  const hashedPassword = await hashPassword(password);
  await verifyPassword(password, hashedPassword);
})();

// Use auth routes
app.use('/api/auth', authRoutes);