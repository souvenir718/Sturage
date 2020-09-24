import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={"100vh"} width={"100%"} />
);

export default Loading("cylon", "#07061C");
