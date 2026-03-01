import React from 'react';
import { ThumbsUp, CheckCircle, Clock, Users, AlertTriangle, UserX, UserMinus } from 'lucide-react';
import './Dashboard.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const statCards = [
    { title: 'ISTIMEWA', value: '0', color: 'bg-green-dark', icon: <ThumbsUp opacity={0.2} size={80} /> },
    { title: 'BAIK', value: '0', color: 'bg-green-light', icon: <ThumbsUp opacity={0.2} size={80} /> },
    { title: 'CUKUP BAIK', value: '0', color: 'bg-green-lighter', icon: <CheckCircle opacity={0.2} size={80} /> },
    { title: 'TERLAMBAT', value: '0', color: 'bg-yellow', icon: <Clock opacity={0.2} size={80} /> },
    { title: 'PEMBINAAN', value: '0', color: 'bg-orange', icon: <Users opacity={0.2} size={80} /> },
    { title: 'TEGURAN', value: '0', color: 'bg-red', icon: <AlertTriangle opacity={0.2} size={80} /> },
    { title: 'IZIN/SAKIT/TL', value: '0', color: 'bg-purple', icon: <UserMinus opacity={0.2} size={80} /> },
    { title: 'BELUM ABSEN', value: '1', color: 'bg-gray', icon: <UserX opacity={0.2} size={80} /> },
];

const dataChart = [
    { name: 'Hadir', value: 0 },
    { name: 'Kosong', value: 100 }
];
const COLORS = ['#22C55E', '#E2E8F0'];

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Top Stat Grid */}
            <div className="stat-grid">
                {statCards.map((stat, index) => (
                    <div key={index} className={`stat-card ${stat.color}`}>
                        <div className="stat-content">
                            <h3 className="stat-title">{stat.title}</h3>
                            <p className="stat-value">{stat.value}</p>
                        </div>
                        <div className="stat-icon-bg">
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-bottom">
                {/* Realtime Table */}
                <div className="card table-card flex-1">
                    <div className="card-header pb-4 border-b">
                        <h3 className="flex items-center gap-2 text-lg font-semibold border-b pb-2">
                            <span className="text-yellow">⚡</span> Aktivitas Presensi Pegawai (Realtime)
                        </h3>
                    </div>
                    <div className="table-controls pt-4 pb-2 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            Show
                            <select className="border rounded p-1">
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                            </select>
                            entries
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            Cari: <input type="text" className="border rounded p-1 px-2" />
                        </div>
                    </div>
                    <div className="table-container mt-2 shadow-none border">
                        <table>
                            <thead>
                                <tr>
                                    <th>NAMA PEGAWAI</th>
                                    <th>MASUK</th>
                                    <th>SIANG</th>
                                    <th>PULANG</th>
                                    <th>STATUS MASUK</th>
                                    <th>STATUS PULANG</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="6" className="text-center py-8 text-gray-500">No data available in table</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-pagination mt-4 flex justify-between items-center text-sm text-gray-500">
                        <div>Showing 0 to 0 of 0 entries</div>
                        <div className="flex gap-1">
                            <button className="px-3 py-1 border rounded bg-gray-50 text-gray-400 cursor-not-allowed">{'<'}</button>
                            <button className="px-3 py-1 border rounded bg-gray-50 text-gray-400 cursor-not-allowed">{'>'}</button>
                        </div>
                    </div>
                </div>

                {/* Chart */}
                <div className="card chart-card flex-none w-[350px]">
                    <h3 className="text-center font-semibold text-gray-700 text-sm tracking-widest mb-6">
                        KUALITAS KEDISIPLINAN
                    </h3>
                    <div className="h-[250px] relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={dataChart}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={90}
                                    fill="#8884d8"
                                    paddingAngle={0}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {dataChart.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-3xl font-bold">0</span>
                            <span className="text-xs font-semibold text-gray-500 tracking-wider">ORANG HADIR</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
