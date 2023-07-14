import PropTypes from "prop-types";
import SideNav from "./SideNav";
import Navbar from "./NavBar";

function Layout({ children }) {
  return (
    <section className="flex w-full">
      <SideNav />
      <div className="w-full">
        <Navbar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </section>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
