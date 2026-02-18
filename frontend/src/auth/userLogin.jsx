import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { demoUsers } from '../data';
import '../index.css';

const UserLogin = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState('user'); // 'user' or 'admin'
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!userId.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      // Simulate login delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Demo credentials validation using data.js
      const demoCredentials = {
        'admin1': { password: 'password123', type: 'admin' },
        'user1': { password: 'password123', type: 'user' },
        'librarian1': { password: 'password123', type: 'admin' },
        'user2': { password: 'password123', type: 'user' }
      };

      const credentials = demoCredentials[userId];

      if (!credentials || credentials.password !== password) {
        throw new Error('Invalid credentials. Please check your user ID and password.');
      }

      if (credentials.type !== loginType) {
        throw new Error(`This user is a ${credentials.type}, not a ${loginType}.`);
      }

      // Find user in demo data
      const user = demoUsers.find(u => u.userId === userId);
      if (!user) {
        throw new Error('User not found in system.');
      }

      // Store auth token and user type in localStorage
      localStorage.setItem('userToken', userId);
      localStorage.setItem('userType', loginType);
      localStorage.setItem('userId', user._id);

      // Redirect based on user type
      const redirectPath = loginType === 'admin' ? '/admin/homePage' : '/user/homePage';
      navigate(redirectPath);
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Library Management System</h1>

        {/* Login Type Selection */}
        <div className="login-type-selector">
          <button
            className={`type-btn ${loginType === 'user' ? 'active' : ''}`}
            onClick={() => setLoginType('user')}
          >
            User Login
          </button>
          <button
            className={`type-btn ${loginType === 'admin' ? 'active' : ''}`}
            onClick={() => setLoginType('admin')}
          >
            Admin Login
          </button>
        </div>

        {/* Error Message */}
        {error && <div className="alert alert-error">{error}</div>}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="userId">User ID</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your user ID"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-login" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="login-footer">
          <p>Demo Credentials:</p>
          <p>Admin: admin1 / password123</p>
          <p>User: user1 / password123</p>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .login-box {
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 400px;
        }

        .login-box h1 {
          text-align: center;
          color: #333;
          margin-bottom: 30px;
          font-size: 24px;
        }

        .login-type-selector {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .type-btn {
          flex: 1;
          padding: 10px;
          border: 2px solid #ddd;
          background: white;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .type-btn.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .type-btn:hover {
          border-color: #667eea;
        }

        .alert {
          padding: 12px;
          border-radius: 5px;
          margin-bottom: 20px;
        }

        .alert-error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          margin-bottom: 5px;
          color: #333;
          font-weight: 500;
        }

        .form-group input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 14px;
        }

        .form-group input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
        }

        .btn-login {
          padding: 12px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .btn-login:hover:not(:disabled) {
          background: #5568d3;
        }

        .btn-login:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .login-footer {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          text-align: center;
          font-size: 12px;
          color: #666;
        }

        .login-footer p {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
};

export default UserLogin;