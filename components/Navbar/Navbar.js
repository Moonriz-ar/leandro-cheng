import { useState } from "react";

import Script from "next/script";
import MainNav from "./MainNav";
import SecondaryNav from "./SecondaryNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    return setOpen(!open);
  };

  const renderSecondaryNav = () => {
    return <SecondaryNav handleClick={handleClick} />;
  };

  return (
    <nav className="fixed top-0 z-20 flex flex-col">
      <Script
        src="https://kit.fontawesome.com/3552e4e004.js"
        crossorigin="anonymous"
      ></Script>
      <MainNav handleClick={handleClick} />
      {open ? renderSecondaryNav() : null}
    </nav>
  );
};

export default Navbar;
