import SideNav from "../components/SideNav";
import Navbar from "../components/NavBar";
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