import React, { children } from "react";

function Loader({ loading, children }) {
  if (loading)
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  return children;
}

export default Loader;
