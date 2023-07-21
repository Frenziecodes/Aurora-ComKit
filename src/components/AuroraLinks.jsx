import { Link } from 'react-router-dom';
import { IoMdGitBranch } from 'react-icons/io';

function AuroraLinks(){
    return(
        <section>
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
        </section>
    )
}

export default AuroraLinks;