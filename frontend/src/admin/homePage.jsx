import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

const AdminHomePage = () => {
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        totalMembers: 0,
        totalBooks: 0,
        totalMovies: 0,
        activeIssues: 0,
    });

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('userType');
        navigate('/');
    };

    return (
        <div className="admin-container">
            {/* Header */}
            <header className="admin-header">
                <div className="header-content">
                    <h1>Admin Dashboard</h1>
                    <button onClick={handleLogout} className="btn btn-danger">
                        Logout
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="admin-content">
                {/* Quick Stats */}
                <section className="stats-section">
                    <h2>Quick Statistics</h2>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>Total Members</h3>
                            <p className="stat-number">{stats.totalMembers}</p>
                        </div>
                        <div className="stat-card">
                            <h3>Total Books</h3>
                            <p className="stat-number">{stats.totalBooks}</p>
                        </div>
                        <div className="stat-card">
                            <h3>Total Movies</h3>
                            <p className="stat-number">{stats.totalMovies}</p>
                        </div>
                        <div className="stat-card">
                            <h3>Active Issues</h3>
                            <p className="stat-number">{stats.activeIssues}</p>
                        </div>
                    </div>
                </section>

                {/* Navigation Menu */}
                <section className="menu-section">
                    <h2>Admin Functions</h2>
                    <div className="menu-grid">
                        {/* Maintenance */}
                        <Link to="/admin/maintenance" className="menu-card">
                            <div className="card-icon">🔧</div>
                            <h3>Maintenance</h3>
                            <p>Manage members, books/movies, and users</p>
                        </Link>

                        {/* Reports */}
                        <Link to="/admin/reports" className="menu-card">
                            <div className="card-icon">📊</div>
                            <h3>Reports</h3>
                            <p>View library statistics and reports</p>
                        </Link>

                        {/* Transactions */}
                        <Link to="/admin/transactions" className="menu-card">
                            <div className="card-icon">💱</div>
                            <h3>Transactions</h3>
                            <p>Manage book issues and returns</p>
                        </Link>
                    </div>
                </section>

                {/* Quick Actions */}
                <section className="quick-actions">
                    <h2>Quick Actions</h2>
                    <div className="action-buttons">
                        <Link to="/admin/maintenance/add-member" className="btn btn-primary">
                            Add Member
                        </Link>
                        <Link to="/admin/maintenance/add-book-movie" className="btn btn-primary">
                            Add Book/Movie
                        </Link>
                        <Link to="/admin/reports" className="btn btn-info">
                            View Reports
                        </Link>
                        <Link to="/admin/transactions/issue" className="btn btn-success">
                            Issue Book
                        </Link>
                    </div>
                </section>
            </div>

            <style jsx>{`
        .admin-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .admin-header {
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
          font-size: 32px;
        }

        .admin-content {
          max-width: 1200px;
          margin: 30px auto;
          padding: 0 20px;
        }

        .stats-section h2,
        .menu-section h2,
        .quick-actions h2 {
          color: white;
          margin-bottom: 20px;
          font-size: 24px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        .stat-card h3 {
          margin: 0 0 10px 0;
          color: #667eea;
          font-size: 16px;
        }

        .stat-number {
          margin: 0;
          font-size: 36px;
          font-weight: bold;
          color: #333;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .menu-card {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          text-decoration: none;
          color: #333;
          transition: all 0.3s ease;
          text-align: center;
        }

        .menu-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
        }

        .card-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .menu-card h3 {
          margin: 10px 0;
          color: #667eea;
        }

        .menu-card p {
          margin: 0;
          font-size: 14px;
          color: #666;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-primary {
          background: #667eea;
          color: white;
        }

        .btn-primary:hover {
          background: #5568d3;
        }

        .btn-info {
          background: #17a2b8;
          color: white;
        }

        .btn-info:hover {
          background: #138496;
        }

        .btn-success {
          background: #28a745;
          color: white;
        }

        .btn-success:hover {
          background: #218838;
        }

        .btn-danger {
          background: #dc3545;
          color: white;
          padding: 8px 16px;
          font-size: 14px;
        }

        .btn-danger:hover {
          background: #c82333;
        }
      `}</style>
        </div>
    );
};

export default AdminHomePage;
