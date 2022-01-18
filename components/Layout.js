import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <div className="">{children}</div>
        <Footer />
      </div>
    </>
  );
}
