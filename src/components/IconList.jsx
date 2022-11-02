import { Icon } from "./Icon.jsx";

const style = {
  display: "flex",
  flexDirection: "column",
  height: "270px",
  width: "129px",
  gap: "10px",
};

export const IconList = () => (
  <div style={style}>
    <Icon src="idle" />
    <Icon src="pending" />
    <Icon src="resolved" />
    <Icon src="rejected" />
    <Icon src="disabled" />
  </div>
);
