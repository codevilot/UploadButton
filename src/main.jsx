import { StrictMode } from "react";
import { render } from "react-dom";
import { SampleButtons } from "./components/SampleButtons.jsx";
import { ExampleButtons } from "./components/ExampleButtons.jsx";
import { IconList } from "./components/IconList.jsx";

const style = {
  display: "flex",
  justifyContent: "space-around",
};
const App = () => (
  <div style={style}>
    <IconList />
    <SampleButtons />
    <ExampleButtons />
  </div>
);

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
