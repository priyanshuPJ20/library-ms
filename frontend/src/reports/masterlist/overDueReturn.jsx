import { demoIssueTransactions } from '../../data';
import '../../index.css';

const OverDueReturn = () => {
    const overdueIssues = demoIssueTransactions.filter(t => t.status === 'overdue');

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-black mb-6">Overdue Items</h1>
                
                {overdueIssues.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-600">No overdue items</p>
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
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Due Date</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Days Overdue</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Fine (₹)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {overdueIssues.map((transaction) => {
                                        const today = new Date();
                                        const dueDate = new Date(transaction.dueDate);
                                        const daysOverdue = Math.ceil((today - dueDate) / (1000 * 60 * 60 * 24));
                                        
                                        return (
                                            <tr key={transaction._id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 text-sm text-black">{transaction.memberName}</td>
                                                <td className="px-6 py-4 text-sm text-black">{transaction.itemName}</td>
                                                <td className="px-6 py-4 text-sm">
                                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 capitalize">
                                                        {transaction.itemType}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-black">{transaction.dueDate}</td>
                                                <td className="px-6 py-4 text-sm">
                                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                                                        {daysOverdue} days
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-bold text-red-700">₹{transaction.fine}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <div className="grid grid-cols-2 gap-4">
                                <p className="text-sm text-gray-600">Total Overdue: <span className="font-semibold text-black">{overdueIssues.length}</span></p>
                                <p className="text-sm text-gray-600">Total Fine: <span className="font-semibold text-red-700">₹{overdueIssues.reduce((sum, t) => sum + t.fine, 0)}</span></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OverDueReturn;
