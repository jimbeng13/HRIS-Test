import React from 'react';
import { Check, X, Search, FileText } from 'lucide-react';

const mockApprovals = [
    { id: 1, name: 'Arief Budianto', nip: '198703122010011005', opd: 'DINAS KESEHATAN', type: 'Cuti Tahunan', dateRange: '28 Feb 2026 - 02 Mar 2026', totalDays: 3, reason: 'Acara Keluarga', status: 'Pending' },
    { id: 2, name: 'Siti Aminah', nip: '199008242015032007', opd: 'BADAN PENDAPATAN DAERAH', type: 'Sakit', dateRange: '26 Feb 2026 - 27 Feb 2026', totalDays: 2, reason: 'Demam Berdarah (Rawat Inap)', status: 'Pending' },
    { id: 3, name: 'Budiman Hakim', nip: '198205112008011002', opd: 'DINAS KOMUNIKASI DAN INFORMATIKA', type: 'Izin', dateRange: '25 Feb 2026', totalDays: 1, reason: 'Keperluan Mendesak, Urusan Bank', status: 'Pending' },
];

const ApprovalManagement = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Top Controls */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 hidden">Approval Kehadiran & Cuti</h2>
                    <p className="text-sm text-gray-500 hidden">Verifikasi pengajuan cuti, sakit, izin, dan tugas luar pegawai.</p>
                </div>

                <div className="flex gap-4 ml-auto">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Cari Nama Pegawai..."
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-[300px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Main Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold border-b">
                            <tr>
                                <th className="px-6 py-4 w-12 text-center">NO</th>
                                <th className="px-6 py-4">PEGAWAI</th>
                                <th className="px-6 py-4">PENGAJUAN</th>
                                <th className="px-6 py-4">TANGGAL</th>
                                <th className="px-6 py-4">KETERANGAN</th>
                                <th className="px-6 py-4 text-center w-32">AKSI</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockApprovals.map((item, index) => (
                                <tr key={item.id} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="px-6 py-4 text-center font-medium text-gray-500">{index + 1}</td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-800">{item.name}</div>
                                        <div className="text-xs text-gray-500 mt-1">NIP. {item.nip}</div>
                                        <div className="text-xs font-semibold text-blue-600 mt-1">{item.opd}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${item.type === 'Cuti Tahunan' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                                item.type === 'Sakit' ? 'bg-red-50 text-red-700 border-red-200' :
                                                    'bg-orange-50 text-orange-700 border-orange-200'
                                            }`}>
                                            {item.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-700">{item.dateRange}</div>
                                        <div className="text-xs text-gray-500 mt-1">({item.totalDays} Hari)</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-gray-700 leading-relaxed max-w-[200px] block line-clamp-2">
                                            {item.reason}
                                        </span>
                                        {item.type === 'Sakit' && (
                                            <button className="flex items-center gap-1 text-xs text-blue-600 font-medium mt-2 hover:underline">
                                                <FileText size={12} /> Lihat Lampiran
                                            </button>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="flex items-center justify-center gap-1 px-3 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-md font-bold transition-colors text-xs border border-emerald-200" title="Setujui">
                                                <Check size={14} />
                                            </button>
                                            <button className="flex items-center justify-center gap-1 px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 rounded-md font-bold transition-colors text-xs border border-red-200" title="Tolak">
                                                <X size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {mockApprovals.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                                        Tidak ada pengajuan yang menunggu persetujuan.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Utility CSS */}
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
        .top-1/2 { top: 50%; }
        .-translate-y-1/2 { transform: translateY(-50%); }
        .text-gray-400 { color: #9ca3af; }
        .pl-10 { padding-left: 2.5rem; }
        .pr-4 { padding-right: 1rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .border-gray-200 { border-color: #e5e7eb; }
        .border-gray-100 { border-color: #f3f4f6; }
        .rounded-md { border-radius: 0.375rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-full { border-radius: 9999px; }
        .w-\\[300px\\] { width: 300px; }
        .bg-gray-50 { background-color: #f9fafb; }
        .bg-gray-100 { background-color: #f3f4f6; }
        .text-blue-700 { color: #1d4ed8; }
        .text-blue-600 { color: #2563eb; }
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
        .mt-2 { margin-top: 0.5rem; }
        .gap-1\\.5 { gap: 0.375rem; }
        .bg-purple-50 { background-color: #faf5ff; }
        .text-purple-700 { color: #7e22ce; }
        .border-purple-200 { border-color: #e9d5ff; }
        .bg-orange-50 { background-color: #fff7ed; }
        .text-orange-700 { color: #c2410c; }
        .border-orange-200 { border-color: #ffedd5; }
        .bg-red-50 { background-color: #fef2f2; }
        .text-red-700 { color: #b91c1c; }
        .border-red-200 { border-color: #fecaca; }
        .bg-emerald-100 { background-color: #d1fae5; }
        .hover\\:bg-emerald-200:hover { background-color: #a7f3d0; }
        .text-emerald-700 { color: #047857; }
        .border-emerald-200 { border-color: #a7f3d0; }
        .bg-red-100 { background-color: #fee2e2; }
        .hover\\:bg-red-200:hover { background-color: #fecaca; }
        .hover\\:underline:hover { text-decoration: underline; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .max-w-\\[200px\\] { max-width: 200px; }
      ` } />
    </div>
    );
};

export default ApprovalManagement;
