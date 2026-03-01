import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Menu } from 'lucide-react';
import './AdminLayout.css';

const AdminLayout = () => {
    const location = useLocation();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        setSidebarOpen(false); // Close sidebar on route change
    }, [location.pathname]);

    // Basic routing to title mapping for the header
    const getPageTitle = (pathname) => {
        switch (pathname) {
            case '/': return 'Dashboard Analitik';
            case '/master/opd': return 'Manajemen OPD';
            case '/master/locations': return 'Lokasi Kantor';
            case '/master/users': return 'Manajemen Pengguna';
            case '/config/schedules': return 'Manajemen Grup Jadwal';
            case '/config/holidays': return 'Manajemen Hari Libur';
            case '/config/messages': return 'Manajemen Pesan Sapaan';
            case '/config/plotting': return 'Plotting Shift Pegawai';
            case '/recap/daily': return 'Rekap Harian';
            default: return 'Presensi AI';
        }
    };

    return (
        <div className="admin-layout">
            <Sidebar isOpen={isSidebarOpen} />

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div className="mobile-overlay" onClick={() => setSidebarOpen(false)} />
            )}

            <div className="admin-main">
                <div className="mobile-header-toggle">
                    <button onClick={() => setSidebarOpen(true)} className="p-2 bg-white rounded-md shadow-sm border border-gray-100">
                        <Menu size={20} color="#1f2937" />
                    </button>
                </div>
                <Header
                    title={getPageTitle(location.pathname)}
                    subtitle="Kabupaten Polewali Mandar"
                />
                <main className="admin-content">
                    <div className="page-transition" key={location.pathname}>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
