import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Mic, Send, Smile, Phone, Video, EllipsisVertical } from "lucide-react";

const socket = io("http://localhost:5000"); // Connect to your backend

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);

  // Initialize MediaRecorder
  useEffect(() => {
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        setRecorder(mediaRecorder);
      });
    }
  }, []);

  // Handle text message sending
  const sendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      type: "text",
      content: inputText,
      sender: "me",
      timestamp: new Date(),
    };

    socket.emit("send_message", newMessage); // Emit message to backend
    setMessages([...messages, newMessage]); // Update local state
    setInputText("");
  };

  // Handle voice recording
  const startRecording = () => {
    if (!recorder) return;
    setIsRecording(true);
    recorder.start();
  };

  const stopRecording = () => {
    if (!recorder) return;
    setIsRecording(false);
    recorder.stop();

    recorder.ondataavailable = (e) => {
      const audioBlob = e.data;
      const audioUrl = URL.createObjectURL(audioBlob);

      const newMessage = {
        type: "audio",
        content: audioUrl,
        sender: "me",
        timestamp: new Date(),
      };

      socket.emit("send_message", newMessage); // Emit audio to backend
      setMessages([...messages, newMessage]);
    };
  };

  // Listen for incoming messages
  useEffect(() => {
    socket.on("receive_message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => socket.off("receive_message");
  }, []);

  return (
    <div className="w-[95vw] md:w-[90vw] m-auto rounded-lg h-screen flex flex-col bg-white p-2">
      {/* Chat Header */}
      <div className="h-16 flex items-center px-4 border-b pb-2 justify-between ">
        <div>
          <h2 className="font-semibold text-lg">Ola</h2>
          <p className="font-thin text-sm">Online -last seen, 2.02pm</p>
        </div>
        <div className="flex gap-7 text-blue-950">
          <Phone />
          <Video />
          <EllipsisVertical />
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                msg.sender === "me" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {msg.type === "text" && msg.content}
              {msg.type === "audio" && (
                <audio controls src={msg.content} className="mt-2" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="h-16 bg-white flex items-center fixed bottom-0 gap-2  border-t w-[85vw]">
        <button className=" text-gray-500 hover:text-blue-500">
          <Smile size={24} />
        </button>
        <input
          type="text"
          className="flex-1 mx-4 px-4 py-2 border rounded-full focus:outline-none"
          placeholder="Type a message"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        {!isRecording ? (
          <button
            className=" text-gray-500 hover:text-red-500"
            onClick={startRecording}
          >
            <Mic size={24} />
          </button>
        ) : (
          <button
            className=" text-gray-500 hover:text-green-500"
            onClick={stopRecording}
          >
            Stop
          </button>
        )}
        <button
          className=" text-gray-500 hover:text-blue-500"
          onClick={sendMessage}
        >
          <Send size={24} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
