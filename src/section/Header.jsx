
function Header(){
    return(
        <div className="min-h-screen pt-20 flex justify-center items-center px-6 mx-auto">            
            <section className="mb-12 text-gray-800 text-center">
                <div className="flex justify-center">
                    <div className="max-w-[800px]">
                        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">
                            Build beautiful interfaces with ease. <br />
                            <div className="mt-8 text-blue-600">Get started with 𝐴𝑢𝑟𝑜𝑟𝑎 𝐶𝑜𝑚𝐾𝑖𝑡.</div>
                        </h2>
                        
                        <p className="mt-4 text-gray-500 text-lg">
                            Welcome to Aurora ComKit, your ultimate resource for free UI components built with Tailwind CSS. Our collection of components can help you save time and effort in developing your next project, so you can focus on what matters most – creating amazing user experiences. Browse our library of components and discover a world of possibilities.
                        </p>                    
        
                        {/* <a href="" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full mt-16 inline-block">Explore Components</a> */}
                    </div>
                </div>
            </section>      
        </div>    
    )
}

export default Header;