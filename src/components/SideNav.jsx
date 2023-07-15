import { Link } from 'react-router-dom';
function SideNav() {
    return(
        <section className="min-h-screen bg-white w-52 left-0 top-0 bottom-0 fixed z-50 shadow-2xl p-3">
            <h3 className="flex-shrink-0 text-gray-800 font-bold text-xl mb-10">Aurora ComKit</h3>
            
            <Link to="/" className="my-4 w-full">
                <div className="p-1 hover:bg-gray-200 hover:text-gray-800 rounded-sm">               
                    Get Started
                </div>
            </Link>

            <Link to="/Contribute" className="my-4 w-full">
                <div className="p-1 hover:bg-gray-200 hover:text-gray-800 rounded-sm">               
                    Contribute
                </div>
            </Link>
          
        </section>
    )
}

export default SideNav;