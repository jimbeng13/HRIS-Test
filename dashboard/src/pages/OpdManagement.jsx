import React from 'react';
import { Search, Plus, MapPin, Clock, Edit, Trash2, Map } from 'lucide-react';

const mockOpdData = [
    {
        id: 1,
        name: "SEKRETARIAT DAERAH",
        hq: "HQ: -3.4076837279619867, 119.31102164068393",
        schedule: "Reguler 5 Hari",
        radius: "80 Meter",
        locations: 3
    }
];

const OpdManagement = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Top Controls */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 hidden">Manajemen OPD</h2>
                    <p className="text-sm text-gray-500 hidden">Kelola instansi dan titik lokasi absensi pegawai.</p>
                </div>

                <div className="flex gap-4 ml-auto">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Cari Nama Instansi..."
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-[300px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors">
                        <Plus size={18} />
                        Tambah OPD
                    </button>
                </div>
            </div>

            {/* Main Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold border-b">
                            <tr>
                                <th className="px-6 py-4 w-12 text-center">NO</th>
                                <th className="px-6 py-4">NAMA INSTANSI</th>
                                <th className="px-6 py-4 text-center">JADWAL KERJA</th>
                                <th className="px-6 py-4 text-center">RADIUS</th>
                                <th className="px-6 py-4 text-center">TITIK LOKASI</th>
                                <th className="px-6 py-4 text-center w-32">AKSI</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockOpdData.map((opd, index) => (
                                <tr key={opd.id} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="px-6 py-4 text-center font-medium text-gray-500">{index + 1}</td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-800">{opd.name}</div>
                                        <div className="text-xs text-gray-500 mt-1">{opd.hq}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center">
                                            <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
                                                <Clock size={12} />
                                                {opd.schedule}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center">
                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                                {opd.radius}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center">
                                            <button className="flex items-center gap-1.5 px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium border border-cyan-100 hover:bg-cyan-100 transition-colors">
                                                <MapPin size={12} />
                                                {opd.locations} Lokasi Kantor
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2 opacity-100">
                                            <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Lihat Lokasi">
                                                <Map size={16} />
                                            </button>
                                            <button className="p-1.5 text-amber-500 hover:bg-amber-50 rounded-md transition-colors" title="Edit">
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-md transition-colors" title="Hapus">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {mockOpdData.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                                        Belum ada data OPD yang ditambahkan.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Utility CSS to supplement without tailwind */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .hidden { display: none; }
        .text-xl { font-size: 1.25rem; }
        .font-bold { font-weight: 700; }
        .text-gray-800 { color: #1f2937; }
        .text-gray-500 { color: #6b7280; }
        .ml-auto { margin-left: auto; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .left-3 { left: 0.75rem; }
        .top-1\/2 { top: 50%; }
        .-translate-y-1\/2 { transform: translateY(-50%); }
        .text-gray-400 { color: #9ca3af; }
        .pl-10 { padding-left: 2.5rem; }
        .pr-4 { padding-right: 1rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .border-gray-200 { border-color: #e5e7eb; }
        .border-gray-100 { border-color: #f3f4f6; }
        .rounded-md { border-radius: 0.375rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-full { border-radius: 9999px; }
        .w-\[300px\] { width: 300px; }
        .bg-blue-600 { background-color: #2563eb; }
        .bg-blue-50 { background-color: #eff6ff; }
        .bg-cyan-50 { background-color: #ecfeff; }
        .bg-gray-50 { background-color: #f9fafb; }
        .bg-gray-100 { background-color: #f3f4f6; }
        .hover\:bg-blue-700:hover { background-color: #1d4ed8; }
        .hover\:bg-blue-50:hover { background-color: #eff6ff; }
        .hover\:bg-cyan-100:hover { background-color: #cffafe; }
        .hover\:bg-amber-50:hover { background-color: #fffbeb; }
        .hover\:bg-red-50:hover { background-color: #fef2f2; }
        .text-white { color: #ffffff; }
        .text-blue-700 { color: #1d4ed8; }
        .text-blue-600 { color: #2563eb; }
        .text-cyan-700 { color: #0e7490; }
        .text-amber-500 { color: #f59e0b; }
        .text-red-500 { color: #ef4444; }
        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .uppercase { text-transform: uppercase; }
        .overflow-hidden { overflow: hidden; }
        .divide-y > :not([hidden]) ~ :not([hidden]) { border-top-width: 1px; border-color: #f3f4f6; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .w-12 { width: 3rem; }
        .w-32 { width: 8rem; }
        .mt-1 { margin-top: 0.25rem; }
        .gap-1\.5 { gap: 0.375rem; }
        .border-blue-100 { border-color: #dbeafe; }
        .border-cyan-100 { border-color: #cffafe; }
        .p-1\.5 { padding: 0.375rem; }
      `}} />
        </div>
    );
};

export default OpdManagement;
