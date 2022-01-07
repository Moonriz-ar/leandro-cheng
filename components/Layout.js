import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">{children}</div>
      </div>
      <Footer />
    </>
  );
}
