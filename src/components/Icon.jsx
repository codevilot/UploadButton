const states = {
  idle: "../assets/arrow.svg",
  pending: "../assets/spinner.svg",
  resolved: "../assets/check.svg",
  rejected: "../assets/x.svg",
  disabled: "../assets/ban.svg",
};

export const Icon = ({ src }) => {
  const style = {
    height: "12px",
    left: "12px",
    fontFamily: "Spoqa Han Sans Neo",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "100%",
  };
  const disabledStyle = {
    ...style,
    opacity: "30%",
  };
  return (
    <img src={states[src]} style={src === "disabled" ? disabledStyle : style} />
  );
};
