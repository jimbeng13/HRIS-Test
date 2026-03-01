import React from 'react';
import { Plus, Trash2, Edit, FileText } from 'lucide-react';

const mockMessages = [
    { id: 1, type: 'Masuk', text: 'Selamat pagi, {nama}. Kehadiran Anda hari Rabu ini telah terverifikasi. Mari tuntaskan tugas dengan maksimal, karena Rabu adalah jembatan menuju akhir pekan', status: 'Aktif' },
    { id: 2, type: 'Masuk', text: 'Selamat bertugas, {nama}. Tetap profesional di hari Rabu ini. Ingat, semangat yang stabil adalah kunci agar puasa tidak terasa sebagai beban kerja', status: 'Aktif' },
    { id: 3, type: 'Masuk', text: 'Absen pagi sukses! Selamat pagi pejuang Polman. Mari kita buktikan bahwa dedikasi hari Rabu tetap tegak lurus, meski mata masih ingin \'reunian\' dengan bantal', status: 'Aktif' },
    { id: 4, type: 'Masuk', text: 'Selamat bekerja, {nama}. Rabu ini adalah pembuktian konsistensi. Mari fokus pada target, jangan fokus pada sisa jam menuju bedung yang masih panjang', status: 'Aktif' },
    { id: 5, type: 'Masuk', text: 'Terima kasih telah hadir tepat waktu. Selamat hari Rabu, {nama}. Semoga setiap urusan Anda hari ini dimudahkan dan bernilai pahala berlipat', status: 'Aktif' },
];

const MessageManagement = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Top Controls */}
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 hidden">Manajemen Pesan Sapaan</h2>
                    <p className="text-sm text-gray-500 hidden">Atur pesan dinamis atau pantun saat pegawai absen</p>
                </div>

                <div className="flex gap-2 ml-auto">
                    <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors shadow-sm">
                        <Trash2 size={16} />
                        Hapus Terpilih
                    </button>
                    <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors shadow-sm">
                        <FileText size={16} />
                        Input Massal
                    </button>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors shadow-sm">
                        <Plus size={18} />
                        Tambah 1 Pesan
                    </button>
                </div>
            </div>

            {/* Alert Tips */}
            <div className="bg-cyan-50 border border-cyan-100 rounded-lg p-3 flex items-center gap-2 text-cyan-800 text-sm">
                <span className="text-cyan-600">💡 Tips:</span> Gunakan teks <code className="text-red-500 bg-red-50 px-1 rounded">{'{nama}'}</code> di dalam pesan. Sistem akan otomatis menggantinya dengan nama pegawai yang sedang absen. Contoh: <span className="italic">"Semangat pagi, {'{nama}'}!"</span>
            </div>

            {/* Main Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-2">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-800 uppercase text-xs font-bold border-b">
                            <tr>
                                <th className="px-6 py-4 w-12 text-center"><input type="checkbox" className="rounded" /></th>
                                <th className="px-6 py-4 w-16 text-center">NO</th>
                                <th className="px-6 py-4 w-28 text-center">TIPE</th>
                                <th className="px-6 py-4">ISI PESAN / PANTUN</th>
                                <th className="px-6 py-4 w-32 text-center">STATUS</th>
                                <th className="px-6 py-4 text-center w-28">AKSI</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockMessages.map((msg, index) => (
                                <tr key={msg.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-6 py-4 text-center">
                                        <input type="checkbox" className="rounded border-gray-300" />
                                    </td>
                                    <td className="px-6 py-4 text-center text-gray-500">{index + 1}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            {msg.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700 pr-12 leading-relaxed">
                                        {msg.text}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">
                                            {msg.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="p-1 text-amber-500 hover:bg-amber-50 rounded transition-colors border border-amber-200" title="Edit">
                                                <Edit size={14} />
                                            </button>
                                            <button className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors border border-red-200" title="Hapus">
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .hidden { display: none; }
        .flex { display: flex; }
        .items-start { align-items: flex-start; }
        .bg-red-500 { background-color: #ef4444; }
        .hover\\:bg-red-600:hover { background-color: #dc2626; }
        .bg-emerald-600 { background-color: #059669; }
        .hover\\:bg-emerald-700:hover { background-color: #047857; }
        .text-cyan-800 { color: #155e75; }
        .text-cyan-600 { color: #0891b2; }
        .bg-cyan-50 { background-color: #ecfeff; }
        .border-cyan-100 { border-color: #cffafe; }
        .p-3 { padding: 0.75rem; }
        .italic { font-style: italic; }
        .bg-gray-800 { background-color: #1f2937; }
        .bg-emerald-100 { background-color: #d1fae5; }
        .text-emerald-700 { color: #047857; }
        .border-emerald-200 { border-color: #a7f3d0; }
        .pr-12 { padding-right: 3rem; }
        .leading-relaxed { line-height: 1.625; }
        .border-amber-200 { border-color: #fde68a; }
        .border-red-200 { border-color: #fecaca; }
        .mt-2 { margin-top: 0.5rem; }
      `}} />

        </div>
    );
};

export default MessageManagement;
