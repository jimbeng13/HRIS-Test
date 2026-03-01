import React from 'react';
import { User, KeyRound, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-login-navy flex items-center justify-center p-4 font-sans relative overflow-hidden">

            {/* Background Decorators based on Design Prompt */}
            <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-blue-500 via-emerald-400 to-yellow-400"></div>

            {/* Login Card */}
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[420px] p-10 flex flex-col items-center relative z-10 transition-transform duration-300 hover:scale-[1.01]">

                {/* Logo Area */}
                <div className="w-24 h-28 bg-white border-2 border-yellow-400 rounded-t-lg rounded-b-[40px] flex items-center justify-center mb-6 shadow-sm overflow-hidden p-1 relative">
                    <div className="text-center w-full relative z-10">
                        <div className="text-[10px] font-bold text-red-600 mb-1">POLEWALI MANDAR</div>
                        <div className="flex justify-center mb-1">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-[8px] border-2 border-yellow-400">
                                ★
                            </div>
                        </div>
                        <div className="w-full h-[2px] bg-red-600 absolute bottom-1 left-0"></div>
                    </div>
                </div>

                {/* Header */}
                <div className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border border-blue-100">
                    Administrator Portal
                </div>
                <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Presensi AI</h1>
                <p className="text-sm text-gray-500 text-center mb-8">Kelola data kehadiran dengan kendali penuh</p>

                {/* Form */}
                <form className="w-full flex flex-col gap-5" onSubmit={handleLogin}>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Admin Identity</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <User size={18} className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Input username"
                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3.5 outline-none transition-colors"
                                required
                            />
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-300 italic font-serif text-lg">
                                S
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Secret Credential</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <KeyRound size={18} className="text-gray-400" />
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3.5 outline-none transition-colors tracking-[0.2em]"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full text-white bg-login-button hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-xl text-sm px-5 py-3.5 text-center flex items-center justify-center gap-2 transition-colors shadow-md"
                    >
                        Otentikasi Sistem <ArrowRight size={18} />
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center flex flex-col items-center gap-0.5">
                    <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Demo</span>
                    <span className="text-xs text-gray-400">Secure Admin Panel Infrastructure © 2026</span>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .bg-login-navy { background-color: #0F172A; } /* Matching the dark blue background */
        .bg-login-button { background-color: #111827; }
        .min-h-screen { min-height: 100vh; }
        .p-4 { padding: 1rem; }
        .p-10 { padding: 2.5rem; }
        .font-sans { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif; }
        .rounded-3xl { border-radius: 1.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
        .max-w-\\[420px\\] { max-width: 420px; }
        .w-24 { width: 6rem; }
        .h-28 { height: 7rem; }
        .border-yellow-400 { border-color: #facc15; }
        .rounded-b-\\[40px\\] { border-bottom-right-radius: 40px; border-bottom-left-radius: 40px; }
        .rounded-t-lg { border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .py-1\\.5 { padding-top: 0.375rem; padding-bottom: 0.375rem; }
        .mb-4 { margin-bottom: 1rem; }
        .tracking-wider { letter-spacing: 0.05em; }
        .tracking-\\[0\\.2em\\] { letter-spacing: 0.2em; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .font-extrabold { font-weight: 800; }
        .text-gray-900 { color: #111827; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .gap-5 { gap: 1.25rem; }
        .gap-1\\.5 { gap: 0.375rem; }
        .ml-1 { margin-left: 0.25rem; }
        .inset-y-0 { top: 0; bottom: 0; }
        .pl-3\\.5 { padding-left: 0.875rem; }
        .pr-3\\.5 { padding-right: 0.875rem; }
        .pl-10 { padding-left: 2.5rem; }
        .p-3\\.5 { padding: 0.875rem; }
        .text-gray-300 { color: #d1d5db; }
        .font-serif { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }
        .py-3\\.5 { padding-top: 0.875rem; padding-bottom: 0.875rem; }
        .mt-8 { margin-top: 2rem; }
        .pointer-events-none { pointer-events: none; }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-blue-500 { --tw-gradient-from: #3b82f6; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(59, 130, 246, 0)); }
        .via-emerald-400 { --tw-gradient-stops: var(--tw-gradient-from), #34d399, var(--tw-gradient-to, rgba(52, 211, 153, 0)); }
        .to-yellow-400 { --tw-gradient-to: #facc15; }
        .h-2 { height: 0.5rem; }
        .z-10 { z-index: 10; }
        .transition-transform { transition-property: transform; }
        .duration-300 { transition-duration: 300ms; }
        .hover\\:scale-\\[1\\.01\\]:hover { transform: scale(1.01); }
      `}} />
        </div>
    );
};

export default Login;
