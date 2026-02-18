import { useState } from 'react';
import '../../../index.css';

const AddBookMovies = () => {
    const [formData, setFormData] = useState({
        type: 'book', // 'book' or 'movie'
        name: '',
        dateOfProcurement: '',
        quantity: 1,
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'number' ? parseInt(value) || 1 : value,
        }));
    };

    const handleRadioChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            type: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validation
        if (!formData.name.trim()) {
            setError('Please enter a book/movie name');
            return;
        }

        if (!formData.dateOfProcurement) {
            setError('Please select a date of procurement');
            return;
        }

        if (formData.quantity < 1) {
            setError('Quantity must be at least 1');
            return;
        }

        setLoading(true);

        try {
            // Use demo data instead of API
            const newItem = {
                _id: Date.now().toString(),
                type: formData.type,
                name: formData.name,
                dateOfProcurement: formData.dateOfProcurement,
                quantity: formData.quantity,
                availableQuantity: formData.quantity,
                createdAt: new Date().toISOString().split('T')[0],
                updatedAt: new Date().toISOString().split('T')[0],
            };

            setItems([...items, newItem]);
            setSuccess(`${formData.type.charAt(0).toUpperCase() + formData.type.slice(1)} added successfully!`);
            setFormData({
                type: 'book',
                name: '',
                dateOfProcurement: '',
                quantity: 1,
            });

            // Clear success message after 3 seconds
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            setError(err.message || 'Error adding book/movie');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-black mb-6 text-center">Add Book/Movie</h1>

                {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
                {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{success}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Type Selection - Radio Buttons */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-black">Type *</label>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="type"
                                    value="book"
                                    checked={formData.type === 'book'}
                                    onChange={handleRadioChange}
                                    className="w-4 h-4"
                                />
                                <span className="text-sm text-black">Book</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="type"
                                    value="movie"
                                    checked={formData.type === 'movie'}
                                    onChange={handleRadioChange}
                                    className="w-4 h-4"
                                />
                                <span className="text-sm text-black">Movie</span>
                            </label>
                        </div>
                    </div>

                    {/* Name Field */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-black">
                            {formData.type.charAt(0).toUpperCase() + formData.type.slice(1)} Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={`Enter ${formData.type} name`}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    {/* Date of Procurement */}
                    <div className="space-y-2">
                        <label htmlFor="dateOfProcurement" className="block text-sm font-medium text-black">Date of Procurement *</label>
                        <input
                            type="date"
                            id="dateOfProcurement"
                            name="dateOfProcurement"
                            value={formData.dateOfProcurement}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    {/* Quantity/Copies */}
                    <div className="space-y-2">
                        <label htmlFor="quantity" className="block text-sm font-medium text-black">Quantity/Copies *</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            min="1"
                            placeholder="Enter quantity"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            className="flex-1 bg-gray-200 text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-300 transition"
                            onClick={() => {
                                setFormData({
                                    type: 'book',
                                    name: '',
                                    dateOfProcurement: '',
                                    quantity: 1,
                                });
                                setError('');
                                setSuccess('');
                            }}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="flex-1 bg-black text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-800 transition disabled:opacity-50" disabled={loading}>
                            {loading ? 'Adding...' : 'Confirm'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBookMovies;
