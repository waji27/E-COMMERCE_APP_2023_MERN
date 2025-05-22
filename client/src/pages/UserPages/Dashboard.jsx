import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/auth";
import UserMenu from "../../components/UserMenu";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <section className="bg-gray-50 dark:bg-gray-900 bg-white">
        <UserMenu />
        <div className="w-full bg-white shadow-sm dark:bg-gray-900 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            {/* <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            /> */}
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-4">
              {auth?.user?.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Email: {auth?.user?.email}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Phone: {auth?.user?.phone}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Address: {auth?.user?.address}
            </span>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>name: {auth?.user?.name}</h3>
              <h3>email: {auth?.user?.email}</h3>
              <h3>address: {auth?.user?.address}</h3>
            </div>
          </div>
        </div> */}
      </section>
    </Layout>
  );
};

export default Dashboard;
// import React from "react";
// import Layout from "../../components/Layout/Layout";
// import UserMenu from "../../components/Layout/UserMenu";
// import { useAuth } from "../../context/auth";
// const Dashboard = () => {
//   const [auth] = useAuth();
//   return (
//     <Layout title={"Dashboard - Ecommerce App"}>
//       <div className="container-flui m-3 p-3 dashboard">
//         <div className="row">
//           <div className="col-md-3">
//             <UserMenu />
//           </div>
//           <div className="col-md-9">
//             <div className="card w-75 p-3">
//               <h3>{auth?.user?.name}</h3>
//               <h3>{auth?.user?.email}</h3>
//               <h3>{auth?.user?.address}</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Dashboard;
