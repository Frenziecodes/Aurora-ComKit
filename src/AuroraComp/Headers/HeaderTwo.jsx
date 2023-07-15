import CopyButton from "../../components/CopyButton";

function HeaderTwo() {
    return (
      <section className="my-4">
        <CopyButton id="#HeaderTwo" />
        <div className="flex items-center justify-between">                
                <div id="code-2" className="w-full bg-gray-100 p-2 rounded-lg text-gray-800">                    
                    <div className="container px-6 mx-auto">
                        <section className="mb-3 text-gray-800 text-center lg:text-left">                          
                            <div className="container my-24 px-6 mx-auto">
                                <section className="mb-3 text-gray-800 text-center">
                                    <div className="flex items-center flex-col justify-center">                                        
                                        <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                                            Are you ready <br />
                                            <span className="text-blue-600">for an adventure?</span>
                                        </h2>
                                        <p className="text-gray-500 text-lg">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
                                            adipisci tenetur repudiandae rerum quos.
                                        </p>                                        
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
  
  export default HeaderTwo;