import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const [notification, setNotification] = useState(true);
  const closeNotification = () => {
    setNotification(false);
  };

  return (
    <>
      <div
        id="banner"
        tabIndex="-1"
        className={`${
          notification ? "" : "hidden"
        } z-5 flex w-full items-start justify-between gap-2 border-b border-gray-200 bg-gray-50 px-4 dark:border-gray-700 dark:bg-gray-800 sm:items-center lg:py-1`}
      >
        <p className="mx-auto text-base text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-900 dark:text-white">
            Autumn Sale is Here!
          </span>{" "}
          🌟 Get 50% off on each item!{" "}
          {/* <a
            href="#"
            className="font-medium text-gray-900 underline hover:no-underline dark:text-white"
          >
            to shop!
          </a> */}
        </p>
        <button
          onClick={closeNotification}
          data-collapse-toggle="banner"
          type="button"
          className="flex items-center rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <Toaster />

      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
