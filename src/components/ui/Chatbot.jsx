import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import schoolInfo from '../../data/schoolInfo.json';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: `Hi! I'm the ${schoolInfo.shortName} assistant. How can I help you today?`, isUser: false }
  ]);
  const [currentSuggestions, setCurrentSuggestions] = useState([
    "Admissions", "11th Curriculum", "Facilities", "Sports", "Contact"
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    processMessage(userMessage);
  };

  const processMessage = (userMessage) => {
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setCurrentSuggestions([]);

    // Simple bot logic
    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();
      let newSuggestions = [];

      if (lowerInput.includes('admission') || lowerInput.includes('join')) {
        botResponse = 'For admissions, please visit our Admissions page or contact our office during working hours.';
        newSuggestions = ["Fees", "11th Curriculum", "Contact"];
      } else if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('call')) {
        botResponse = `You can reach us at ${schoolInfo.contact.phone.join(', ')} or email us at ${schoolInfo.contact.email}.`;
        newSuggestions = ["Address", "Timings", "Admissions"];
      } else if (lowerInput.includes('fee')) {
        botResponse = 'For detailed fee structures, please contact our administrative office directly.';
        newSuggestions = ["Admissions", "Contact"];
      } else if (lowerInput.includes('timing') || lowerInput.includes('hours') || lowerInput.includes('time')) {
        botResponse = `Our school hours are ${schoolInfo.timings.schoolHours}. Office hours are ${schoolInfo.timings.officeHours}, ${schoolInfo.timings.workingDays}.`;
        newSuggestions = ["Contact", "Address"];
      } else if (lowerInput.includes('address') || lowerInput.includes('location') || lowerInput.includes('where')) {
        botResponse = `We are located at ${schoolInfo.address.street}, ${schoolInfo.address.area}, ${schoolInfo.address.city}, ${schoolInfo.address.pincode}.`;
        newSuggestions = ["Transport", "Contact"];
      } else if (lowerInput.includes('principal') || lowerInput.includes('head')) {
        botResponse = `Our Principal is ${schoolInfo.principal.name}, ${schoolInfo.principal.qualification}.`;
        newSuggestions = ["Achievements", "Facilities"];
      } else if (lowerInput.includes('sports') || lowerInput.includes('games') || lowerInput.includes('extracurricular')) {
        botResponse = `Our campus features a cricket pitch, football field, basketball court, and more. We have won ${schoolInfo.stats.sportsAwards} sports awards!`;
        newSuggestions = ["Facilities", "Achievements"];
      } else if (lowerInput.includes('achievement') || lowerInput.includes('topper') || lowerInput.includes('pass')) {
        botResponse = `We proudly maintain a ${schoolInfo.stats.passRate}% pass rate with ${schoolInfo.stats.boardToppers} board toppers over our ${schoolInfo.stats.yearsOfExcellence} years of excellence.`;
        newSuggestions = ["11th Curriculum", "Sports"];
      } else if (lowerInput.includes('facility') || lowerInput.includes('infrastructure') || lowerInput.includes('campus')) {
        botResponse = `Our ${schoolInfo.stats.campusAcres}-acre campus includes a hygienic canteen, comprehensive sports facilities, smart classrooms, and a dedicated yoga room.`;
        newSuggestions = ["Sports", "Transport"];
      } else if (lowerInput.includes('transport') || lowerInput.includes('bus')) {
        botResponse = 'Yes, the school operates a fleet of buses covering major routes in and around Mayiladuthurai. Please contact the office for routes and fees.';
        newSuggestions = ["Address", "Contact"];
      } else if (lowerInput.includes('curriculum') || lowerInput.includes('stream') || lowerInput.includes('group') || lowerInput.includes('11') || lowerInput.includes('12') || lowerInput.includes('10')) {
        botResponse = 'For Higher Secondary (11 & 12), we offer: Science with Maths (Physics, Chemistry, Maths, Comp Sci), Science with Biology (Physics, Chemistry, Biology, Zoology), and Commerce (Accountancy, Commerce, Economics, Business Maths/Comp App).';
        newSuggestions = ["Admissions", "Fees", "Achievements"];
      } else if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
        botResponse = 'Hello! How can I assist you today?';
        newSuggestions = ["Admissions", "11th Curriculum", "Facilities", "Sports", "Contact"];
      } else {
        botResponse = `I'm sorry, I don't have the answer to that. Please reach out to us directly at ${schoolInfo.contact.phone[0]} or ${schoolInfo.contact.email}.`;
        newSuggestions = ["Admissions", "Facilities", "Contact"];
      }

      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
      setCurrentSuggestions(newSuggestions);
    }, 500);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-40 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100"
            style={{ maxHeight: '600px', height: '80vh' }}
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot size={24} />
                <h3 className="font-semibold text-lg">School Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50 flex flex-col space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl flex items-start space-x-2 ${
                      msg.isUser
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                    }`}
                  >
                    {!msg.isUser && <Bot size={16} className="mt-1 flex-shrink-0 text-blue-600" />}
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                    {msg.isUser && <User size={16} className="mt-1 flex-shrink-0 text-blue-200" />}
                  </div>
                </div>
              ))}
              
              {/* Suggestions */}
              {currentSuggestions.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {currentSuggestions.map((sugg, idx) => (
                    <button
                      key={idx}
                      onClick={() => processMessage(sugg)}
                      className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
                    >
                      {sugg}
                    </button>
                  ))}
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form onSubmit={handleSend} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
