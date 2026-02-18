import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { demoMembers } from '../../../data';
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

    const fetchMemberData = () => {
        try {
            // Use demo data instead of API
            const member = demoMembers.find(m => m._id === id);

            if (!member) {
                throw new Error('Member not found');
            }

            setFormData({
                name: member.name,
                email: member.email,
                phone: member.phone,
                password: '',
                confirmPassword: '',
                status: member.status,
                isAdmin: member.isAdmin,
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
            // Use demo data update instead of API
            const updateData = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                status: formData.status,
                isAdmin: formData.isAdmin,
            };

            // In a real app, this would be an API call
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
        return <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center"><p className="text-black">Loading member data...</p></div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-black mb-6 text-center">Update Member</h1>

                {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
                {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{success}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-black">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter member name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-black">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter email address"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-black">Phone *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter phone number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
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
                        <label htmlFor="status" className="block text-sm font-medium text-black">Status</label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-2 py-2">
                        <input
                            type="checkbox"
                            id="isAdmin"
                            name="isAdmin"
                            checked={formData.isAdmin}
                            onChange={handleInputChange}
                            className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-black"
                        />
                        <label htmlFor="isAdmin" className="text-sm font-medium text-black">Make Admin</label>
                    </div>

                    <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-800 transition disabled:opacity-50" disabled={loading}>
                        {loading ? 'Updating Member...' : 'Update Member'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMember;
