import React from "react";
const MyComponent: React.FC = () => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      console.log("Enter key pressed: you can run a function instead of this log statement");
    }
    if (e.key === "ArrowRight") {
      alert("right");
    }
    if (e.key === "ArrowLeft") {
      alert("left");
    }
  };    

  return (
    <img src="/images/captcha/boat.png" alt="haha" tabIndex={0} onKeyDown={handleKeyDown}/>
  );
};

export default MyComponent;
