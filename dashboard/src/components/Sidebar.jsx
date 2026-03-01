import React from 'react';
import {
  LayoutDashboard,
  Database,
  Settings,
  Users,
  Briefcase,
  CheckSquare,
  FileText,
  KeyRound,
  LogOut,
  ChevronDown,
  Building2,
  UserCog,
  Calendar,
  Clock,
  MessageSquare,
  BarChart,
  CalendarCheck,
  MapPin
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-placeholder"></div>
          <div>
            <h2 className="logo-title">PRESENSI AI</h2>
            <span className="logo-subtitle">ADMIN KABUPATEN</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>

          <div className="nav-group">
            <div className="nav-item">
              <Database size={20} />
              <span>Master Data</span>
              <ChevronDown size={16} className="ml-auto" />
            </div>
            <div className="nav-submenu">
              <NavLink to="/master/opd" className="submenu-item">
                <Building2 size={18} /> Data OPD
              </NavLink>
              <NavLink to="/master/locations" className="submenu-item">
                <MapPin size={18} /> Lokasi Kantor
              </NavLink>
              <NavLink to="/master/users" className="submenu-item">
                <UserCog size={18} /> Kelola User
              </NavLink>
              <NavLink to="/master/employees" className="submenu-item">
                <Users size={18} /> Data Pegawai
              </NavLink>
            </div>
          </div>

          <div className="nav-group">
            <div className="nav-item">
              <Settings size={20} />
              <span>Konfigurasi</span>
              <ChevronDown size={16} className="ml-auto" />
            </div>
            <div className="nav-submenu">
              <NavLink to="/config/schedules" className="submenu-item">
                <Clock size={18} /> Jam Kerja
              </NavLink>
              <NavLink to="/config/holidays" className="submenu-item">
                <Calendar size={18} /> Hari Libur
              </NavLink>
              <NavLink to="/config/messages" className="submenu-item">
                <MessageSquare size={18} /> Pesan Sapaan
              </NavLink>
              <NavLink to="/config/plotting" className="submenu-item">
                <Users size={18} /> Plotting
              </NavLink>
              <NavLink to="/config/leave" className="submenu-item">
                <Briefcase size={18} /> Cuti Pegawai
              </NavLink>
            </div>
          </div>

          <NavLink to="/apel" className="nav-item">
            <Users size={20} />
            <span>Manajemen Apel</span>
          </NavLink>

          <NavLink to="/approval" className="nav-item">
            <CheckSquare size={20} />
            <span>Approval</span>
          </NavLink>

          <div className="nav-group">
            <div className="nav-item">
              <FileText size={20} />
              <span>Rekapitulasi</span>
              <ChevronDown size={16} className="ml-auto" />
            </div>
            <div className="nav-submenu">
              <NavLink to="/recap/manual" className="submenu-item">
                <UserCog size={18} /> Absen Manual
              </NavLink>
              <NavLink to="/recap/daily" className="submenu-item">
                <CalendarCheck size={18} /> Rekap Harian
              </NavLink>
              <NavLink to="/recap/attendance" className="submenu-item">
                <FileText size={18} /> Rekap Kehadiran
              </NavLink>
              <NavLink to="/recap/late" className="submenu-item">
                <Clock size={18} /> Rekap Telat
              </NavLink>
              <NavLink to="/recap/tpp" className="submenu-item">
                <BarChart size={18} /> Rekap TPP
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <div className="sidebar-footer">
        <button className="btn-password">
          <KeyRound size={18} />
          <span>Ganti Password</span>
        </button>
        <button className="btn-logout">
          <LogOut size={18} color="#EF4444" />
          <span className="text-red">Keluar</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
