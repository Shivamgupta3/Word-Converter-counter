import React from "react";

function Alert(propes) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: `50px` }}>
      {propes.alert && (
        <div
          className={`alert alert-${propes.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(propes.alert.type)}</strong>: {propes.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
