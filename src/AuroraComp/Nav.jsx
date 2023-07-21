import NavOne from "./NavBar/NavOne";
// import NavTwo from "./NavBar/NavTwo";

function AuroraNav(){
    return(
        <section className="min-h-screen pt-20 px-6 flex justify-center">
        <div className="mb-12 text-gray-800 text-center max-w-[1200px]">
          <NavOne/>
          {/* <NavTwo/> */}
        </div>
        
    </section>
    )
}

export default AuroraNav;