import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {

  const [inputText, setInputText] = useState("");
  
  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID()
      }
    ];

    setChatMessages(newChatMessages);

    let response;

    if (inputText === 'Who is my love and future wife ?') {
      response = 'Your enternal love and future wife is Daniela, the most beautiful girl ever seen on earth, and you are going to get married soon!'
    } else {
      response = Chatbot.getResponse(inputText);
    }

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ])

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button 
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}
