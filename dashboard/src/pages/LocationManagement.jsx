import React from 'react';
import { MapPin, Search, Plus, Save, Trash2, Edit } from 'lucide-react';

const mockLocations = [
    { id: 1, name: 'Kantor Dinas Kesehatan Utama', opd: 'DINAS KESEHATAN', latitude: '-6.175392', longitude: '106.827153', radius: 100 },
    { id: 2, name: 'Kantor BAPENDA', opd: 'BADAN PENDAPATAN DAERAH', latitude: '-6.195048', longitude: '106.823023', radius: 50 },
];

const LocationManagement = () => {
    return (
        <div className="flex flex-col gap-6 h-full">
            {/* Header */}
            <div className="flex justify-between items-center bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Manajemen Lokasi Kantor</h2>
                    <p className="text-sm text-gray-500">Kelola titik koordinat (Latitude/Longitude) dan radius presensi OPD.</p>
                </div>
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm shadow-sm">
                    <Plus size={18} /> Tambah Lokasi
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
                {/* List of Locations */}
                <div className="lg:col-span-1 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col h-[600px]">
                    <div className="p-4 border-b border-gray-100">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Cari Lokasi..."
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2">
                        {mockLocations.map((loc) => (
                            <div key={loc.id} className="p-4 rounded-lg border border-gray-100 mb-2 hover:bg-blue-50/50 cursor-pointer transition-colors group">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-bold text-sm text-gray-800">{loc.name}</h3>
                                        <p className="text-xs text-blue-600 font-medium mt-1">{loc.opd}</p>
                                        <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                                            <MapPin size={12} className="text-red-500" />
                                            <span>{loc.latitude}, {loc.longitude}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Radius: {loc.radius}m</p>
                                    </div>
                                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1 text-blue-600 hover:bg-blue-100 rounded-md" title="Edit"><Edit size={14} /></button>
                                        <button className="p-1 text-red-600 hover:bg-red-100 rounded-md" title="Hapus"><Trash2 size={14} /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form and Fake Map */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col gap-6 h-[600px]">
                    <h3 className="font-bold text-gray-800 text-lg border-b pb-3">Peta Lokasi & Koordinat</h3>

                    {/* Fake Map integration area */}
                    <div className="w-full flex-1 bg-emerald-50 rounded-lg border border-emerald-100 flex flex-col items-center justify-center overflow-hidden relative">
                        {/* Visual representation of a map area */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        <MapPin size={48} className="text-red-500 relative z-10 drop-shadow-md mb-2" />
                        <div className="bg-white px-4 py-2 rounded-full shadow-sm text-xs font-bold text-gray-700 relative z-10 border border-gray-200">
                            Drag marker untuk menyesuaikan lokasi
                        </div>
                        {/* Simulated radius circle */}
                        <div className="absolute w-64 h-64 border-2 border-emerald-400 bg-emerald-400/20 rounded-full flex items-center justify-center">
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Latitude</label>
                            <input type="text" className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" defaultValue="-6.175392" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Longitude</label>
                            <input type="text" className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" defaultValue="106.827153" />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-xs font-bold text-gray-700 mb-1">Radius Presensi (Meter)</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" defaultValue="100" />
                        </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-gray-100">
                        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md font-bold transition-colors text-sm shadow-sm">
                            <Save size={18} /> Simpan Pengaturan Lokasi
                        </button>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        @media (min-width: 1024px) {
           .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
           .lg\\:col-span-1 { grid-column: span 1 / span 1; }
           .lg\\:col-span-2 { grid-column: span 2 / span 2; }
        }
        .col-span-2 { grid-column: span 2 / span 2; }
        .flex-1 { flex: 1 1 0%; }
        .h-\\[600px\\] { height: 600px; }
        .h-full { height: 100%; }
        .border-b { border-bottom-width: 1px; }
        .border-t { border-top-width: 1px; }
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .pb-3 { padding-bottom: 0.75rem; }
        .pt-4 { padding-top: 1rem; }
        .mb-1 { margin-bottom: 0.25rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .w-full { width: 100%; }
        .w-64 { width: 16rem; }
        .h-64 { height: 16rem; }
        .overflow-y-auto { overflow-y: auto; }
        .justify-center { justify-content: center; }
        .justify-end { justify-content: flex-end; }
        .items-start { align-items: flex-start; }
        .bg-emerald-50 { background-color: #ecfdf5; }
        .border-emerald-100 { border-color: #d1fae5; }
        .border-emerald-400 { border-color: #34d399; }
        .bg-emerald-400\\/20 { background-color: rgba(52, 211, 153, 0.2); }
        .bg-emerald-600 { background-color: #059669; }
        .hover\\:bg-emerald-700:hover { background-color: #047857; }
        .border-2 { border-width: 2px; }
        .text-red-500 { color: #ef4444; }
        .drop-shadow-md { filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06)); }
        .z-10 { z-index: 10; }
        .opacity-20 { opacity: 0.2; }
        .opacity-0 { opacity: 0; }
        .group-hover\\:opacity-100:hover .group:hover { opacity: 1; }
        .transition-opacity { transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .cursor-pointer { cursor: pointer; }
        .block { display: block; }
        .text-gray-700 { color: #374151; }
      `}} />
        </div>
    );
};

export default LocationManagement;
