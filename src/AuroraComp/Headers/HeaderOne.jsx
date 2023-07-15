import CopyButton from "../../components/CopyButton";

function HeaderOne() {
    return (
      <section className="my-4">
        <CopyButton id="#HeaderOne" />
        <div className="flex flex-col md:flex-row">              
              <div id="HeaderOne" className="w-full bg-gray-100 p-4 rounded-lg text-gray-800">                 
                    <div className="container my-4 px-6 mx-auto">                
                        <section className="mb-3 text-gray-800 text-center lg:text-left">
                            <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
                                <div className="mb-6 lg:mb-0">
                                <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
                                    Are you ready <br />
                                    <span className="text-blue-600">for an adventure?</span>
                                </h2>
                                </div>
                                <div className="mb-6 lg:mb-0">
                                <p className="uppercase text-blue-600 font-bold mb-4">Learn more</p>
                                <p className="text-gray-500 text-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
                                    adipisci tenetur repudiandae rerum quos.
                                </p>
                                </div>
                            </div>
                        </section> 
                    </div>
              </div>
            </div>
      </section>
    );
  }
  
  export default HeaderOne;