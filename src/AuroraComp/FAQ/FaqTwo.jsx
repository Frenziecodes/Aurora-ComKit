import CopyButton from "../../components/CopyButton";

function FaqTwo(){
    return(
        <section className="my-4">
            <CopyButton id="#FaqTwo"/>
            <div className="flex flex-col md:flex-row">              
              <div id="FaqTwo" className="w-full bg-gray-100 p-4 rounded-lg text-gray-800">
                <div className="container my-6 px-6 mx-auto">
                    <section className="mb-3 text-gray-800">
                        <h2 className="text-3xl font-bold mb-12 text-center">Frequently asked questions</h2>
                    
                        <div className="grid lg:grid-cols-3 gap-6">
                            <div className="mb-12">
                                <p className="font-bold mb-4">Anim pariatur cliche reprehenderit?</p>
                                <p className="text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem numquam dolore
                                    molestias aperiam culpa alias veritatis architecto eos, molestiae vitae ex eligendi
                                    libero eveniet dolorem, doloremque rem aliquid perferendis.
                                </p>
                            </div>
                    
                            <div className="mb-12">
                                <p className="font-bold mb-4">Non cupidatat skateboard dolor brunch?</p>
                                <p className="text-gray-500">
                                    Distinctio corporis, iure facere ducimus quos consectetur ipsa ut magnam autem
                                    doloremque ex! Id, sequi. Voluptatum magnam sed fugit iusto minus et suscipit? Minima
                                    sunt at nulla tenetur, numquam unde quod modi magnam ab deserunt ipsam sint aliquid
                                    dolores libero repellendus cupiditate mollitia quidem dolorem odit
                                </p>
                            </div>
                    
                            <div className="mb-12">
                                <p className="font-bold mb-4">
                                    Praesentium voluptatibus temporibus consequatur non aspernatur?
                                </p>
                                <p className="text-gray-500">
                                    Minima sunt at nulla tenetur, numquam unde quod modi magnam ab deserunt ipsam sint
                                    aliquid dolores libero repellendus cupiditate mollitia quidem dolorem.
                                </p>
                            </div>
                    
                            <div className="col-md-12 mb-12">
                                <p className="font-bold mb-4">Voluptatum magnam sed fugit iusto minus et suscipit?</p>
                                <p className="text-gray-500">
                                    Laudantium perferendis, est alias iure ut veniam suscipit dolorem fugit. Et ipsam
                                    corporis earum ea ut quae cum non iusto blanditiis ipsum dolor eius reiciendis, velit
                                    adipisci quas.
                                </p>
                            </div>
                    
                            <div className="mb-12">
                                <p className="font-bold mb-4">Minima sunt at nulla tenetur,?</p>
                                <p className="text-gray-500">
                                    Numquam unde quod modi magnam ab deserunt ipsam sint aliquid dolores libero
                                    repellendus cupiditate mollitia quidem dolorem odit
                                </p>
                            </div>
                    
                            <div className="mb-12">
                                <p className="font-bold mb-4">Distinctio corporis, iure facere ducimus?</p>
                                <p className="text-gray-500">
                                    Eaque eos corrupti debitis tenetur repellat, beatae quibusdam incidunt, fuga non iste
                                    dignissimos officiis nam officia obcaecati commodi ratione qui nesciunt.
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

export default FaqTwo;