import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" lg:w-[1100px] md:w-[768px] sm:[640px] w-[340px]  m-auto">
      {children}
    </div>
  );
};

export default Container;
