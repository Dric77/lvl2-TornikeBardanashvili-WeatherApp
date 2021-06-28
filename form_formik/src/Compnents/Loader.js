import React, { children } from "react";
import "../App.scss";

function Loader({ loading, children }) {
  if (loading)
    return (
      <div className="formik-container">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );

  return children;
}

export default Loader;
