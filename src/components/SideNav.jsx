import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdGitBranch } from 'react-icons/io';

function SideNav() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
  return (
    <section className="min-h-screen bg-white w-52 left-0 top-0 bottom-0 fixed z-50 shadow-2xl p-3">
      <h3 className="flex-shrink-0 text-gray-800 font-bold text-xl mb-10">Aurora ComKit</h3>
      
      <Link to="/" className=" w-full">
        <div className="p-1 my-4 hover:bg-gray-200 hover:text-gray-800 rounded-sm flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
        </svg>
        Get Started
        </div>
      </Link>

      <Link to="/Contribute" className=" w-full">
        <div className="p-1 my-4 hover:bg-gray-200 hover:text-gray-800 rounded-sm flex items-center">
          <IoMdGitBranch className="mr-2" size={20} />
          Contribute
        </div>
      </Link>

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
        <div className="ml-2">
          <Link to="/AuroraHeaders" className="block my-2 hover:bg-gray-200 px-6 rounded-md hover:text-gray-800">
            Headers
          </Link>
          <Link to="/AuroraPricing" className="block my-2 hover:bg-gray-200 px-6 rounded-md hover:text-gray-800">
            Pricing
          </Link>
          <Link to="/AuroraFeatures" className="block my-2 hover:bg-gray-200 px-6 rounded-md hover:text-gray-800">
            Features
          </Link>
          <Link to="/AuroraCta" className="block my-2 hover:bg-gray-200 px-6 rounded-md hover:text-gray-800">
            Cta
          </Link>
          <Link to="/AuroraFaq" className="block my-2 hover:bg-gray-200 px-6 rounded-md hover:text-gray-800">
            Faq
          </Link>
        </div>
      )}

      <div className="absolute bottom-4 left-1/2 w-full transform -translate-x-1/2">
        <a
          href="https://github.com/Frenziecodes/Aurora-ComKit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          Star Project
        </a>
      </div>
    </section>
  );
}

export default SideNav;
