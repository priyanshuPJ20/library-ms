import { useState } from 'react';
import { demoUsers } from '../../../data';
import '../../../index.css';

const AddUser = () => {
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
        confirmPassword: '',
        userType: 'user',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState(demoUsers);

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

        if (!formData.password) {
            setError('Please enter a password');
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

        setLoading(true);

        try {
            // Use demo data instead of API
            const newUser = {
                _id: Date.now().toString(),
                userId: formData.userId,
                userType: formData.userType,
                createdAt: new Date().toISOString().split('T')[0],
                updatedAt: new Date().toISOString().split('T')[0],
            };

            setUsers([...users, newUser]);
            setSuccess('User created successfully!');
            setFormData({
                userId: '',
                password: '',
                confirmPassword: '',
                userType: 'user',
            });

            // Clear success message after 3 seconds
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            setError(err.message || 'Error adding user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-black mb-6 text-center">Add New User</h1>

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
                            placeholder="Enter unique user ID"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-black">Password *</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter password (min 6 characters)"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">Confirm Password *</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

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
                        <button
                            type="button"
                            className="flex-1 bg-gray-200 text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-300 transition"
                            onClick={() => {
                                setFormData({
                                    userId: '',
                                    password: '',
                                    confirmPassword: '',
                                    userType: 'user',
                                });
                                setError('');
                                setSuccess('');
                            }}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="flex-1 bg-black text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-800 transition disabled:opacity-50" disabled={loading}>
                            {loading ? 'Adding User...' : 'Add User'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
