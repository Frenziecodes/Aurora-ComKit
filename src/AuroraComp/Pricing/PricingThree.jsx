import CopyButton from '../../components/CopyButton';

function PricingThree() {
  return (
    <section className="my-4">
      <CopyButton id="#PricingThree" />
      <div className="flex flex-col md:flex-row">
        <div id="PricingThree" className="w-full bg-gray-100 p-4 rounded-lg text-gray-800">
          <div className="container my-4 px-6 mx-auto">
            <section className="mb-3 text-gray-800 text-center lg:text-left">
              <div className="container my-6 px-6 mx-auto">
                <section className="mb-3 text-gray-800">
                  <style>
                    {`
                    #pricing-block-5 {
                      height: 300px;
                      padding-top: 55px;
                    }

                    @media (min-width: 992px) {
                      #pricing-block-5 {
                        height: 400px;
                        padding-top: 80px;
                      }
                    }
                    .background-radial-gradient {
                      background-color: hsl(218, 41%, 15%);
                      background-image: radial-gradient(
                        650px circle at 0% 0%,
                        hsl(218, 41%, 35%) 15%,
                        hsl(218, 41%, 30%) 35%,
                        hsl(218, 41%, 20%) 75%,
                        hsl(218, 41%, 19%) 80%,
                        transparent 100%
                      ),
                      radial-gradient(
                        1250px circle at 100% 100%,
                        hsl(218, 41%, 45%) 15%,
                        hsl(218, 41%, 30%) 35%,
                        hsl(218, 41%, 20%) 75%,
                        hsl(218, 41%, 19%) 80%,
                        transparent 100%
                      );
                    }
                    `}
                  </style>

                  <div id="pricing-block-5" className="background-radial-gradient text-center text-white">
                    <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
                  </div>

                  <div className="grid lg:grid-cols-3 px-6 md:px-12 xl:px-32" style={{ marginTop: '-200px' }}>
                    <div className="p-0 py-12">
                      <div className="block rounded-lg shadow-lg bg-white h-full lg:rounded-tr-none lg:rounded-br-none">
                        <div className="p-6 border-b border-gray-300 text-center">
                          <p className="uppercase mb-4 text-sm">
                            <strong>Basic</strong>
                          </p>
                          <h3 className="text-2xl mb-6">
                            <strong>$ 129</strong>
                            <small className="text-gray-500 text-sm">/year</small>
                          </h3>

                          <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                            style={{ backgroundColor: 'hsl(0, 0%, 95%)' }}
                            data-mdb-ripple="true"
                            data-ripple-color="primary"
                          >
                            Buy
                          </button>
                        </div>
                        <div className="p-6">
                          <ol className="list-inside">
                            <li className="mb-4 flex items-center">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className="text-green-600 w-4 h-4 mr-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                ></path>
                              </svg>
                              Unlimited updates
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className="text-green-600 w-4 h-4 mr-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                ></path>
                              </svg>
                              Git repository
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className="text-green-600 w-4 h-4 mr-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                ></path>
                              </svg>
                              npm installation
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <div className="p-0">
                      <div className="block rounded-lg shadow-lg bg-white h-full z-10">
                        <div className="p-6 border-b border-gray-300 text-center">
                          <p className="uppercase mb-4 text-sm">
                            <strong>Enterprise</strong>
                          </p>
                          <h3 className="text-2xl mb-6">
                            <strong>$ 499</strong>
                            <small className="text-gray-500 text-sm">/year</small>
                          </h3>

                          <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                          >
                            Buy
                          </button>
                        </div>
                        <div className="p-6">
                          <ol className="list-inside">
                            <li className="mb-4 flex items-center">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className="text-green-600 w-4 h-4 mr-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                ></path>
                              </svg>
                              Unlimited updates
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className="text-green-600 w-4 h-4 mr-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                ></path>
                              </svg>
                              Git repository
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className="text-green-600 w-4 h-4 mr-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                ></path>
                              </svg>
                              npm installation
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <div className="p-0 py-12">
                      <div className="block rounded-lg shadow-lg bg-white h-full lg:rounded-tl-none lg:rounded-bl-none">
                        <div className="p-6 border-b border-gray-300 text-center">
                          <p className="uppercase mb-4 text-sm">
                            <strong>Advanced</strong>
                          </p>
                          <h3 className="text-2xl mb-6">
                            <strong>$ 299</strong>
                            <small className="text-gray-500 text-sm">/year</small>
                          </h3>

                          <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                            style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
                          >
                            Buy
                          </button>
                        </div>
                        <div className="p-6">
                          <ol className="list-inside">
                            <li className="mb-4 flex items-center">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className="text-green-600 w-4 h-4 mr-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                ></path>
                              </svg>
                              Unlimited updates
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className="text-green-600 w-4 h-4 mr-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                ></path>
                              </svg>
                              Git repository
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className="text-green-600 w-4 h-4 mr-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                ></path>
                              </svg>
                              npm installation
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className="text-green-600 w-4 h-4 mr-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                ></path>
                              </svg>
                              Code examples
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className="text-green-600 w-4 h-4 mr-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                ></path>
                              </svg>
                              Priority support
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

export default PricingThree;
