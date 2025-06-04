"use client";

import React, { useState, useEffect, useRef } from 'react';
import AIService from '@/services/aiService'; // Using import alias @
import DBService from '@/services/dbService';
import SpeechRecognitionService from '@/services/speechRecognitionService';
import { initializeAllEnhancements } from '@/enhancements/enhancements';

interface MessageType {
  text: string;
  sender: 'user' | 'bot' | 'system';
  id?: string;
}

export default function ChatPage() {
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState<MessageType[]>([]);
  const chatLogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadedHistory = DBService.getConversationHistory();
    if (loadedHistory.length > 0) {
      setChatLog(loadedHistory.map((item, index) => ({ ...item, id: `hist-${index}`})));
    } else {
      addMessageToLog("Chat initialized. Welcome!", 'system');
    }
  }, []);

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatLog]);

  useEffect(() => {
    if (typeof window !== 'undefined') { // Ensure client-side execution
      initializeAllEnhancements();
    }
  }, []);

  const addMessageToLog = (text: string, sender: MessageType['sender']) => {
    setChatLog(prevLog => [...prevLog, { text, sender, id: `msg-${Date.now()}` }]);
  };

  const handleSendMessage = async () => {
    const messageText = userInput.trim();
    if (messageText === '') return;

    addMessageToLog(messageText, 'user');
    setUserInput('');

    try {
      const aiResponse = await AIService.getAIResponse(messageText);
      addMessageToLog(aiResponse, 'bot');
      DBService.saveConversation({ user: messageText, bot: aiResponse });
    } catch (error) {
      console.error("Error processing message:", error);
      addMessageToLog("Sorry, I encountered an error processing your message.", 'system');
    }
  };

  const handleSpeechInput = () => {
    SpeechRecognitionService.startRecognition(
      (transcript) => {
        setUserInput(transcript);
      },
      (error) => {
        console.error("Speech recognition error:", error);
        addMessageToLog(error || "Speech recognition failed.", 'system');
      }
    );
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-gray-800 dark:bg-black text-white p-4 text-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Epic Chat (Next.js)</h1>
        <div className="enhancement-buttons absolute top-4 right-4 space-x-2">
        </div>
      </header>

      <main ref={chatLogRef} id="chat-log" className="flex-grow overflow-y-auto p-6 space-y-4">
        {chatLog.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`message p-3 rounded-lg max-w-[80%] lg:max-w-[70%] break-words ${
                msg.sender === 'user' ? 'bg-blue-600 dark:bg-blue-700 text-white' :
                msg.sender === 'bot' ? 'bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200' :
                'bg-red-200 dark:bg-red-800 text-red-900 dark:text-red-100'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </main>

      <footer className="input-area flex p-4 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 sticky bottom-0 z-10">
        <input
          type="text"
          id="user-input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
          className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
        />
        <button
          id="send-button"
          onClick={handleSendMessage}
          className="bg-green-500 hover:bg-green-600 text-white p-3 px-6 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Send
        </button>
        <button
          id="speech-button"
          onClick={handleSpeechInput}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 px-4 ml-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Speak
        </button>
      </footer>
    </div>
  );
}
