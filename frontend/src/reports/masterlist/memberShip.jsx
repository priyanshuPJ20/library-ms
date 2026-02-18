import { demoMembers } from '../../data';
import '../../index.css';

const Membership = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-black mb-6">Members List</h1>
                
                {demoMembers.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-600">No members found</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Member Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Phone</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Member Since</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {demoMembers.map((member) => (
                                        <tr key={member._id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm text-black">{member.name}</td>
                                            <td className="px-6 py-4 text-sm text-black">{member.email}</td>
                                            <td className="px-6 py-4 text-sm text-black">{member.phone}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    member.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-black">{member.createdAt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <div className="grid grid-cols-2 gap-4">
                                <p className="text-sm text-gray-600">Total Members: <span className="font-semibold text-black">{demoMembers.length}</span></p>
                                <p className="text-sm text-gray-600">Active Members: <span className="font-semibold text-green-700">{demoMembers.filter(m => m.status === 'active').length}</span></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Membership;
