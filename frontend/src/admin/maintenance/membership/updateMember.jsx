import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../../index.css';

const UpdateMember = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        status: 'active',
        isAdmin: false,
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [fetchLoading, setFetchLoading] = useState(true);
    const [changePassword, setChangePassword] = useState(false);

    useEffect(() => {
        fetchMemberData();
    }, [id]);

    const fetchMemberData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/members/${id}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error fetching member');
            }

            setFormData({
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: '',
                confirmPassword: '',
                status: data.status,
                isAdmin: data.isAdmin,
            });
        } catch (err) {
            setError(err.message || 'Error fetching member data');
        } finally {
            setFetchLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validation
        if (!formData.name || !formData.email || !formData.phone) {
            setError('Please fill in all required fields');
            return;
        }

        if (changePassword) {
            if (!formData.password) {
                setError('Please enter a new password');
                return;
            }

            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match');
                return;
            }

            if (formData.password.length < 6) {
                setError('Password must be at least 6 characters long');
                return;
            }
        }

        setLoading(true);

        try {
            const updateData = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                status: formData.status,
                isAdmin: formData.isAdmin,
            };

            if (changePassword && formData.password) {
                updateData.password = formData.password;
            }

            const response = await fetch(`http://localhost:5000/api/members/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error updating member');
            }

            setSuccess('Member updated successfully!');
            setChangePassword(false);
            setFormData((prev) => ({
                ...prev,
                password: '',
                confirmPassword: '',
            }));

            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            setError(err.message || 'Error updating member');
        } finally {
            setLoading(false);
        }
    };

    if (fetchLoading) {
        return <div className="container"><p>Loading member data...</p></div>;
    }

    return (
        <div className="container">
            <div className="form-wrapper">
                <h1>Update Member</h1>

                {error && <div className="alert alert-error">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter member name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter email address"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter phone number"
                            required
                        />
                    </div>

                    <div className="form-group checkbox">
                        <label htmlFor="changePassword">
                            <input
                                type="checkbox"
                                id="changePassword"
                                checked={changePassword}
                                onChange={(e) => setChangePassword(e.target.checked)}
                            />
                            Change Password
                        </label>
                    </div>

                    {changePassword && (
                        <>
                            <div className="form-group">
                                <label htmlFor="password">New Password *</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter new password"
                                    required={changePassword}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm New Password *</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Confirm new password"
                                    required={changePassword}
                                />
                            </div>
                        </>
                    )}

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="form-group checkbox">
                        <label htmlFor="isAdmin">
                            <input
                                type="checkbox"
                                id="isAdmin"
                                name="isAdmin"
                                checked={formData.isAdmin}
                                onChange={handleInputChange}
                            />
                            Make Admin
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Updating Member...' : 'Update Member'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMember;
