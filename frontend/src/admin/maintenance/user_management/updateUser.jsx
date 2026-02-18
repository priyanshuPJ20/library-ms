import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { demoUsers } from '../../../data';
import '../../../index.css';

const UpdateUser = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
        confirmPassword: '',
        userType: 'user',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [fetchLoading, setFetchLoading] = useState(true);
    const [changePassword, setChangePassword] = useState(false);

    useEffect(() => {
        if (id) {
            fetchUserData();
        }
    }, [id]);

    const fetchUserData = () => {
        try {
            // Use demo data instead of API
            const user = demoUsers.find(u => u._id === id);
            
            if (!user) {
                throw new Error('User not found');
            }

            setFormData({
                userId: user.userId,
                password: '',
                confirmPassword: '',
                userType: user.userType,
            });
        } catch (err) {
            setError(err.message || 'Error fetching user data');
        } finally {
            setFetchLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validation
        if (!formData.userId.trim()) {
            setError('Please enter a user ID');
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
            // Use demo data update instead of API
            const updateData = {
                userType: formData.userType,
            };

            if (changePassword) {
                updateData.password = formData.password;
            }

            // In a real app, this would be an API call
            setSuccess('User updated successfully!');
            setChangePassword(false);
            setFormData((prev) => ({
                ...prev,
                password: '',
                confirmPassword: '',
            }));

            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            setError(err.message || 'Error updating user');
        } finally {
            setLoading(false);
        }
    };

    if (fetchLoading) {
        return <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center"><p className="text-black">Loading user data...</p></div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-black mb-6 text-center">Update User</h1>

                {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
                {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{success}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="userId" className="block text-sm font-medium text-black">User ID *</label>
                        <input
                            type="text"
                            id="userId"
                            name="userId"
                            value={formData.userId}
                            onChange={handleInputChange}
                            placeholder="User ID"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-gray-100"
                            disabled
                        />
                    </div>

                    <div className="flex items-center space-x-2 py-2">
                        <input
                            type="checkbox"
                            id="changePassword"
                            checked={changePassword}
                            onChange={(e) => setChangePassword(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-black"
                        />
                        <label htmlFor="changePassword" className="text-sm font-medium text-black">Change Password</label>
                    </div>

                    {changePassword && (
                        <>
                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm font-medium text-black">New Password *</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter new password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    required={changePassword}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">Confirm New Password *</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Confirm new password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    required={changePassword}
                                />
                            </div>
                        </>
                    )}

                    <div className="space-y-2">
                        <label htmlFor="userType" className="block text-sm font-medium text-black">User Type *</label>
                        <select
                            id="userType"
                            name="userType"
                            value={formData.userType}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            <option value="user">Regular User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button type="button" className="flex-1 bg-gray-200 text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-300 transition" onClick={() => window.history.back()}>
                            Cancel
                        </button>
                        <button type="submit" className="flex-1 bg-black text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-800 transition disabled:opacity-50" disabled={loading}>
                            {loading ? 'Updating User...' : 'Update User'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;
