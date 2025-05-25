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
      </section>
    </Layout>
  );
};

export default Dashboard;
