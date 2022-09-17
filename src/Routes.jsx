import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import App from "./App";

const Routes = () => {
  let routes = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <App />
        }
      ]
    }
  ]);
  return routes;
};

export default Routes;
