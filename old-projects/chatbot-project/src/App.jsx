import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import './App.css';

function App() {

  const [chatMessages, setChatMessages] = useState([{
    message: "hello chatbot",
    sender: "user",
    id: "1"
  }, {
    message: "Hello! How can I help you?",
    sender: "robot",
    id: "2"
  }, {
    message: "What is the most valuable company ?",
    sender: "user",
    id: "3"
  }, {
    message: "Today is December 27",
    sender: "robot",
    id: "4"
  }, {
    message: "Thanks!",
    sender: "user",
    id: "5"
  }]);
  
  return (
    <div className="app-container">
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages} 
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
