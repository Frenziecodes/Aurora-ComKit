import { Link } from 'react-router-dom';

function CompLinks(){
    return(
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
        <Link to="/AuroraFooter" className="block my-2 hover:bg-gray-200 px-6 rounded-md hover:text-gray-800">
          Footer
        </Link>
        <Link to="/AuroraForm" className="block my-2 hover:bg-gray-200 px-6 rounded-md hover:text-gray-800">
          Form
        </Link>
      </div>
    )
}

export default CompLinks;