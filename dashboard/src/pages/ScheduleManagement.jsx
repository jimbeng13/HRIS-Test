import React from 'react';
import { Plus, Settings, Edit } from 'lucide-react';

const mockSchedules = [
    { id: 1, type: 'Non-Shift', title: 'Reguler 5 Hari', description: 'Pengaturan jam kerja per hari (Senin-Minggu)' },
    { id: 2, type: 'Non-Shift', title: 'Reguler 6 Hari', description: 'Pengaturan jam kerja per hari (Senin-Minggu)' },
    { id: 3, type: 'Shift', title: 'SHIFT PAGI RSUD', description: 'Pengaturan jam kerja per hari (Senin-Minggu)' },
    { id: 4, type: 'Shift', title: 'Ramadhan', description: 'Pengaturan jam kerja per hari (Senin-Minggu)' },
    { id: 5, type: 'Shift', title: 'SHIFT MALAM RSUD', description: 'Pengaturan jam kerja per hari (Senin-Minggu)' },
    { id: 6, type: 'Shift', title: 'SHIFT SIANG RSUD', description: 'Pengaturan jam kerja per hari (Senin-Minggu)' },
    { id: 7, type: 'Shift', title: 'Shift pagi-siang 12 Jam', description: 'Pengaturan jam kerja per hari (Senin-Minggu)' },
    { id: 8, type: 'Shift', title: 'Shift sore-malam 12 Jam', description: 'Pengaturan jam kerja per hari (Senin-Minggu)' },
    { id: 9, type: 'Shift', title: 'SENIN-SABTU 08.00-14.00', description: 'Pengaturan jam kerja per hari (Senin-Minggu)' },
    { id: 10, type: 'Shift', title: 'SENIN-SABTU 08.00-14.00 (KAMIS SORE 15.30-20.00)', description: 'Pengaturan jam kerja per hari (Senin-Minggu)' },
    { id: 11, type: 'Shift', title: 'Senin, Rabu, Sabtu ( 08.00-14.00) & Selasa, Kamis, Jumat ( Jam 14.00-17.00)', description: 'Pengaturan jam kerja per hari (Senin-Minggu)' },
    { id: 12, type: 'Shift', title: '6 HARI KERJA UMUM', description: 'Pengaturan jam kerja per hari (Senin-Minggu)' }
];

const ScheduleManagement = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Top Header & Action */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-gray-800 hidden">Manajemen Grup Jadwal</h2>
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors ml-auto shadow-sm">
                    <Plus size={18} />
                    Tambah Grup
                </button>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockSchedules.map((schedule) => (
                    <div key={schedule.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col hover:shadow-md transition-shadow">
                        {/* Badge */}
                        <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-500 rounded text-xs font-semibold">
                                {schedule.type}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex-grow mb-4">
                            <h3 className="text-base font-bold text-gray-800 mb-1 line-clamp-2" title={schedule.title}>{schedule.title}</h3>
                            <p className="text-xs text-gray-500">{schedule.description}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2.5 rounded-lg border border-gray-200 text-sm font-medium transition-colors">
                                <Settings size={16} />
                                Atur Jam
                            </button>
                            <button className="flex-none flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-white w-10 h-10 rounded-lg transition-colors shadow-sm">
                                <Edit size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .hidden { display: none; }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) { .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 1024px) { .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .gap-6 { gap: 1.5rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-4 { margin-bottom: 1rem; }
        .p-5 { padding: 1.25rem; }
        .bg-white { background-color: #ffffff; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-full { border-radius: 9999px; }
        .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
        .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .hover\\:shadow-md:hover { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .flex-grow { flex-grow: 1; }
        .flex-1 { flex: 1 1 0%; }
        .flex-none { flex: none; }
        .inline-block { display: inline-block; }
        .py-2\\.5 { padding-top: 0.625rem; padding-bottom: 0.625rem; }
        .w-10 { width: 2.5rem; }
        .h-10 { height: 2.5rem; }
        .bg-blue-50 { background-color: #eff6ff; }
        .text-blue-500 { color: #3b82f6; }
        .bg-gray-50 { background-color: #f9fafb; }
        .hover\\:bg-gray-100:hover { background-color: #f3f4f6; }
        .text-gray-700 { color: #374151; }
        .border-gray-200 { border-color: #e5e7eb; }
        .bg-yellow-400 { background-color: #facc15; }
        .hover\\:bg-yellow-500:hover { background-color: #eab308; }
        .text-white { color: #ffffff; }
      `}} />
        </div>
    );
};

export default ScheduleManagement;
