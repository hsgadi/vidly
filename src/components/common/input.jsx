import React from "react";

const Input = ({ name, lable, value, error, onChange }) => {
  return (
    <div className="form-group">
      <lable htmlfor={name}>{lable}</lable>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type="text"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
