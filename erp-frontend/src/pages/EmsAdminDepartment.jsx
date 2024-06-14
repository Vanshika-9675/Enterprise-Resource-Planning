// import React from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import EmsAdminSidebar from "../components/EmsAdminSidebar";
// import EmsAdminNav from "../components/EmsAdminNav";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSingleDepartment , STATUSES } from "../store/slices/departmentSlice";
// import { MdOutlineUpdate } from "react-icons/md";
// import { IoTrashBinOutline } from "react-icons/io5";
// import { ThreeDots } from "react-loader-spinner";
// import Pagination from "../components/Pagination";


// const EmsAdminDepartment = () => {
//   const dispatch = useDispatch();

//    const [showMenu, setShowMenu] = useState(false);

//   // const [showModal, setShowModal] = useState(false);
//   // const [showUpdateModal, setShowUpdateModal] = useState(false);
//   // const [name, setName] = useState("");
//   // const [startDate, setStartDate] = useState("");
//   // const [endDate, setEndDate] = useState("");
//   // const [description, setDesc] = useState("");
//   // const [Pstatus, setStatus] = useState("pending");
//   // const [CurrentId, setCurrentId] = useState(null);


//   const { data, status, error } = useSelector((state) => state.department);
  
//   useEffect(() => {
//     if (status === STATUSES.IDLE && projects.length >0) {
//       setProject(projects);
//     }
//   }, [status, projects]);


//   const toggleMenu = () => {
//     setShowMenu((prevShowMenu) => !prevShowMenu);
//   };

//   useEffect(() => {
//     dispatch(fetchSingleDepartment(departmentId));
//   }, [dispatch]);


//   // const handleAddProject = (e) => {
//   //   e.preventDefault();
//   //   const status = Pstatus;
//   //   const projectData = { name, description, startDate, endDate, status };
//   //   dispatch(createProject(projectData))
//   //     .unwrap()
//   //     .then(() => {
//   //       dispatch(fetchProjects());
//   //     });
//   //   setShowModal(false);
//   // };

//   const handleDelete = (id) => {
//     // dispatch(deleteProject(id))
//     //   .unwrap()
//     //   .then(() => {
//     //     dispatch(fetchProjects());
//     //   })
//     //   .catch((error) => {
//     //     console.error("Error deleting project:", error);
//     //   });
//   };

//   const handleOpenUpdateModal = (id) => {
//     // setCurrentId(id);
//     // setShowUpdateModal(true);
//   };



//   // const handleName = (e) => {
//   //   setName(e.target.value);
//   // };

//   // const handleStatus = (e) => {
//   //   setStatus(e.target.value);
//   // };

//   // const handleDesc = (e) => {
//   //   setDesc(e.target.value);
//   // };

//   // const handleStartDate = (e) => {
//   //   setStartDate(e.target.value);
//   // };

//   // const handleEndDate = (e) => {
//   //   setEndDate(e.target.value);
//   // };

//   const { departmentId } = useParams();



//   return( 
//    <div className="min-h-[100vh] bg-[#F6F8FA] w-full">
//     <div className="w-full flex">
//       <EmsAdminSidebar showMenu={showMenu} />
//       <div className="w-full">
//         <EmsAdminNav toggleMenu={toggleMenu} />
//         {status === STATUSES.LOADING && (
//           <div className="absolute left-[50%] top-[50%] translate-x-2">
//             <ThreeDots
//               visible={true}
//               height="80"
//               width="80"
//               color="#4F80E3"
//               radius="9"
//               ariaLabel="three-dots-loading"
//               wrapperStyle={{}}
//               wrapperClass=""
//             />
//           </div>
//         )}
//         {status != STATUSES.LOADING && (
//           <div className="p-6 bg-white rounded-lg shadow-md mt-10 mx-4 sm:mx-6 md:mx-10 relative">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">
//               Project Details
//             </h2>
//             <button
//               className="absolute top-6 right-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//               onClick={() => setShowModal(true)}
//             >
//               Add Project
//             </button>
//             <div className="overflow-x-auto">
//               {status === STATUSES.ERROR && <p>Error: {error}</p>}
//               {status === STATUSES.IDLE && projects.length === 0 && (
//                 <p>No projects available</p>
//               )}
//               {
          
//                status === STATUSES.IDLE && data.employees.length > 0  && (
//                 <table className="min-w-full bg-white">
//                   <thead>
//                     <tr>
//                       <th className="py-2 px-4">Name</th>
//                       <th className="py-2 px-4">Description</th>
//                       <th className="py-2 px-4">Start Date</th>
//                       <th className="py-2 px-4">End Date</th>
//                       <th className="py-2 px-4">Status</th>
//                       <th className="py-2 px-4">Update</th>
//                       <th className="py-2 px-4">Delete</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.employees.map((employee) => (
//                       <tr key={project.projectId}>
//                         <td className="border px-4 py-2">{employee.id}</td>
//                         <td className="border px-4 py-2">
//                           {employee.username}
//                         </td>
                       
//                         <td className="border px-4 py-2">{employee.email}</td>
                        
//                         <td className="border px-4 py-2 text-center text-xl text-red-500">
//                           <button
//                             onClick={() =>
//                               handleDelete(employee.id)
//                             }
//                           >
//                             <IoTrashBinOutline />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//     {/* {showModal && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-[40%] relative">
//           <button
//             className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-4xl"
//             onClick={() => setShowModal(false)}
//           >
//             &times;
//           </button>
//           <h2 className="text-xl font-bold mb-4">Add New Project</h2>
//           <form onSubmit={handleAddProject}>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 onChange={(e) => {
//                   handleName(e);
//                 }}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="startDate"
//               >
//                 Start Date
//               </label>
//               <input
//                 type="date"
//                 id="startDate"
//                 name="startDate"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 onChange={(e) => {
//                   handleStartDate(e);
//                 }}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="endDate"
//               >
//                 End Date
//               </label>
//               <input
//                 type="date"
//                 id="endDate"
//                 name="endDate"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 onChange={(e) => {
//                   handleEndDate(e);
//                 }}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="description"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 onChange={(e) => {
//                   handleDesc(e);
//                 }}
//                 required
//               ></textarea>
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="status"
//               >
//                 Status
//               </label>
//               <select
//                 id="status"
//                 name="status"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 onChange={(e) => {
//                   handleStatus(e);
//                 }}
//                 required
//               >
//                 <option value="pending">Pending</option>
//                 <option value="completed">Completed</option>
//                 <option value="in progress">In Progress</option>
//               </select>
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Add Project
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )}
//     {showUpdateModal && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg relative">
//           <button
//             className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-4xl"
//             onClick={() => setShowUpdateModal(false)}
//           >
//             &times;
//           </button>
//           <h2 className="text-xl font-bold mb-4">Update Project Status</h2>
//           <div className="mb-4 flex gap-4">
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded"
//               onClick={(e) => handleUpdateProject("pending", e)}
//             >
//               Pending
//             </button>
//             <button
//               className="bg-green-500 text-white px-4 py-2 rounded"
//               onClick={(e) => handleUpdateProject("Completed", e)}
//             >
//               Completed
//             </button>
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//               onClick={(e) => handleUpdateProject("In Progress", e)}
//             >
//               In Progress
//             </button>
//           </div>
//         </div>
//       </div>
//     )} */}
//   </div>
//   );
// };

// export default EmsAdminDepartment;

import React from 'react'

const EmsAdminDepartment = () => {
  return (
    <div>EmsAdminDepartment</div>
  )
}

export default EmsAdminDepartment
