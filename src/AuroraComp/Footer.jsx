import FooterOne from "./Footer/FooterOne";
import FooterTwo from "./Footer/FooterTwo";
import FooterThree from "./Footer/FooterThree";

function AuroraFooter(){
    return(
        <section className="min-h-screen pt-20 px-6 flex justify-center">
        <div className="mb-12 text-gray-800 text-center max-w-[1200px]">
          <FooterOne/>
          <FooterTwo/>
          <FooterThree/>
        </div>
        
    </section>
    )
}

export default AuroraFooter;