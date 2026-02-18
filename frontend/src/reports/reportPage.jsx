import { Link } from 'react-router-dom';
import { demoStats } from '../data';
import '../index.css';

const ReportPage = () => {
    const reportMenus = [
        {
            id: 1,
            title: "Active Issues",
            icon: "📖",
            description: "View all currently issued items",
            link: "/examples/active-issues",
            count: demoStats.activeIssues
        },
        {
            id: 2,
            title: "Books Inventory",
            icon: "📚",
            description: "Complete books inventory report",
            link: "/examples/books",
            count: demoStats.totalBooks
        },
        {
            id: 3,
            title: "Members List",
            icon: "👥",
            description: "All registered members",
            link: "/examples/membership",
            count: demoStats.totalMembers
        },
        {
            id: 4,
            title: "Movies Inventory",
            icon: "🎬",
            description: "Complete movies inventory report",
            link: "/examples/movies",
            count: demoStats.totalMovies
        },
        {
            id: 5,
            title: "Overdue Items",
            icon: "⏰",
            description: "Items overdue for return",
            link: "/examples/overdue",
            count: demoStats.overdueIssues
        },
        {
            id: 6,
            title: "Pending Requests",
            icon: "⚠️",
            description: "Pending issue requests",
            link: "/examples/pending",
            count: demoStats.activeIssues
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-black mb-2 text-center">Library Reports</h1>
                <p className="text-gray-600 text-center mb-12">Manage and view comprehensive library statistics and reports</p>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-black">
                        <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Members</h3>
                        <p className="text-3xl font-bold text-black">{demoStats.totalMembers}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-black">
                        <h3 className="text-gray-600 text-sm font-semibold mb-2">Active Issues</h3>
                        <p className="text-3xl font-bold text-black">{demoStats.activeIssues}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-black">
                        <h3 className="text-gray-600 text-sm font-semibold mb-2">Overdue Items</h3>
                        <p className="text-3xl font-bold text-red-700">{demoStats.overdueIssues}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-black">
                        <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Books</h3>
                        <p className="text-3xl font-bold text-black">{demoStats.totalBooks}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-black">
                        <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Movies</h3>
                        <p className="text-3xl font-bold text-black">{demoStats.totalMovies}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-black">
                        <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Fines</h3>
                        <p className="text-3xl font-bold text-red-700">₹{demoStats.totalFines}</p>
                    </div>
                </div>

                {/* Report Cards */}
                <h2 className="text-2xl font-bold text-black mb-6">Available Reports</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reportMenus.map((menu) => (
                        <Link key={menu.id} to={menu.link}>
                            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 border-l-4 border-black h-full">
                                <div className="text-4xl mb-3">{menu.icon}</div>
                                <h3 className="text-lg font-bold text-black mb-2">{menu.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{menu.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-black bg-gray-100 px-3 py-1 rounded-full">
                                        Count: {menu.count}
                                    </span>
                                    <span className="text-black font-semibold">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReportPage;
