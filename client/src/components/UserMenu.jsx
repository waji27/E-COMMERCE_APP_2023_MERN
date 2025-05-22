import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <>
      <div className="w-full bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center p-2">
          <div className="flex">
            <Link
              to="/dashboard/user"
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Dashboard
            </Link>
            <button
              onClick={() => {
                toast.error("Feature not Added Yet!");
              }}
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Orders
            </button>
            <Link
              to="/dashboard/user/profile"
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
