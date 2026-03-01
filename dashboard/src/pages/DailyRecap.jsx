import React from 'react';
import { Search, Printer } from 'lucide-react';

const DailyRecap = () => {
    return (
        <div className="flex flex-col gap-6">

            {/* Search Filters Bar */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-end gap-4 overflow-hidden">
                <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                    <label className="text-xs font-semibold text-gray-600 ml-1">Pilih Unit Kerja / Kategori</label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white">
                        <option>SEKRETARIAT DAERAH</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1.5 w-64">
                    <label className="text-xs font-semibold text-gray-600 ml-1">Tanggal Rekap</label>
                    <input type="date" defaultValue="2026-02-25" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium text-sm transition-colors flex items-center justify-center gap-2 h-[38px]">
                    <Search size={16} /> Tampilkan
                </button>

                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium text-sm transition-colors flex items-center justify-center gap-2 h-[38px] ml-auto">
                    <Printer size={16} /> Cetak PDF
                </button>
            </div>

            {/* Main Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-2">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                        <thead className="bg-gray-50 text-gray-800 uppercase text-xs font-bold border-b">
                            <tr>
                                <th rowSpan="2" className="px-4 py-3 w-12 text-center border-r border-gray-200">NO</th>
                                <th rowSpan="2" className="px-6 py-3 border-r border-gray-200">NAMA PEGAWAI / NIP</th>
                                <th colSpan="3" className="px-4 py-2 text-center bg-blue-600 text-white border-b border-r border-gray-200">WAKTU PRESENSI (HARIAN)</th>
                                <th rowSpan="2" className="px-6 py-3 text-center bg-gray-500 text-white border-b">STATUS PENILAIAN</th>
                            </tr>
                            <tr>
                                <th className="px-3 py-2 text-center text-gray-700 bg-gray-100 border-r border-gray-200 font-semibold text-xs border-b">Masuk</th>
                                <th className="px-3 py-2 text-center text-gray-700 bg-gray-100 border-r border-gray-200 font-semibold text-xs border-b">Siang</th>
                                <th className="px-3 py-2 text-center text-gray-700 bg-gray-100 border-r border-gray-200 font-semibold text-xs border-b">Pulang</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-4 text-center text-gray-500 border-r border-gray-100">1</td>
                                <td className="px-6 py-4 border-r border-gray-100">
                                    <div className="font-bold text-gray-800">Fathurrahman</div>
                                    <div className="text-xs text-gray-500 mt-1">NIP. 1234567890</div>
                                    <div className="text-xs font-bold text-blue-600 mt-0.5">SEKRETARIAT DAERAH</div>
                                    <div className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-[10px] font-bold mt-1 border border-yellow-200">
                                        🤝 Reguler 5 Hari
                                    </div>
                                </td>
                                <td className="px-3 py-4 text-center text-gray-400 border-r border-gray-100">--:--</td>
                                <td className="px-3 py-4 text-center text-gray-400 border-r border-gray-100">--:--</td>
                                <td className="px-3 py-4 text-center text-gray-400 border-r border-gray-100">--:--</td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full text-center tracking-wide">
                                            M: Tanpa Keterangan
                                        </div>
                                        <div className="bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full text-center tracking-wide">
                                            P: Belum Absen
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .flex-1 { flex: 1 1 0%; }
        .min-w-\\[200px\\] { min-width: 200px; }
        .w-64 { width: 16rem; }
        .h-\\[38px\\] { height: 38px; }
        .border-r { border-right-width: 1px; }
        .border-gray-200 { border-color: #e5e7eb; }
        .bg-gray-500 { background-color: #6b7280; }
        .text-\\[10px\\] { font-size: 10px; }
        .bg-yellow-100 { background-color: #fef9c3; }
        .text-yellow-800 { color: #854d0e; }
        .tracking-wide { letter-spacing: 0.025em; }
        .border-collapse { border-collapse: collapse; }
      `}} />

        </div>
    );
};

export default DailyRecap;
