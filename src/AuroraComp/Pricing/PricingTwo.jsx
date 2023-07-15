import CopyButton from "../../components/CopyButton";

function PricingTwo() {
    return (
      <section className="my-4">
        <CopyButton id="#PricingTwo" />
        <div className="flex flex-col md:flex-row">              
              <div id="PricingTwo" className="w-full bg-gray-100 p-4 rounded-lg text-gray-800">                 
                    <div className="container my-4 px-6 mx-auto">                
                        <section className="mb-3 text-gray-800 text-center lg:text-left">                           
                            <div className="container my-6 px-6 mx-auto">
                                <section className="mb-3 text-gray-800">
                                <h2 className="text-3xl font-bold text-center mb-6">Pricing</h2>
                            
                                <p className="text-center mb-12 text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, amet.
                                </p>
                            
                                <div className="grid lg:grid-cols-4 gap-6 xl:gap-x-12">
                                    <div className="mb-6 lg:mb-0">
                                    <div className="block rounded-lg shadow-lg bg-white h-full">
                                        <div className="p-6 border-b border-gray-300 text-center">
                                        <p className="uppercase mb-4 text-sm">
                                            <strong>Hobby</strong>
                                        </p>
                                        <h3 className="text-2xl mb-6">
                                            <strong>Free</strong>
                                        </h3>
                            
                                        <button type="button"
                                            className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                                            style="background-color: hsl(0, 0%, 95%)" data-mdb-ripple="true"
                                            data-ripple-color="primary">
                                            Buy
                                        </button>
                                        </div>
                                        <div className="p-6">
                                        <ol className="list-inside">
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Unlimited updates
                                            </li>
                                        </ol>
                                        </div>
                                    </div>
                                    </div>
                            
                                    <div className="mb-6 lg:mb-0">
                                    <div className="block rounded-lg shadow-lg bg-white h-full">
                                        <div className="p-6 border-b border-gray-300 text-center">
                                        <p className="uppercase mb-4 text-sm">
                                            <strong>Basic</strong>
                                        </p>
                                        <h3 className="text-2xl mb-6">
                                            <strong>$ 129</strong>
                                            <small className="text-gray-500 text-sm">/year</small>
                                        </h3>
                            
                                        <button type="button"
                                            className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                                            style="background-color: hsl(0, 0%, 95%)" data-mdb-ripple="true" data-ripple-color="primary">
                                            Buy
                                        </button>
                                        </div>
                                        <div className="p-6">
                                        <ol className="list-inside">
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Unlimited updates
                                            </li>
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Git repository
                                            </li>
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>npm installation
                                            </li>
                                        </ol>
                                        </div>
                                    </div>
                                    </div>
                            
                                    <div className="mb-6 lg:mb-0">
                                    <div className="block rounded-lg bg-white h-full border border-blue-600">
                                        <div className="p-6 border-b border-gray-300 text-center">
                                        <p className="uppercase mb-4 text-sm">
                                            <strong>Advanced</strong>
                                        </p>
                                        <h3 className="text-2xl mb-6">
                                            <strong>$ 299</strong>
                                            <small className="text-gray-500 text-sm">/year</small>
                                        </h3>
                            
                                        <button type="button"
                                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                            data-mdb-ripple="true" data-ripple-color="light">
                                            Buy
                                        </button>
                                        </div>
                                        <div className="p-6">
                                        <ol className="list-inside">
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Unlimited updates
                                            </li>
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Git repository
                                            </li>
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>npm installation
                                            </li>
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Code examples
                                            </li>
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Premium snippets
                                            </li>
                                        </ol>
                                        </div>
                                    </div>
                                    </div>
                            
                                    <div className="mb-6 lg:mb-0">
                                    <div className="block rounded-lg shadow-lg bg-white h-full">
                                        <div className="p-6 border-b border-gray-300 text-center">
                                        <p className="uppercase mb-4 text-sm">
                                            <strong>Enterprise</strong>
                                        </p>
                                        <h3 className="text-2xl mb-6">
                                            <strong>$ 499</strong>
                                            <small className="text-gray-500 text-sm">/year</small>
                                        </h3>
                            
                                        <button type="button"
                                            className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                                            style="background-color: hsl(0, 0%, 95%)" data-mdb-ripple="true" data-ripple-color="primary">
                                            Buy
                                        </button>
                                        </div>
                                        <div className="p-6">
                                        <ol className="list-inside">
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Unlimited updates
                                            </li>
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Git repository
                                            </li>
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>npm installation
                                            </li>
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Code examples
                                            </li>
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Premium snippets
                                            </li>
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Premium support
                                            </li>
                                            <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Drag&amp;Drop builder
                                            </li>
                                        </ol>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </section>
                                
                            </div>                          
                        </section> 
                    </div>
              </div>
            </div>
      </section>
    );
  }
  
  export default PricingTwo