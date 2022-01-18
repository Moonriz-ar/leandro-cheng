import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="h-screen">
        <div className="">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
