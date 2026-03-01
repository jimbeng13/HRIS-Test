import React, { useState } from 'react';
import { Layers, X, Trash2, Plus, GripVertical } from 'lucide-react';

const PlottingManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(true); // Open by default to match screenshot state

    return (
        <div className="flex flex-col gap-6 relative">
            {/* Top Controls */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 hidden">Plotting Shift Pegawai</h2>
                </div>

                <div className="flex gap-2 ml-auto">
                    <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors shadow-sm">
                        <Trash2 size={16} />
                        Hapus Massal
                    </button>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors shadow-sm">
                        <Plus size={16} />
                        Manual
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors shadow-sm"
                    >
                        <Layers size={16} />
                        Plot Massal
                    </button>
                </div>
            </div>

            {/* Background Table (Behind Modal) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-2 p-6">
                <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        Tampilkan
                        <select className="border rounded-md p-1 outline-none text-gray-700 focus:border-emerald-500">
                            <option>10</option>
                        </select>
                        data
                    </div>
                    <div className="flex items-center gap-2">
                        Pencarian:
                        <input type="text" className="border rounded-md px-2 py-1 outline-none focus:border-emerald-500" />
                    </div>
                </div>

                <table className="w-full text-left text-sm mb-4">
                    <thead className="bg-gray-50 text-gray-800 uppercase text-xs font-bold border-y border-gray-200">
                        <tr>
                            <th className="px-4 py-3">TANGGAL</th>
                            <th className="px-4 py-3">NAMA SHIFT</th>
                            <th className="px-4 py-3">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="3" className="px-4 py-8 text-center text-gray-500">Menampilkan 0 sampai 0 dari 0 data</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal Backdrop and Content */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-gray-600/50 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    ></div>

                    {/* Modal Modal */}
                    <div className="relative bg-white rounded-xl shadow-xl w-[550px] overflow-hidden flex flex-col max-h-[90vh]">
                        <div className="bg-emerald-600 text-white px-6 py-4 flex justify-between items-center">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <Layers size={20} /> Plotting Massal
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto flex flex-col gap-6">

                            {/* Target Jadwal */}
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-gray-800 text-sm">Target Jadwal</label>
                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                        <input type="radio" name="target" className="text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer" defaultChecked />
                                        <span className="font-medium text-emerald-700">Semua ASN (Global)</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                        <input type="radio" name="target" className="text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer" />
                                        <span>Per OPD</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                        <input type="radio" name="target" className="text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer" />
                                        <span>Pilih Pegawai</span>
                                    </label>
                                </div>
                                <div className="bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-600 flex items-start gap-2 mt-1">
                                    <span className="text-gray-400 mt-0.5">ℹ️</span>
                                    Jadwal akan diterapkan ke <strong>seluruh pegawai</strong> sesuai filter di atas.
                                </div>
                            </div>

                            {/* Pilih Shift */}
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-gray-800 text-sm">Pilih Shift / Jam Kerja</label>
                                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white">
                                    <option>SHIFT PAGI RSUD</option>
                                    <option>Reguler 5 Hari</option>
                                    <option>SHIFT MALAM RSUD</option>
                                </select>
                            </div>

                            {/* Metode Pilih Tanggal */}
                            <div className="flex flex-col gap-2 mb-2">
                                <label className="font-semibold text-gray-800 text-sm">Metode Pilih Tanggal</label>
                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                        <input type="radio" name="method" className="text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer" defaultChecked />
                                        <span className="font-medium text-emerald-700">Rentang Tanggal (Awal-Akhir)</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                        <input type="radio" name="method" className="text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer" />
                                        <span>Pilih Beberapa Tanggal</span>
                                    </label>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-600">Dari Tanggal</label>
                                        <input type="date" className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-emerald-500 w-full" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-600">Sampai Tanggal</label>
                                        <input type="date" className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-emerald-500 w-full" />
                                    </div>
                                </div>

                                <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-sm text-amber-800 flex items-start gap-2 mt-2 font-medium">
                                    <span className="text-amber-500">⚠️</span>
                                    Data jadwal lama di tanggal tersebut akan ditimpa.
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-2">
                                Terapkan Jadwal Massal
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Embedded Tailig CSS utilities for Modal UI since Tailwind is not installed directly in CRA way without specific config */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .fixed { position: fixed; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .z-50 { z-index: 50; }
        .bg-gray-600\\/50 { background-color: rgba(75, 85, 99, 0.5); }
        .backdrop-blur-sm { backdrop-filter: blur(4px); }
        .w-\\[550px\\] { width: 550px; }
        .max-h-\\[90vh\\] { max-height: 90vh; }
        .text-white\\/80 { color: rgba(255, 255, 255, 0.8); }
        .hover\\:text-white:hover { color: #ffffff; }
        .cursor-pointer { cursor: pointer; }
        .bg-amber-50 { background-color: #fffbeb; }
        .border-amber-200 { border-color: #fde68a; }
        .text-amber-800 { color: #92400e; }
        .text-amber-500 { color: #f59e0b; }
        .text-emerald-700 { color: #047857; }
      `}} />

        </div>
    );
};

export default PlottingManagement;
