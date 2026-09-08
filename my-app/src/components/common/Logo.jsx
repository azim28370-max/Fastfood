import React from 'react';

export const Logo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
      <svg
        width="44"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Drink Cup with Straw */}
        <path
          d="M20 18L24 40H38L42 18H20Z"
          stroke="#121519"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M18 18H44"
          stroke="#121519"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M34 18L40 6"
          stroke="#121519"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Fries Box behind/side */}
        <path
          d="M44 26L48 42H58L54 26H44Z"
          stroke="#121519"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M47 16V26" stroke="#121519" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M51 13V26" stroke="#121519" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M55 18V26" stroke="#121519" strokeWidth="2.5" strokeLinecap="round" />

        {/* Burger bottom base */}
        <path
          d="M8 44C8 38 16 34 32 34C48 34 56 38 56 44"
          stroke="#121519"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Burger bun top */}
        <path
          d="M12 48H52C54 48 55 51 54 53C51 57 42 60 32 60C22 60 13 57 10 53C9 51 10 48 12 48Z"
          fill="#121519"
        />
        {/* Patty line */}
        <path
          d="M10 45H54"
          stroke="#121519"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: '900',
          fontSize: '11px',
          letterSpacing: '0.8px',
          color: '#121519',
          marginTop: '2px',
          textTransform: 'uppercase'
        }}
      >
        FAST FOOD
      </span>
    </div>
  );
};
