import "./ChatbotPage.css";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AIGenerator from "./components/AIGenerator"; 

function ChatbotPage() {
  const navigate = useNavigate();

  return (
    <div className="chatbot-container">
      <Header />
      
      <h1 className="chatbot-title">Need Workout Advice? Chat with FitBot!</h1>

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
