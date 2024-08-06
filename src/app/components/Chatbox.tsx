// ChatBox.tsx
import React, { useState, useEffect, useRef } from "react";
import socket from "../lib/socket";
import { mockData } from "../data/mockData";

interface ChatBoxProps {
  userId: number;
}

const ChatBox: React.FC<ChatBoxProps> = ({ userId }) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const user = mockData.users.find((user) => user.id === userId);
    if (user) {
      setMessages(user.chats);
      scrollToBottom();
    }

    socket.on("message", (msg: string) => {
      mockData.addMessage(userId, "Other User", msg); // Assuming messages from the socket are from another user
      setMessages([
        ...mockData.users.find((user) => user.id === userId)!.chats,
      ]);
      scrollToBottom();
    });

    return () => {
      socket.off("message");
    };
  }, [userId]);

  const sendMessage = () => {
    if (message) {
      mockData.addMessage(userId, "You", message);
      setMessages([
        ...mockData.users.find((user) => user.id === userId)!.chats,
      ]);
      socket.emit("message", message);
      setMessage("");
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const user = mockData.users.find((user) => user.id === userId);
  if (!user) return null;

  return (
    <div className="flex flex-col h-full">
      <div className="min-h-[6vh] text-[0.85rem] font-medium border-b-2 border-neutral-100">
        <div className="m-3 my-4">{user.name}</div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((chat, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl ${
                chat.sender === "You" ? "bg-blue-100" : "bg-gray-100"
              }`}
            >
              <p>{chat.message}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 border-t flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          
          className="border p-2 flex-1"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white p-2 ml-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
