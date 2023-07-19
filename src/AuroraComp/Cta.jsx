import CtaOne from "./CTA/CtaOne";
import CtaTwo from "./CTA/CtaTwo";
import CtaThree from "./CTA/CtaThree";

function AuroraCta(){
    return(
        <section className="min-h-screen pt-20 px-6 flex justify-center">
        <div className="mb-12 text-gray-800 text-center max-w-[1200px]">
            <CtaOne/>
            <CtaTwo/>
            <CtaThree/>
        </div>
        
    </section>
    )
}

export default AuroraCta;