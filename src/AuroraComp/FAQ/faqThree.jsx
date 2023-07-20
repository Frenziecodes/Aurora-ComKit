/* eslint-disable react/no-unescaped-entities */
import CopyButton from "../../components/CopyButton";

function FaqThree(){
    return(
        <section className="my-4">
            <CopyButton id="#FaqThree"/>
            
            <div className="flex flex-col md:flex-row">              
              <div id="FaqThree" className="w-full bg-gray-100 p-4 rounded-lg text-gray-800">
                    <div className="container my-6 px-6 mx-auto">
                        <section className="mb-3 text-gray-800">
                            <div className="grid lg:grid-cols-2 gap-4 lg:gap-x-12 lg:mb-0">
                                <div className="mb-12 lg:mb-0">
                                    <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
                            
                                    <p className="text-gray-500 mb-12">
                                        Didn't find your answer in the FAQ? Contact our sales team.
                                    </p>
                            
                                    <form>
                                        <div className="form-group mb-6">
                                            <input type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput7" placeholder="Name" />
                                        </div>
                                        <div className="form-group mb-6">
                                            <input type="email"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput8" placeholder="Email address" />
                                        </div>
                                        <div className="form-group mb-6">
                                            <textarea
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                                        </div>
                                        <div className="form-group form-check text-center mb-6">
                                            <input type="checkbox"
                                                className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                                id="exampleCheck87" checked />
                                            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">Send me a copy of this
                                                message</label>
                                        </div>
                                        <button type="submit"
                                            className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                            Send
                                        </button>
                                    </form>
                                </div>
                        
                                <div className="mb-6 md:mb-0">
                                    <p className="font-bold mb-4">Anim pariatur cliche reprehenderit?</p>
                                    <p className="text-gray-500 mb-12">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem numquam dolore
                                        molestias aperiam culpa alias veritatis architecto eos, molestiae vitae ex eligendi
                                        libero eveniet dolorem, doloremque rem aliquid perferendis.
                                    </p>
                            
                                    <p className="font-bold mb-4">Non cupidatat skateboard dolor brunch?</p>
                                    <p className="text-gray-500 mb-12">
                                        Distinctio corporis, iure facere ducimus quos consectetur ipsa ut magnam autem
                                        doloremque ex! Id, sequi. Voluptatum magnam sed fugit iusto minus et suscipit? Minima
                                        sunt at nulla tenetur, numquam unde quod modi magnam ab deserunt ipsam sint aliquid
                                        dolores libero repellendus cupiditate mollitia quidem dolorem odit
                                    </p>
                            
                                    <p className="font-bold mb-4">
                                        Praesentium voluptatibus temporibus consequatur non aspernatur?
                                    </p>
                                    <p className="text-gray-500 mb-12">
                                        Minima sunt at nulla tenetur, numquam unde quod modi magnam ab deserunt ipsam sint
                                        aliquid dolores libero repellendus cupiditate mollitia quidem dolorem.
                                    </p>
                            
                                    <p className="font-bold mb-4">Voluptatum magnam sed fugit iusto minus et suscipit?</p>
                                    <p className="text-gray-500 mb-12">
                                        Laudantium perferendis, est alias iure ut veniam suscipit dolorem fugit. Et ipsam
                                        corporis earum ea ut quae cum non iusto blanditiis ipsum dolor eius reiciendis, velit
                                        adipisci quas.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
              </div>
            </div>
        </section>
    )
}

export default FaqThree;