import { demoMovies } from '../../data';
import '../../index.css';

const Movies = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-black mb-6">Movies Inventory</h1>
                
                {demoMovies.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-600">No movies found</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Movie Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Date of Procurement</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Total Quantity</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Available</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Issued</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {demoMovies.map((movie) => {
                                        const issuedCount = movie.quantity - movie.availableQuantity;
                                        
                                        return (
                                            <tr key={movie._id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 text-sm text-black">{movie.name}</td>
                                                <td className="px-6 py-4 text-sm text-black">{movie.dateOfProcurement}</td>
                                                <td className="px-6 py-4 text-sm text-black font-semibold">{movie.quantity}</td>
                                                <td className="px-6 py-4 text-sm font-semibold text-green-700">{movie.availableQuantity}</td>
                                                <td className="px-6 py-4 text-sm font-semibold text-red-700">{issuedCount}</td>
                                                <td className="px-6 py-4 text-sm">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                        movie.availableQuantity === 0 ? 'bg-red-100 text-red-800' : movie.availableQuantity <= 1 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                                                    }`}>
                                                        {movie.availableQuantity === 0 ? 'Out of Stock' : movie.availableQuantity <= 1 ? 'Low Stock' : 'In Stock'}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-sm text-gray-600">Total Movies: <span className="font-semibold text-black">{demoMovies.length}</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Movies;
