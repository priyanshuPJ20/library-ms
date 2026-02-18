import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const MaintenanceHomePage = () => {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        {
            id: 'membership',
            title: 'Membership',
            icon: '👥',
            items: [
                { label: 'Add Member', path: '/admin/maintenance/add-member' },
                { label: 'Update Member', path: '/admin/maintenance/update-member/:id' },
            ],
        },
        {
            id: 'books-movies',
            title: 'Books/Movies',
            icon: '📚',
            items: [
                { label: 'Add Book/Movie', path: '/admin/maintenance/add-book-movie' },
                { label: 'Update Book/Movie', path: '/admin/maintenance/update-book-movie/:id' },
            ],
        },
        {
            id: 'user-management',
            title: 'User Management',
            icon: '👤',
            items: [
                { label: 'Add User', path: '/admin/user-management/add-user' },
                { label: 'Update User', path: '/admin/user-management/update-user/:id' },
            ],
        },
    ];

    return (
        <div className="maintenance-container">
            <div className="maintenance-header">
                <h1>Admin Maintenance Panel</h1>
                <Link to="/admin/homePage" className="btn btn-secondary">
                    Back to Admin Home
                </Link>
            </div>

            <div className="maintenance-sections">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className="maintenance-section"
                        onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                    >
                        <div className="section-header">
                            <span className="section-icon">{section.icon}</span>
                            <h2>{section.title}</h2>
                        </div>

                        {activeSection === section.id && (
                            <div className="section-items">
                                {section.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="section-item"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
        .maintenance-container {
          padding: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .maintenance-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #007bff;
        }

        .maintenance-header h1 {
          margin: 0;
          color: #333;
          font-size: 28px;
        }

        .maintenance-sections {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .maintenance-section {
          background: white;
          border: 2px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .maintenance-section:hover {
          border-color: #007bff;
          box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
          transform: translateY(-2px);
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 10px;
          user-select: none;
        }

        .section-icon {
          font-size: 32px;
        }

        .section-header h2 {
          margin: 0;
          color: #333;
          font-size: 20px;
        }

        .section-items {
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .section-item {
          display: block;
          padding: 10px 15px;
          background: #f8f9fa;
          border-left: 4px solid #007bff;
          text-decoration: none;
          color: #007bff;
          border-radius: 4px;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .section-item:hover {
          background: #007bff;
          color: white;
        }

        .btn {
          padding: 10px 20px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-secondary:hover {
          background: #5a6268;
        }
      `}</style>
        </div>
    );
};

export default MaintenanceHomePage;
