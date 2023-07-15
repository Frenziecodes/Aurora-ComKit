import PricingOne from "./Pricing/PricingOne";
// import PricingTwo from "./Pricing/PricingTwo";
import PricingThree from "./Pricing/PricingThree";

function AuroraPricing(){
    return(
        <section className="min-h-screen pt-20 px-6 flex justify-center">
            <div className="mb-12 text-gray-800 text-center max-w-[1200px]">
                <PricingOne/>
                {/* <PricingTwo/> */}
                <PricingThree/>
            </div>
            
        </section>
    )
}

export default AuroraPricing;