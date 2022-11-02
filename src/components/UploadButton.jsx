import { Icon } from "./Icon.jsx";
const style = {
  button: {
    minWidth: "89px",
    height: "30px",
    padding: "0px 10px",
    background: "#FFFFFF",
    color: "#525577",
    borderRadius: "30px",
    border: "0",
    boxShadow: "0px 4px 4px #DBDDF0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  span: {
    height: "12px",
    left: "12px",
    fontFamily: "Spoqa Han Sans Neo",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "100%",
    paddingRight: "5px",
    whiteSpace: "nowrap",
  },
  disabled: {
    opacity: "30%",
  },
};
const defaultButton = {
  idle: "업로드",
  pending: "업로드 중",
  resolved: "완료",
  rejected: "실패",
  disabled: "업로드",
};

export const UploadButton = ({ state, children }) => {
  return (
    <button style={style.button}>
      <span
        style={
          state === "disabled"
            ? { ...style.disabled, ...style.span }
            : style.span
        }
      >
        {children ?? defaultButton[state]}
      </span>
      <Icon src={state} />
    </button>
  );
};
