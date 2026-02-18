import { demoBooks } from '../../data';
import '../../index.css';

const Books = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-black mb-6">Books Inventory</h1>
                
                {demoBooks.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-600">No books found</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Book Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Date of Procurement</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Total Quantity</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Available</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Issued</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {demoBooks.map((book) => {
                                        const issuedCount = book.quantity - book.availableQuantity;
                                        
                                        return (
                                            <tr key={book._id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 text-sm text-black">{book.name}</td>
                                                <td className="px-6 py-4 text-sm text-black">{book.dateOfProcurement}</td>
                                                <td className="px-6 py-4 text-sm text-black font-semibold">{book.quantity}</td>
                                                <td className="px-6 py-4 text-sm font-semibold text-green-700">{book.availableQuantity}</td>
                                                <td className="px-6 py-4 text-sm font-semibold text-red-700">{issuedCount}</td>
                                                <td className="px-6 py-4 text-sm">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                        book.availableQuantity === 0 ? 'bg-red-100 text-red-800' : book.availableQuantity <= 2 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                                                    }`}>
                                                        {book.availableQuantity === 0 ? 'Out of Stock' : book.availableQuantity <= 2 ? 'Low Stock' : 'In Stock'}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-sm text-gray-600">Total Books: <span className="font-semibold text-black">{demoBooks.length}</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Books;
