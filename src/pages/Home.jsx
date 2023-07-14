import SideNav from "./SideNav";
import Navbar from "./NavBar";
import Header from "../section/Header";
function Home() {
    return (
        <section className="flex w-full">
            <SideNav/>
            <div className="w-full">
                <Navbar/>
                <Header/>
            </div>
            
        </section>
    )
  }
  
  export default Home;