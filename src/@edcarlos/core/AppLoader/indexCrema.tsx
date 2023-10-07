import React from "react";
import { Loading } from "@nextui-org/react";

const AppLoader = () => {
  return (
    <div className="app-loader">
      <div className="loader-spin">
        <span className="edadmin-dot edadmin-dot-spin">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span> 
      </div>
    </div>  
    );
};

export default AppLoader;
