import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

const UserHomePage = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('User');

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');
        if (!userToken) {
            navigate('/');
        } else {
            setUserName(userToken);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userType');
        navigate('/');
    };

    return (
        <div className="user-container">
            {/* Header */}
            <header className="user-header">
                <div className="header-content">
                    <h1>Welcome, {userName}!</h1>
                    <button onClick={handleLogout} className="btn btn-danger">
                        Logout
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="user-content">
                {/* Available Services */}
                <section className="services-section">
                    <h2>Available Services</h2>
                    <div className="services-grid">
                        {/* Search Books */}
                        <Link to="/user/transactions/search" className="service-card">
                            <div className="card-icon">🔍</div>
                            <h3>Search Books/Movies</h3>
                            <p>Find books and movies available in the library</p>
                        </Link>

                        {/* My Issues */}
                        <Link to="/user/reports/issues" className="service-card">
                            <div className="card-icon">📋</div>
                            <h3>My Issued Items</h3>
                            <p>View books and movies you have issued</p>
                        </Link>

                        {/* Overdue Items */}
                        <Link to="/user/reports/overdue" className="service-card">
                            <div className="card-icon">⏰</div>
                            <h3>Overdue Items</h3>
                            <p>Check if any items are overdue for return</p>
                        </Link>

                        {/* Pay Fine */}
                        <Link to="/user/transactions/fine" className="service-card">
                            <div className="card-icon">💰</div>
                            <h3>Pay Fine</h3>
                            <p>Pay any outstanding fines</p>
                        </Link>
                    </div>
                </section>

                {/* Quick Information */}
                <section className="info-section">
                    <h2>Quick Information</h2>
                    <div className="info-grid">
                        <div className="info-card">
                            <h3>Library Hours</h3>
                            <p>Monday - Friday: 9 AM - 6 PM</p>
                            <p>Saturday: 10 AM - 4 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                        <div className="info-card">
                            <h3>Borrowing Rules</h3>
                            <p>• Maximum 5 items at a time</p>
                            <p>• Borrowing period: 14 days</p>
                            <p>• Fine: ₹10 per day for overdue items</p>
                        </div>
                        <div className="info-card">
                            <h3>Contact Us</h3>
                            <p>Phone: (555) 123-4567</p>
                            <p>Email: library@example.com</p>
                            <p>Location: Central Library Building</p>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
        .user-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .user-header {
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-content h1 {
          margin: 0;
          font-size: 28px;
        }

        .user-content {
          max-width: 1200px;
          margin: 30px auto;
          padding: 0 20px;
        }

        .services-section h2,
        .info-section h2 {
          color: white;
          margin-bottom: 20px;
          font-size: 24px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .service-card {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          text-decoration: none;
          color: #333;
          transition: all 0.3s ease;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
        }

        .card-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .service-card h3 {
          margin: 10px 0;
          color: #667eea;
        }

        .service-card p {
          margin: 0;
          font-size: 14px;
          color: #666;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .info-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }

        .info-card h3 {
          color: #667eea;
          margin-top: 0;
        }

        .info-card p {
          margin: 8px 0;
          color: #333;
          font-size: 14px;
        }

        .btn {
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-danger {
          background: #dc3545;
          color: white;
        }

        .btn-danger:hover {
          background: #c82333;
        }
      `}</style>
        </div>
    );
};

export default UserHomePage;
