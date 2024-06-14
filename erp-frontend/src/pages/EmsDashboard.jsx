import React, { Fragment, useState } from "react";
import EmsEmpDashHero from "../components/EmsEmpDashHero";
import EmsEmpSidebar from "../components/EmsEmpSidebar";
import EmsEmpNav from "../components/EmsEmpNav"

const Dashbord = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className="min-h-[100vh] bg-[#F6F8FA] w-full">
      <div className='w-full flex'>
         <EmsEmpSidebar  showMenu={showMenu}/>
        <div className="w-full">
            <EmsEmpNav toggleMenu={toggleMenu}/>
            <EmsEmpDashHero/>
        </div>
      </div>

    </div>
  );
};
export default Dashbord;