import React, { useState } from 'react';
import { MdArrowBackIos, MdDashboard, MdOutlineLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { IoMdPersonAdd, IoIosCreate } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { logout } from '../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const navigationList = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    path: '/emsAdminDashboard'
  },
  {
    name: "Projects",
    icon: <GoProjectRoadmap />,
    path: '/emsProjects'
  },
  {
    name: "Create Task",
    icon: <IoIosCreate />,
    path: '/createTask'
  },
  {
    name: "Employees",
    icon: <FaUser />,
    path: '/emsEmployeeList'
  },
  {
    name: "Create Admin",
    icon: <RiAdminFill />,
    path: '/emsCreateAdmin'
  },
];

function EmsAdminSidebar({ showMenu }) {
  const [openSideBar, setOpenSideBar] = useState(true);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const changeSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const handleLogout= ()=>{
      dispatch(logout()); 
      navigate('/emsLogin')
  }

  return (
    <div
      className={`transition-all duration-1000 ease-in-out z-50 bg-white  sm:relative sm:flex sm:flex-col gap-2 sm:gap-16 rounded-br-xl h-screen min-h-[600px] py-6 absolute top-0 sm:left-0 ${showMenu ? "left-0 h-screen overflow-y-auto px-5" : "-left-72 sm:left-0"} ${openSideBar ? "w-72 px-5" : "w-72 sm:w-24"} overflow-hidden`}
    >
      <div
        className={`transition-all duration-500 delay-700 ease-in-out flex gap-2 justify-start items-center ${openSideBar ? "sm:justify-start" : "sm:justify-center"}  cursor-pointer relative z-30`}
      >
        <span
          className={` text-2xl font-semibold ${openSideBar ? " block" : "block sm:hidden"} `}
        >
          Admin <br /> Dashboard
        </span>
        <div
          className={`h-10  w-10 rounded-full bg-white absolute top-0  sm:flex justify-center items-center cursor-pointer hidden ${openSideBar ? "rotate-[180deg] -right-3" : "rotate-0 -right-3"}`}
          onClick={changeSideBar}
        >
          <MdArrowBackIos />
        </div>
      </div>
      <div className="flex flex-col gap-2.5 sm:justify-between h-full mt-10 sm:mt-0">
        <div className="md:max-w-[234px]">
          {navigationList.map((data, index) => (
            <NavLink
              key={index}
              to={data.path}
              className={({ isActive }) => `flex gap-2.5 items-center cursor-pointer py-2 group rounded-md overflow-hidden ${openSideBar ? " pl-5 justify-start flex-row" : "pl-5 sm:pl-0 justify-start sm:justify-center sm:flex-col"} ${isActive ? "bg-[#4F80E1]/[12%] text-[#4F80E1]" : "text-[#637381]"}`}
            >
              <div>{data.icon}</div>
              <span
                className={`font-medium text-base ${openSideBar ? " block" : "block sm:hidden sm:group-hover:text-xs"}`}
              >
                {data.name}
              </span>
            </NavLink>
          ))}
        </div>
        {/* logout */}
        <div className="max-w-[234px] "  onClick={handleLogout}>
          <NavLink
            className={({ isActive }) => `flex gap-2.5 items-center cursor-pointer py-2 rounded-md group ${openSideBar ? " pl-5 justify-start flex-row" : "pl-5 sm:pl-0 justify-start sm:justify-center sm:flex-col"} ${isActive ? "bg-[#4F80E1]/[12%] text-[#4F80E1]" : "text-[#637381]"}`}
          >
            <MdOutlineLogout />
            <span
              className={`font-medium text-base text-[#637381] ${openSideBar ? " block" : "block sm:hidden sm:group-hover:text-xs"}`}
            >
              Logout
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default EmsAdminSidebar;






