import "./App.css";

function Prop({ text, color, fontSize, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export function Button() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };
  return (
    <div className="button-container">
      <Prop text="click Me!" color="blue" fontSize={12} />
      <Prop
        text="Don't Click Me!"
        color="red"
        fontSize={20}
        handleClick={() => handleButtonClick("https://www.google.com")}
      />
      <Prop text="Click Me" color="blue" fontSize={12} />
    </div>
  );
}
