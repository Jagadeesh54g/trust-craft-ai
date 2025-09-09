import { Navigation } from "@/components/Navigation";
import { MessagesList } from "@/components/MessagesList";
import { ChatWindow } from "@/components/ChatWindow";
import { useState } from "react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-120px)]">
          {/* Messages List */}
          <div className="lg:col-span-1">
            <MessagesList onSelectChat={setSelectedChat} selectedChat={selectedChat} />
          </div>
          
          {/* Chat Window */}
          <div className="lg:col-span-2">
            <ChatWindow chatId={selectedChat} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;