import { useState } from "react";
import Navbar from "../components/Navbar";
import { Search, Video, Settings, Smile, Mic, Send, Plus, FileText, Download } from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Elena Rossi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop",
    lastMessage: "Sending the master file now!",
    time: "2m ago",
    active: true,
    online: true,
  },
  {
    id: 2,
    name: "Lewis Ofman",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop",
    lastMessage: "Let's collab on the next track",
    time: "1h ago",
    active: false,
    online: false,
  },
  {
    id: 3,
    name: "Nova Beats",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop",
    lastMessage: "The mix sounds incredible!",
    time: "3h ago",
    active: false,
    online: true,
  },
  {
    id: 4,
    name: "Marcus Thorne",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=48&h=48&fit=crop",
    lastMessage: "Check out this new sample pack",
    time: "1d ago",
    active: false,
    online: false,
  },
];

const messages = [
  { id: 1, sender: "them", text: "Hey! I just finished mastering the new track. It sounds amazing 🎵", time: "10:24 AM" },
  { id: 2, sender: "me-blue", text: "Can't wait to hear it! Is it ready for the vault?", time: "10:26 AM" },
  { id: 3, sender: "them", text: "Almost! Just need to do a final check on the low-end frequencies. Should be done by tonight.", time: "10:28 AM" },
  { id: 4, sender: "me-pink", text: "Perfect. Let's schedule the release for Friday then ✨", time: "10:30 AM" },
  {
    id: 5,
    sender: "them",
    type: "file",
    fileName: "Track_Master_Final_v3.wav",
    fileSize: "48.2 MB",
    text: "Here's the file!",
    time: "10:32 AM",
  },
  { id: 6, sender: "them", text: "Sending the master file now!", time: "10:33 AM" },
];

const Messaging = () => {
  const [selectedContact, setSelectedContact] = useState(0);

  return (
    <div style={{ backgroundColor: "#FCF9F9", minHeight: "100vh" }}>
      <Navbar />

      <div className="max-w-[1280px] mx-auto px-8 pt-24 pb-8">
        <div className="flex gap-6 h-[calc(100vh-130px)]">
          {/* Left Panel - Contacts */}
          <div
            className="w-[360px] flex-shrink-0 flex flex-col p-6"
            style={{ backgroundColor: "#F6F3F3", borderRadius: 32 }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "#545F73" }}>
                Messages
              </h2>
              <button className="hover:opacity-70 transition-opacity">
                <Plus size={18} color="#545F73" />
              </button>
            </div>

            {/* Search */}
            <div
              className="flex items-center gap-3 px-5 py-3 mb-5"
              style={{ backgroundColor: "#E4E2E2", borderRadius: 9999 }}
            >
              <Search size={16} color="#7F7575" />
              <span style={{ fontSize: 14, color: "#D0C4C4" }}>
                Search creators...
              </span>
            </div>

            {/* Contact List */}
            <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
              {contacts.map((contact, i) => (
                <div
                  key={contact.id}
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer transition-all hover:opacity-80"
                  style={{
                    backgroundColor: selectedContact === i ? "#FFFFFF" : "transparent",
                    borderRadius: selectedContact === i ? 48 : 48,
                  }}
                  onClick={() => setSelectedContact(i)}
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${contact.avatar})` }}
                    />
                    {contact.online && (
                      <div
                        className="absolute bottom-0 right-0 w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: "#A43073",
                          border: "2px solid #FFFFFF",
                        }}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#1B1B1C" }}>
                        {contact.name}
                      </span>
                      <span style={{ fontSize: 10, color: "#7F7575" }}>
                        {contact.time}
                      </span>
                    </div>
                    <p
                      className="truncate"
                      style={{
                        fontSize: 12,
                        color: selectedContact === i ? "#A43073" : "#7F7575",
                      }}
                    >
                      {contact.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Chat */}
          <div
            className="flex-1 flex flex-col"
            style={{ backgroundColor: "#FFFFFF", borderRadius: 32 }}
          >
            {/* Chat Header */}
            <div
              className="flex items-center justify-between px-8 py-5"
              style={{ borderBottom: "1px solid rgba(208,196,196,0.3)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=40&h=40&fit=crop)",
                  }}
                />
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#545F73" }}>
                    RAYE
                  </h3>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#A43073",
                      textTransform: "uppercase",
                    }}
                  >
                    ARTIST · ACTIVE NOW
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="hover:opacity-70 transition-opacity">
                  <Video size={18} color="#545F73" />
                </button>
                <button className="hover:opacity-70 transition-opacity">
                  <Settings size={18} color="#545F73" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-4">
              {/* Date separator */}
              <div className="flex justify-center my-4">
                <span
                  className="px-4 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "#FDF2F2",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 2,
                    color: "#7F7575",
                    textTransform: "uppercase",
                  }}
                >
                  TODAY
                </span>
              </div>

              {messages.map((msg) => {
                const isMe = msg.sender.startsWith("me");
                const isPink = msg.sender === "me-pink";

                return (
                  <div
                    key={msg.id}
                    className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                  >
                    <div className="max-w-[400px]">
                      {msg.type === "file" ? (
                        <div
                          className="px-5 py-4"
                          style={{
                            backgroundColor: "#F6F3F3",
                            borderRadius: "32px 32px 32px 0px",
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: "#FDF2F2" }}
                            >
                              <FileText size={18} color="#A43073" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p style={{ fontSize: 12, fontWeight: 600, color: "#1B1B1C" }}>
                                {msg.fileName}
                              </p>
                              <p style={{ fontSize: 10, color: "#7F7575" }}>
                                {msg.fileSize}
                              </p>
                            </div>
                            <button className="hover:opacity-70 transition-opacity">
                              <Download size={16} color="#545F73" />
                            </button>
                          </div>
                          <p className="mt-2" style={{ fontSize: 14, color: "#4D4545" }}>
                            {msg.text}
                          </p>
                          <p className="mt-1" style={{ fontSize: 9, color: "#7F7575" }}>
                            {msg.time}
                          </p>
                        </div>
                      ) : (
                        <div
                          className="px-5 py-3"
                          style={{
                            backgroundColor: isMe
                              ? isPink
                                ? "#A43073"
                                : "#545F73"
                              : "#F6F3F3",
                            borderRadius: isMe
                              ? "32px 32px 0px 32px"
                              : "32px 32px 32px 0px",
                          }}
                        >
                          <p
                            style={{
                              fontSize: 14,
                              color: isMe ? "#FFFFFF" : "#4D4545",
                              lineHeight: "22px",
                            }}
                          >
                            {msg.text}
                          </p>
                          <p
                            className="mt-1"
                            style={{
                              fontSize: 9,
                              color: isMe
                                ? isPink
                                  ? "#FFD8E7"
                                  : "#BCC7DE"
                                : "#7F7575",
                            }}
                          >
                            {msg.time}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input */}
            <div className="px-8 py-5">
              <div
                className="flex items-center gap-3 px-5 py-2"
                style={{
                  backgroundColor: "#F6F3F3",
                  borderRadius: 9999,
                }}
              >
                <button className="hover:opacity-70 transition-opacity">
                  <Mic size={18} color="#7F7575" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent outline-none"
                  style={{ fontSize: 14, color: "#4D4545" }}
                />
                <button className="hover:opacity-70 transition-opacity">
                  <Smile size={18} color="#7F7575" />
                </button>
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  style={{ backgroundColor: "#545F73" }}
                >
                  <Send size={16} color="#FFFFFF" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
