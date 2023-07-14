import SideNav from "./SideNav";
import Navbar from "./NavBar";

function Navigation() {
    return (
      <section className="flex">       
          <SideNav/>
          <Navbar/>
      </section>
    )
  }
  
  export default Navigation;