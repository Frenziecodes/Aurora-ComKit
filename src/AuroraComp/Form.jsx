import FormOne from "./Form/FormOne";
import FormTwo from "./Form/FormTwo";
import FormThree from "./Form/FormThree";

function AuroraForm(){
    return(
        <section className="min-h-screen pt-20 px-6 flex justify-center">
        <div className="mb-12 text-gray-800 text-center max-w-[1200px]">
          <FormOne/>
          <FormTwo/>
          <FormThree/>
        </div>
        
    </section>
    )
}

export default AuroraForm;