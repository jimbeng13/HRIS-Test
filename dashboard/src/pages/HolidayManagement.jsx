import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const mockHolidays = [
    { id: 1, date: '19 Mar 2026', description: 'Libur nasional Hari Suci Nyepi' },
    { id: 2, date: '18 Mar 2026', description: 'Cuti bersama Hari Suci Nyepi' },
    { id: 3, date: '17 Feb 2026', description: 'Tahun Baru Imlek 2577 Kongzili' },
    { id: 4, date: '16 Feb 2026', description: 'Cuti Bersama Tahun Baru Imlek 2577 Kongzili' },
];

const HolidayManagement = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Top Controls */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 hidden">Manajemen Hari Libur</h2>
                </div>

                <div className="flex gap-4 ml-auto">
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors shadow-sm">
                        <Plus size={18} />
                        Tambah Hari Libur
                    </button>
                </div>
            </div>

            {/* Main Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-4">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white text-gray-800 uppercase text-xs font-bold border-b-2">
                            <tr>
                                <th className="px-6 py-4 w-16 text-center">NO</th>
                                <th className="px-6 py-4 w-48">TANGGAL</th>
                                <th className="px-6 py-4">KETERANGAN</th>
                                <th className="px-6 py-4 text-center w-24">AKSI</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockHolidays.map((holiday, index) => (
                                <tr key={holiday.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-center text-gray-600">{index + 1}.</td>
                                    <td className="px-6 py-4 font-medium text-gray-800">{holiday.date}</td>
                                    <td className="px-6 py-4 text-gray-600">{holiday.description}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center">
                                            <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-md transition-colors" title="Hapus">
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

        </div>
    );
};

export default HolidayManagement;
