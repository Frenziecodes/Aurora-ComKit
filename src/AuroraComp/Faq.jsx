import FaqOne from "./FAQ/FaqOne";
import FaqTwo from "./FAQ/FaqTwo";
import FaqThree from "./FAQ/faqThree";

function AuroraFaq(){
    return(
        <section className="min-h-screen pt-20 px-6 flex justify-center">
        <div className="mb-12 text-gray-800 text-center max-w-[1200px]">
            <FaqOne/>
            <FaqTwo/>
            <FaqThree/>
        </div>
        
    </section>
    )
}

export default AuroraFaq;