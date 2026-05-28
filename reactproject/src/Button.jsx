import "./App.css";

function ButtonComp(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return <button style={buttonStyle}>{props.text}</button>;
}

export function Button() {
  return (
    <div className="button-container">
      <ButtonComp text="Click Me!" color="blue" fontSize={12} />
      <ButtonComp text="!Don't Click Me" color="red" fontSize={14} />
      <ButtonComp text="Click Me!" color="blue" fontSize={12} />
    </div>
  );
}
