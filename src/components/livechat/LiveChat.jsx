// LiveChat.js

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socket = io('http://localhost:3000'); // Replace with your server's URL

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages([...messages, { text: message, type: 'bot' }]);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [messages, socket]);

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      // Send the user message to the server
      socket.emit('message', input);
      setMessages([...messages, { text: input, type: 'user' }]);
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.type}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default LiveChat;
