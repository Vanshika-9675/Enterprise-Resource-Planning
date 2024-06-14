import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmsAdminNav from "../components/EmsAdminNav";
import EmsAdminSidebar from "../components/EmsAdminSidebar";
import { fetchDepartment } from "../store/slices/departmentSlice";
import { ThreeDots } from 'react-loader-spinner';
import { STATUSES } from '../store/slices/departmentSlice';
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const EmsEmployeeList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const { status, data, error } = useSelector((state) => state.department);

  useEffect(() => {
    dispatch(fetchDepartment());
  }, [dispatch]);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleDepartment = (departmentId)=>{
    //navigation(`/emsAdminDepartment/${departmentId}`);
  }

  return (
    <div className="min-h-[100vh] bg-[#F6F8FA] w-full">
      <div className="w-full flex">
        <EmsAdminSidebar showMenu={showMenu} />
        <div className="w-full">
          <EmsAdminNav toggleMenu={toggleMenu} />
      
         {status === STATUSES.LOADING && (
          <div className="absolute left-[50%] top-[50%] translate-x-2">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#4F80E3"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        {status === STATUSES.ERROR && <p>Error: {error}</p>}
        {status === STATUSES.IDLE && data.length === 0 && (
          <p>No departments available.</p>
        )}
        {status !== STATUSES.LOADING && (
          <>
              <h2 className="text-2xl text-center my-4">Departments</h2>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">     
             {data.map((department, index) => (
                <div key={index} onClick={()=>{handleDepartment(department.departmentId)}} className="bg-white p-10 rounded-lg shadow-md cursor-pointer border mx-5 flex items-center justify-between hover:invert">
                  <h2 className="text-2xl font-semibold">{department.name}</h2>
                  <FaUser className="text-xl" />
                </div>
              ))}
            </div>
          </>
        )}
         </div>
      </div>
    </div>
  );
};

export default EmsEmployeeList;


// const [showMenu, setShowMenu] = useState(false);

// const toggleMenu = () => {
//   setShowMenu((prevShowMenu) => !prevShowMenu);
// };

// const [title, setTitle] = useState("");
// const [titleFlag, setTitleFlag] = useState(false);

// const [emp, setEmp] = useState("");
// const [empFlag, setempFlag] = useState(false);

// const [date, setDate] = useState('');
// const [dateFlag, setDateFlag] = useState(false);

// const handleName = (e) => {
//   setTitleFlag(false);
//   setTitle(e.target.value);
// };

// const handleEmp = (e) => {
//   setempFlag(false);
//   setEmp(e.target.value);
// };

// const handleDate = (e) => {
//   setDateFlag(false);
//   setDate(e.target.value);
// }

// const handleSubmit = () => {
//   if (title === "") {
//     setTitleFlag(true);
//   } else {
//     setTitleFlag(false);
//   }
//   if (emp === "") {
//     setempFlag(true);
//   } else {
//     setempFlag(false);
//   }
//   if (date === '') {
//     setDateFlag(true);
//     valid = false;
//   } else {
//     setDateFlag(false);
//   }
// };

//  <div className="min-h-[100vh] bg-[#F6F8FA] w-full">
//   <div className='w-full flex'>
//      <EmsAdminSidebar  showMenu={showMenu}/>
//     <div className="w-full">
//       <EmsAdminNav toggleMenu={toggleMenu}/>
//       <div>
//     <div className="max-w-screen-lg mx-auto p-5 ">
//       <div className="grid grid-cols-1 md:grid-cols-12 border bg-white rounded-xl">
//         <div className="md:col-span-8 p-4 md:p-10">
//           <div className="sm:grid-cols-2 gap-5">

//             <div className="col-span-1">
//               <label
//                 className="text-sm text-gray-600 font-semibold block"
//                 htmlFor="name"
//               >
//                 Employee Name
//               </label>
//               <input
//                 className="mt-2 px-3 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500 block w-full shadow-sm rounded-md sm:text-sm"
//                 type="text"
//                 id="name"
//                 placeholder="Name"
//                 onChange={(e) => handleName(e)}
//               />
//               {titleFlag && (
//                 <p className="text-xs text-red-600">Enter employee name*</p>
//               )}
//             </div>

//             <div className="col-span-1">
//             <label
//                 className="text-sm text-gray-600 font-semibold block"
//                 htmlFor="name"
//               >
//                 Role
//               </label>
//               <input
//                 className="mt-2 px-3 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500 block w-full shadow-sm rounded-md sm:text-sm"
//                 type="text"
//                 id="name"
//                 placeholder="Role"

//               />
//               {empFlag && (

//                 <p className="text-xs text-red-600">Provide Role*</p>
//               )}
//             </div>

//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
//             <div className="col-span-1">
//               <div className="relative max-w-sm">
//               <label
//                 className="text-sm text-gray-600 font-semibold block"
//                 htmlFor="name"
//               >
//                 Password
//               </label>
//               <input
//                 className="mt-2 px-3 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500 block w-full shadow-sm rounded-md sm:text-sm"
//                 type="text"
//                 id="name"
//                 placeholder="Password"
//               />
//               {empFlag && (
//                 <p className="text-xs text-red-600">Enter password*</p>
//               )}
//               </div>
//             </div>
//           </div>
//           <div className="mt-5">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 text-white font-semibold text-sm rounded-md block w-full shadow-sm sm:w-auto"
//               onClick={handleSubmit}
//             >
//               Create Employee
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     </div>
//   </div>
// </div>
