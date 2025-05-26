import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/AdminMenu";
import Layout from "./../../components/Layout";
import toast from "react-hot-toast";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  // function to fetch all users
  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3030/api/v1/auth/all-users"
      );
      setUsers(response.data.allusers);
      // toast.success(response.data.message || "All users fetched Successfully");
    } catch (error) {
      toast.error("Error in Fetching all users");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Layout title={"Dashboard - Create Category"}>
      <AdminMenu />
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            {/* all users table  */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Phone No.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user) => (
                    <>
                      <tr
                        key={user._id}
                        className="border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {user.name}
                        </th>
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {user.email}
                        </th>
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {user.phone}
                        </th>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    // <Layout title={"Dashboard - All Users"}>
    //   <div className="row dashboard">
    //     <div className="row">
    //       <div className="col-md-3">
    //         <AdminMenu />
    //       </div>
    //       <div className="col-md-9">
    //         <h1 className="text-white">All Users</h1>
    //         <ul>
    //           {users?.map((user) => (
    //             <div key={user._id}>
    //               <li className="text-white">{user.name}</li>
    //             </div>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
  );
};

export default Users;
