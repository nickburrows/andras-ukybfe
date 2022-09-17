import React from "react";
import { Outlet } from "react-router-dom";
import { Flowbite } from "flowbite-react";

const Layout = () => {
  return (
    <Flowbite
      theme={{
        theme: {
          alert: {
            color: {
              primary: "bg-gray-900"
            }
          }
        }
      }}
    >
      <div className="text-gray-800 bg-white dark:text-white dark:bg-stone-800">
        <main className="min-h-screen">
          <Outlet />
        </main>
      </div>
    </Flowbite>
  );
};

export default Layout;
