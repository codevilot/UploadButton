import { UploadButton } from "./UploadButton.jsx";

const style = {
  display: "flex",
  flexDirection: "column",
  height: "270px",
  width: "129px",
  justifyContent: "space-between",
};

export const SampleButtons = () => (
  <div style={style}>
    <UploadButton state="idle"></UploadButton>
    <UploadButton state="pending"></UploadButton>
    <UploadButton state="resolved"></UploadButton>
    <UploadButton state="rejected"></UploadButton>
    <UploadButton state="disabled"></UploadButton>
    <UploadButton state="rejected">글자가 많은 경우</UploadButton>
  </div>
);
