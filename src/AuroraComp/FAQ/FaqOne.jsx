/* eslint-disable react/no-unescaped-entities */
import CopyButton from "../../components/CopyButton";

function FaqOne(){
    return(
        <section className="my-4">
            <CopyButton id="#FaqOne"/>
            <div className="flex flex-col md:flex-row">              
              <div id="FaqOne" className="w-full bg-gray-100 p-4 rounded-lg text-gray-800"> 
                    <div className="container my-6 px-6 mx-auto">
                        <section className="mb-3 text-gray-800">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="mb-6 md:mb-0">
                                    <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
                            
                                    <p className="text-gray-500">
                                        Didn't find your answer in the FAQ?
                                        <a href="#!"
                                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300">Contact
                                        our sales team</a>.
                                    </p>
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
                                </div>
                            </div>
                        </section>
                    </div>
              </div>
            </div>
        </section>
    )
}

export default FaqOne;