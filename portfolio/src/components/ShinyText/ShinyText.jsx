import React from 'react';

const ShinyText = ({ children, disabled = false, speed = 5, className = '' }) => {
  const animation = `${speed}s linear infinite shine`;

  return (
    <span className={`relative inline-block leading-relaxed ${className}`}>
      {/* Base gray text */}
      <span className="text-gray-300 block whitespace-pre-line">
        {children}
      </span>

      {/* Shiny overlay */}
      <span
        className={`absolute inset-0 text-transparent bg-clip-text pointer-events-none select-none whitespace-pre-line px-4 py-2 ${disabled ? '' : 'animate-shine'
          }`}
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(160,120,40,0.1) 30%, rgba(255,215,0,0.9) 50%, rgba(160,120,40,0.1) 70%)',

          backgroundSize: '200% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '200% center',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          animation,
        }}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
};

export default ShinyText;
