import Groq from "groq-sdk";
import { useState } from "react";
import "./AIGenerator.css";

const groq = new Groq({ apiKey: "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", dangerouslyAllowBrowser: true});

const AIGenerator = () => {
    const [content, setContent] = useState("");
    const [userInput, setUserInput] = useState(""); // Handles the user input
    const [showInput, setShowInput] = useState(false); // Controls showing the input
    const [isFirstInteraction, setIsFirstInteraction] = useState(true); // Controls first interaction

    async function getGroqChatCompletion(prompt) {
        return groq.chat.completions.create({
          messages: [
            {
              role: "system",
              content: "You are FitBot, a friendly fitness assistant aimed to help give workout advice. Make sure to be encouraging and helpful! No fat-shaming, and make sure your message is short, sweet but still concise about what your intentions are.",
            },
            {
                role: "user",
                content: prompt
            },
          ],
          model: "llama-3.3-70b-versatile",
        });
      }

    async function getStuff() {
        if (isFirstInteraction) {
            const introMessage = "You've taken the first step towards a healthier, happier you by including proper fitness and exercise."
            const chatCompletion = await getGroqChatCompletion(introMessage);
            // Print the completion returned by the LLM.
            console.log(chatCompletion.choices[0]?.message?.content || "");
            setContent(chatCompletion.choices[0]?.message?.content || "");
            setShowInput(true);
            setIsFirstInteraction(false);
        } else {
        const chatCompletion = await getGroqChatCompletion(userInput);
        setContent(chatCompletion.choices[0]?.message?.content || "")
        }
    }

    return (
        <div className="ai-container">
            <button onClick={getStuff} className="ai-button">
                Click here to chat with me!
            </button>

            {content && <div className="ai-response">{content}</div>}

            {showInput && (
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="What would you like to talk about?"
                    className="ai-input"
                    onKeyPress={(e) => e.key === "Enter" && getStuff()}
                />
            )}
        </div>
    )
}

// Use effect
// Use state

export default AIGenerator;