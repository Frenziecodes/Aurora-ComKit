import { useState } from 'react';
import CompLinks from './ComponentsLinks';
import AuroraLinks from './AuroraLinks';
import StarAurora from './star';

function SideNav() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
  return (
    <section className="min-h-screen bg-white w-52 left-0 top-0 bottom-0 fixed z-50 shadow-2xl p-3">
      <AuroraLinks/>     
      <div
        className="p-1 my-4 hover:bg-gray-200 hover:text-gray-800 rounded-sm flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
        Components
        {dropdownOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>        
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>          
        )}
      </div>

      {dropdownOpen && (
        <CompLinks/>
      )}

      <div className="absolute bottom-4 left-1/2 w-full transform -translate-x-1/2">
        <StarAurora/>
      </div>
    </section>
  );
}

export default SideNav;
