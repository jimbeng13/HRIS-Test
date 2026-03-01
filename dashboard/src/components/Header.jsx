import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import './Header.css';

const Header = ({ title = "Dashboard Analitik", subtitle = "Kabupaten Polewali Mandar" }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).replace(/\./g, ':');
    };

    return (
        <header className="header">
            <div className="header-left">
                <h1 className="header-title">{title}</h1>
                <div className="header-subtitle">
                    <span className="location-pin">📍</span>
                    {subtitle} • {formatDate(currentTime)}
                </div>
            </div>

            <div className="header-right">
                <div className="time-badge border-primary">
                    <Clock size={16} className="text-primary" />
                    <div className="time-info">
                        <span className="time-text">{formatTime(currentTime)}</span>
                        <span className="time-label">WITA ONLINE</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
