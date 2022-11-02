import { UploadButton } from "./UploadButton.jsx";
import { useState } from "react";
const style = {
  display: "flex",
  flexDirection: "column",
  height: "270px",
  width: "129px",
  justifyContent: "space-between",
};

export const ExampleButtons = () => {
  const [state, setState] = useState("idle");
  const upload = () => {
    setTimeout(() => {
      setState("pending");
    }, 200);
    setTimeout(() => {
      setState("resolved");
    }, 800);
  };
  return (
    <>
      <div onClick={upload} style={style}>
        <UploadButton state={state}></UploadButton>
      </div>
    </>
  );
};
