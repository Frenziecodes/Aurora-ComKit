
function AuroraFooter (){
    return(
        <section className="bg-neutral-900 flex text-center justify-center items-center h-12 text-white mt-auto">
            <div className="text-white text-center">
                © {new Date().getFullYear() } All rights reserved    
            </div>
        </section>
    )
}

export default AuroraFooter;