/**
 * Data Usage Examples
 * This file demonstrates how to use the demo data in your React components
 */

import {
    demoMembers,
    demoBooks,
    demoMovies,
    demoIssueTransactions,
    demoUsers,
    demoStats,
    libraryInfo,
    borrowingRules,
    adminDashboardMenus,
    userServiceMenus
} from './data'

/**
 * Example 1: Displaying member list in a component
 */
export const MemberListExample = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-black mb-4">Members</h2>
            <table className="w-full">
                <thead className="bg-black text-white">
                    <tr>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Phone</th>
                        <th className="p-3 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {demoMembers.map((member) => (
                        <tr key={member._id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">{member.name}</td>
                            <td className="p-3">{member.email}</td>
                            <td className="p-3">{member.phone}</td>
                            <td className="p-3">
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${member.status === 'active'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                    }`}>
                                    {member.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

/**
 * Example 2: Displaying library stats dashboard
 */
export const StatsDashboardExample = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-black">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Members</h3>
                <p className="text-3xl font-bold text-black">{demoStats.totalMembers}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-black">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Books</h3>
                <p className="text-3xl font-bold text-black">{demoStats.totalBooks}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-black">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Movies</h3>
                <p className="text-3xl font-bold text-black">{demoStats.totalMovies}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-black">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">Active Issues</h3>
                <p className="text-3xl font-bold text-black">{demoStats.activeIssues}</p>
            </div>
        </div>
    )
}

/**
 * Example 3: Displaying books and movies
 */
export const BooksAndMoviesExample = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...demoBooks, ...demoMovies].map((item) => (
                <div key={item._id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-black text-lg">{item.name}</h3>
                        <span className="bg-black text-white px-2 py-1 text-xs rounded font-semibold">
                            {item.type.toUpperCase()}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Available: {item.availableQuantity}/{item.quantity}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: `${(item.availableQuantity / item.quantity) * 100}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

/**
 * Example 4: Displaying transactions with status
 */
export const TransactionsExample = () => {
    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
                <thead className="bg-black text-white">
                    <tr>
                        <th className="p-4 text-left">Member</th>
                        <th className="p-4 text-left">Item</th>
                        <th className="p-4 text-left">Status</th>
                        <th className="p-4 text-left">Due Date</th>
                        <th className="p-4 text-left">Fine</th>
                    </tr>
                </thead>
                <tbody>
                    {demoIssueTransactions.map((transaction) => (
                        <tr key={transaction._id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-4 text-black">{transaction.memberName}</td>
                            <td className="p-4 text-black">{transaction.itemName}</td>
                            <td className="p-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${transaction.status === 'returned'
                                        ? 'bg-green-100 text-green-800'
                                        : transaction.status === 'overdue'
                                            ? 'bg-red-100 text-red-800'
                                            : 'bg-blue-100 text-blue-800'
                                    }`}>
                                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                                </span>
                            </td>
                            <td className="p-4 text-black">{transaction.dueDate}</td>
                            <td className="p-4 font-bold text-red-600">₹{transaction.fine}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

/**
 * Example 5: Displaying borrowing rules
 */
export const BorrowingRulesExample = () => {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-black mb-4">Borrowing Rules</h2>
            <ul className="space-y-3">
                {borrowingRules.map((rule) => (
                    <li key={rule.id} className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-black text-white text-sm font-bold mt-1">
                            {rule.id}
                        </span>
                        <span className="text-gray-700 pt-1">{rule.rule}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

/**
 * Example 6: Navigation menus
 */
export const AdminMenusExample = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {adminDashboardMenus.map((menu) => (
                <div key={menu.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-black">
                    <div className="text-4xl mb-2">{menu.icon}</div>
                    <h3 className="text-lg font-bold text-black mb-1">{menu.title}</h3>
                    <p className="text-sm text-gray-600">{menu.description}</p>
                </div>
            ))}
        </div>
    )
}

/**
 * Example 7: Using library info in components
 */
export const LibraryInfoExample = () => {
    return (
        <div className="bg-black text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">{libraryInfo.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="font-semibold mb-1">📍 Address:</p>
                    <p className="text-gray-300">{libraryInfo.address}</p>
                </div>
                <div>
                    <p className="font-semibold mb-1">📞 Phone:</p>
                    <p className="text-gray-300">{libraryInfo.phone}</p>
                </div>
                <div>
                    <p className="font-semibold mb-1">✉️ Email:</p>
                    <p className="text-gray-300">{libraryInfo.email}</p>
                </div>
                <div>
                    <p className="font-semibold mb-1">🕐 Hours:</p>
                    <p className="text-gray-300">{libraryInfo.hours}</p>
                </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="font-semibold mb-2">Library Policies:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Borrowing Period: {libraryInfo.borrowingDays} days</li>
                    <li>• Fine Per Day: ₹{libraryInfo.finePerDay}</li>
                    <li>• Max Books: {libraryInfo.maxBooksPerMember}</li>
                    <li>• Max Movies: {libraryInfo.maxMoviesPerMember}</li>
                </ul>
            </div>
        </div>
    )
}

export default {
    MemberListExample,
    StatsDashboardExample,
    BooksAndMoviesExample,
    TransactionsExample,
    BorrowingRulesExample,
    AdminMenusExample,
    LibraryInfoExample
}
