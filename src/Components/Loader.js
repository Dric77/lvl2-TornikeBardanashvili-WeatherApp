import React, { children } from "react";
import "../App.scss";

function Loader({ isLoading, children }) {
  if (isLoading)
    return (
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  return children;
}

export default Loader;
