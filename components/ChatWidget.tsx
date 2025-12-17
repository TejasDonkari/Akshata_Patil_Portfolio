import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';
import { AI_SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from '../types';

// Vite environment variable (must start with VITE_)
const apiKey = import.meta.env.VITE_API_KEY as string | undefined;

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    // Initialize Gemini Chat only if API key exists
    if (!apiKey) return;

    try {
      const ai = new GoogleGenAI({ apiKey });
      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: AI_SYSTEM_INSTRUCTION,
        },
      });

      setChatSession(chat);

      // Initial greeting
      setMessages([
        {
          role: 'model',
          text: "Hi! I'm Akshata's AI assistant. Ask me anything about her skills, experience, or projects!",
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error('Failed to initialize AI', error);
    }
  }, []);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSession) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    try {
      const response: GenerateContentResponse = await chatSession.sendMessage({
        message: userMessage.text,
      });

      const botMessage: ChatMessage = {
        role: 'model',
        text: response.text || "I'm sorry, I couldn't process that request.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: 'I encountered an error connecting to the server. Please try again later.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // If no API key, do not render the widget
  if (!apiKey) return null;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-2xl transition-all z-50 hover:scale-110 ${
          isOpen ? 'hidden' : 'flex'
        }`}
        aria-label="Open AI Chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-900 to-slate-900 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-cyan-500/20 rounded-lg">
                <Bot size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Akshata's AI Assistant</h3>
                <p className="text-xs text-slate-400">Powered by Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-none'
                      : 'bg-slate-700 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 rounded-2xl rounded-bl-none px-4 py-2.5 flex items-center space-x-2">
                  <Loader2 size={16} className="animate-spin text-cyan-400" />
                  <span className="text-xs text-slate-400">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-800 border-t border-slate-700">
            <div className="flex items-center space-x-2 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my resume..."
                className="w-full bg-slate-900 text-slate-100 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-slate-700 placeholder-slate-500"
              />
              <button
                onClick={handleSend}
                disabled={loading || !inputValue.trim()}
                className="absolute right-2 p-1.5 bg-cyan-600 text-white rounded-full hover:bg-cyan-500 disabled:opacity-50 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
