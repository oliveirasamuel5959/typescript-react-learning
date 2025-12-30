import { useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'
import { getCurrentDate } from '../utils/datetime';

export function ChatMessages({ chatMessages }) {
  const currentDatetime = getCurrentDate();

  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElement = chatMessagesRef.current;
    if (containerElement) {
      containerElement.scrollTop = containerElement.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container"
    ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message={chatMessage.message} 
            sender={chatMessage.sender}
            key={chatMessage.id}
            currentTime={currentDatetime}
          />
        );
      })}
    </div>
  );
}

