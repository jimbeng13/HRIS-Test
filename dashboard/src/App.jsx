import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';

import Dashboard from './pages/Dashboard';
import OpdManagement from './pages/OpdManagement';
import ScheduleManagement from './pages/ScheduleManagement';
import HolidayManagement from './pages/HolidayManagement';
import MessageManagement from './pages/MessageManagement';
import PlottingManagement from './pages/PlottingManagement';
import DailyRecap from './pages/DailyRecap';
import Login from './pages/Login';
import ApprovalManagement from './pages/ApprovalManagement';
import UserManagement from './pages/UserManagement';
import LocationManagement from './pages/LocationManagement';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />

                {/* Main Admin Routes nested within AdminLayout */}
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="master/opd" element={<OpdManagement />} />
                    <Route path="master/approvals" element={<ApprovalManagement />} />
                    <Route path="master/users" element={<UserManagement />} />
                    <Route path="master/locations" element={<LocationManagement />} />

                    <Route path="config/schedules" element={<ScheduleManagement />} />
                    <Route path="config/holidays" element={<HolidayManagement />} />
                    <Route path="config/messages" element={<MessageManagement />} />
                    <Route path="config/plotting" element={<PlottingManagement />} />

                    <Route path="recap/daily" element={<DailyRecap />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
