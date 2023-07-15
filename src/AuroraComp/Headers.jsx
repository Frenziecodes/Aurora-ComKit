import HeaderOne from "./Headers/HeaderOne";
import HeaderTwo from "./Headers/HeaderTwo";
import HeaderThree from "./Headers/HeaderThree";

function AuroraHeaders(){
    return(
        <section className="min-h-screen pt-20 px-6 flex justify-center">
            <div className="mb-12 text-gray-800 text-center max-w-[1200px]">
                <HeaderOne/>
                <HeaderTwo/>
                <HeaderThree/>
            </div>
            
        </section>
    )
}

export default AuroraHeaders;