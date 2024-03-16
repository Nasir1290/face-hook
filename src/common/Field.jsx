import React from "react";

const Field = ({ label, children, htmlFor, error }) => {
  return (
    <div className="form-control ">
      {label && (
        <label htmlFor={htmlFor || getChild(children)} className=" auth-lebel">
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div role=" alert" className=" text-red-600">
          {error?.message}
        </div>
      )}
    </div>
  );
};

const getChild = (children) => {
  const child = React.Children.only(children);
  if ("id" in child?.props) {
    return child?.props?.id;
  }
};

export default Field;
