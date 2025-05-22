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
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
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
              {auth?.user?.email}
            </span>
            <div className="flex mt-4 md:mt-6">
              <Link
                to="/dashboard/user/orders"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Orders
              </Link>
              <Link
                to="/dashboard/user/profile"
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        <UserMenu />
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
