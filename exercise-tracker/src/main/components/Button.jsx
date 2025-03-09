import "./Button.css";

function Button({ text, onClick }) {
    return (
    <button className="main-button" onClick={onClick}>
        {text}
        </button>
    );
  }
  
  export default Button;