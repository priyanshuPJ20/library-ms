import { demoIssueTransactions } from '../../data';
import '../../index.css';

const PendingIssueRequest = () => {
    // Pending requests are similar to active issued items
    const pendingRequests = demoIssueTransactions.filter(t => t.status === 'issued' || t.status === 'overdue');

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-black mb-6">Pending Issue Requests</h1>
                
                {pendingRequests.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-600">No pending requests</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Member Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Item Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Type</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Request Status</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Issued Date</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {pendingRequests.map((transaction) => (
                                        <tr key={transaction._id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm text-black">{transaction.memberName}</td>
                                            <td className="px-6 py-4 text-sm text-black">{transaction.itemName}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 capitalize">
                                                    {transaction.itemType}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    transaction.status === 'overdue' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-black">{transaction.issuedDate}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <button className="px-3 py-1 bg-black text-white rounded-md text-xs font-semibold hover:bg-gray-800 transition">
                                                    Review
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-sm text-gray-600">Total Pending Requests: <span className="font-semibold text-black">{pendingRequests.length}</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PendingIssueRequest;
