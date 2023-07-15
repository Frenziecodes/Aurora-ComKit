import FeatureOne from "./Features/FeatureOne"
import FeatureTwo from "./Features/Featuretwo"
import FeatureThree from "./Features/FeatureThree"
function AuroraFeatures(){
    return(
        <section className="min-h-screen pt-20 px-6 flex justify-center">
            <div className="mb-12 text-gray-800 text-center max-w-[1200px]">
                <FeatureOne/>                
                <FeatureTwo/>
                <FeatureThree/>
            </div>
            
        </section>
    )
}

export default AuroraFeatures