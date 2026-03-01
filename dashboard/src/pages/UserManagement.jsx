import React from 'react';
import { Search, Plus, Edit, Trash2, Shield, User } from 'lucide-react';

const mockUsers = [
    { id: 1, nip: '198703122010011005', name: 'Arief Budianto', role: 'ASN', opd: 'DINAS KESEHATAN', status: 'Aktif' },
    { id: 2, nip: '199008242015032007', name: 'Siti Aminah', role: 'ASN', opd: 'BADAN PENDAPATAN DAERAH', status: 'Aktif' },
    { id: 3, nip: 'admin', name: 'Super Admin', role: 'ADMIN', opd: '-', status: 'Aktif' },
];

const UserManagement = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Header & Controls */}
            <div className="flex justify-between items-center bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Manajemen Pengguna</h2>
                    <p className="text-sm text-gray-500">Kelola data ASN dan Administrator sistem.</p>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Cari NIP / Nama..."
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-64 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm shadow-sm">
                        <Plus size={18} /> Tambah Pengguna
                    </button>
                </div>
            </div>

            {/* Main Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 w-12 text-center">NO</th>
                                <th className="px-6 py-4">PEGAWAI</th>
                                <th className="px-6 py-4">UNIT KERJA (OPD)</th>
                                <th className="px-6 py-4">HAK AKSES</th>
                                <th className="px-6 py-4 text-center">STATUS</th>
                                <th className="px-6 py-4 text-center w-32">AKSI</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockUsers.map((user, index) => (
                                <tr key={user.id} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="px-6 py-4 text-center font-medium text-gray-500">{index + 1}</td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-800">{user.name}</div>
                                        <div className="text-xs text-gray-500 mt-1">NIP. {user.nip}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-gray-700">{user.opd}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${user.role === 'ADMIN' ? 'bg-purple-50 text-purple-700 border-purple-200' : 'bg-blue-50 text-blue-700 border-blue-200'
                                            }`}>
                                            {user.role === 'ADMIN' ? <Shield size={12} /> : <User size={12} />}
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                            Aktif
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-md transition-colors" title="Edit">
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-1.5 text-red-600 hover:bg-red-100 rounded-md transition-colors" title="Hapus">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Tailwind Simulation CSS provided globally but adding any missing ones here */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .bg-white { background-color: #ffffff; }
        .p-5 { padding: 1.25rem; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .gap-6 { gap: 1.5rem; }
        .gap-3 { gap: 0.75rem; }
        .justify-between { justify-content: space-between; }
        .items-center { align-items: center; }
        .rounded-lg { border-radius: 0.5rem; }
        .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
        .border { border-width: 1px; }
        .border-gray-100 { border-color: #f3f4f6; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .font-bold { font-weight: 700; }
        .text-gray-800 { color: #1f2937; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-gray-500 { color: #6b7280; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .left-3 { left: 0.75rem; }
        .top-1\\/2 { top: 50%; }
        .-translate-y-1\\/2 { transform: translateY(-50%); }
        .text-gray-400 { color: #9ca3af; }
        .pl-10 { padding-left: 2.5rem; }
        .pr-4 { padding-right: 1rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .w-64 { width: 16rem; }
        .bg-blue-600 { background-color: #2563eb; }
        .hover\\:bg-blue-700:hover { background-color: #1d4ed8; }
        .text-white { color: #ffffff; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .font-medium { font-weight: 500; }
        .overflow-hidden { overflow: hidden; }
        .overflow-x-auto { overflow-x: auto; }
        .w-full { width: 100%; }
        .text-left { text-align: left; }
        .bg-gray-50 { background-color: #f9fafb; }
        .text-gray-600 { color: #4b5563; }
        .uppercase { text-transform: uppercase; }
        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .font-semibold { font-weight: 600; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .text-center { text-align: center; }
        .hover\\:bg-blue-50\\/30:hover { background-color: rgba(239, 246, 255, 0.3); }
        .mt-1 { margin-top: 0.25rem; }
        .inline-flex { display: inline-flex; }
        .rounded-full { border-radius: 9999px; }
        .bg-purple-50 { background-color: #faf5ff; }
        .text-purple-700 { color: #7e22ce; }
        .border-purple-200 { border-color: #e9d5ff; }
        .bg-blue-50 { background-color: #eff6ff; }
        .border-blue-200 { border-color: #bfdbfe; }
        .bg-emerald-50 { background-color: #ecfdf5; }
        .text-emerald-700 { color: #047857; }
        .border-emerald-200 { border-color: #a7f3d0; }
      `}} />
        </div>
    );
};

export default UserManagement;
