import "./ChatbotPage.css";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AIGenerator from "./components/AIGenerator";
import robot from "../assets/robot.gif";

function ChatbotPage() {
  const navigate = useNavigate();

  return (
    <div className="chatbot-container">
      <Header />

      <h1 className="chatbot-title">Need Workout Advice? Chat with FitBot!</h1>
      <img src={robot} alt="FitBot Robot" className="robot-gif" />

      {/* ✅ Centered Chatbot */}
      <div className="chatbot-content">
        <AIGenerator />
      </div>

      {/* ✅ Back Button to Exercise Page */}
      <button className="back-button" onClick={() => navigate("/main")}>
        Go Back to Exercise!
      </button>

      <Footer />
    </div>
  );
}

export default ChatbotPage;
