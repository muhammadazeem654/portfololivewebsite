// Chatbox.js

import React, { useState } from 'react';

const Chatbox = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, type: 'user' }]);
      // Implement logic to handle bot responses (you can define responses programmatically)
      handleBotResponse(input);
      setInput('');
    }
  };

  const handleBotResponse = (userMessage) => {
    // Implement your own logic for bot responses based on user input
    // For simplicity, you can define a simple set of responses here
    const botResponse = getBotResponse(userMessage);
    setMessages([...messages, { text: botResponse, type: 'bot' }]);
  };

  const getBotResponse = (userMessage) => {
    // Implement your own logic to determine bot responses
    // This is a simple example, you might want to make it more sophisticated
    if (userMessage.toLowerCase().includes('hello')) {
      return 'Hi there!';
    } else {
      return "I'm sorry, I don't understand.";
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

export default Chatbox;
