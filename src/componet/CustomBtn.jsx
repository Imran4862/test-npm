import React, { useState } from "react";

const CustomBtn = ({ msg }) => {
  const [text, setText] = useState("Click me");

  const handleBtnClick = () => {
    console.log("Msg: ", msg);
  };
  return (
    <div className="custom-btn">
      <button onClick={handleBtnClick}>{text}</button>
    </div>
  );
};

export default CustomBtn;
