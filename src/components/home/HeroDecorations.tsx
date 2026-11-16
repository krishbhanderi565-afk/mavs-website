import React from 'react';

export const HeroDecorations: React.FC = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* Top-Right Decorative Sunburst Mandala */}
      <div className="absolute -top-16 -right-16 w-80 h-80 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] opacity-25 text-[#FF9B36]">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full fill-none stroke-current"
          strokeWidth="1.2"
        >
          {/* Concentric subtle circles */}
          <circle cx="100" cy="100" r="28" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="100" cy="100" r="54" opacity="0.4" />
          <circle cx="100" cy="100" r="82" strokeDasharray="2 4" opacity="0.5" />

          {/* Sunburst rays */}
          {[...Array(24)].map((_, i) => (
            <line
              key={`ray-${i}`}
              x1="100"
              y1="40"
              x2="100"
              y2="18"
              transform={`rotate(${i * 15} 100 100)`}
              opacity={i % 2 === 0 ? '0.7' : '0.35'}
            />
          ))}

          {/* Floral Petals */}
          {[...Array(8)].map((_, i) => (
            <path
              key={`petal-${i}`}
              d="M100 70 C108 55, 118 62, 100 42 C82 62, 92 55, 100 70 Z"
              fill="currentColor"
              fillOpacity="0.12"
              transform={`rotate(${i * 45} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* Top-Left Decorative Subtle Floral Ornament */}
      <div className="absolute -top-12 -left-12 w-64 h-64 sm:w-80 sm:h-80 opacity-20 text-[#EC5478]">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full fill-none stroke-current"
          strokeWidth="1"
        >
          <circle cx="100" cy="100" r="38" opacity="0.5" />
          {[...Array(16)].map((_, i) => (
            <line
              key={`tl-ray-${i}`}
              x1="100"
              y1="50"
              x2="100"
              y2="30"
              transform={`rotate(${i * 22.5} 100 100)`}
              opacity="0.6"
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <circle
              key={`tl-circle-${i}`}
              cx="100"
              cy="60"
              r="12"
              transform={`rotate(${i * 60} 100 100)`}
              fill="currentColor"
              fillOpacity="0.08"
            />
          ))}
        </svg>
      </div>

      {/* Bottom-Left Sunburst and Floral Motif */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px] opacity-25 text-[#EC5478]">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full fill-none stroke-current"
          strokeWidth="1.2"
        >
          <circle cx="100" cy="100" r="32" opacity="0.6" strokeDasharray="4 2" />
          <circle cx="100" cy="100" r="62" opacity="0.3" />
          {[...Array(24)].map((_, i) => (
            <line
              key={`bl-ray-${i}`}
              x1="100"
              y1="32"
              x2="100"
              y2="12"
              transform={`rotate(${i * 15} 100 100)`}
              opacity={i % 2 === 0 ? '0.7' : '0.3'}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <path
              key={`bl-petal-${i}`}
              d="M100 68 C110 52, 120 58, 100 38 C80 58, 90 52, 100 68 Z"
              fill="currentColor"
              fillOpacity="0.14"
              transform={`rotate(${i * 45} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* Bottom-Right Soft Floral Cluster */}
      <div className="absolute -bottom-16 -right-16 w-72 h-72 sm:w-88 sm:h-88 opacity-20 text-[#FF9B36]">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full fill-none stroke-current"
          strokeWidth="1"
        >
          <circle cx="100" cy="100" r="45" opacity="0.5" />
          {[...Array(12)].map((_, i) => (
            <path
              key={`br-petal-${i}`}
              d="M100 55 C107 42, 115 46, 100 28 C85 46, 93 42, 100 55 Z"
              fill="currentColor"
              fillOpacity="0.1"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* Subtle radial warmth in center-background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#FF9B36]/5 via-[#EC5478]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
