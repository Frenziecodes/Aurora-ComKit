import TeamOne from "./Team/TeamOne";
import TeamTwo from "./Team/TeamTwo";
import TeamThree from "./Team/TeamThree";

function AuroraTeam(){
    return(
        <section className="min-h-screen pt-20 px-6 flex justify-center">
        <div className="mb-12 text-gray-800 text-center max-w-[1200px]">
          <TeamOne/>
          <TeamTwo/>
          <TeamThree/>
        </div>
        
    </section>
    )
}

export default AuroraTeam;