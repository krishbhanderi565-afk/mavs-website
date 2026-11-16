import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Download } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="py-20 md:py-32 bg-[#FAEEDE] min-h-[calc(100vh-80px)] flex items-center justify-center text-center">
      <div className="max-w-md mx-auto px-4">
        <span className="font-mono text-6xl sm:text-7xl font-black text-[#EC5478] block mb-2">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2C1030] tracking-tight mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[#806C80] mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. Explore our main sections below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2C1030] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full hover:bg-[#431B48] transition-colors"
          >
            <Home className="w-4 h-4 text-[#FF9B36]" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F9DDE2] text-[#2C1030] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#f1c3cc] transition-colors"
          >
            <Download className="w-4 h-4 text-[#EC5478]" />
            <span>Downloads</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
