import { useState } from 'react';

export default function Nav() {
  const [selected, setSelected] = useState('File');
  const items = ['File', 'Edit', 'Format', 'View', 'Insert', 'Collaborate', 'Extensions', 'Settings', 'Help'];

  return (
    <nav className="mb-4 w-full overflow-x-auto px-2 sm:px-4 py-2 rounded-lg bg-[#F0F4FF]">
      <ul className="flex gap-2 sm:gap-4 text-sm sm:text-base">
        {items.map((item) => {
          const isSelected = selected === item;
          return (
            <li key={item}>
              <button
                onClick={() => setSelected(item)}
                className={`
                  bg-transparent hover:bg-transparent
                  border-none outline-none focus:ring-2 focus:ring-blue-300
                  px-2 py-1 font-medium border-b-2 transition-colors duration-200
                  ${isSelected
                    ? 'border-blue-600 !text-blue-900'
                    : 'border-transparent !text-blue-600 hover:!text-blue-800 hover:border-blue-300'}
                `}
                style={{
                  backgroundColor: 'transparent !important',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  outline: 'none',
                }}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
