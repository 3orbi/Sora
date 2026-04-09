import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import MiniPlayer from "../components/MiniPlayer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Video, Settings, Smile, Mic, Send, Plus, FileText, Download } from "lucide-react";

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  type?: "file";
  fileName?: string;
  fileSize?: string;
}

const initialContacts = [
  { id: 1, name: "Elena Rossi", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop", online: true },
  { id: 2, name: "Lewis Ofman", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop", online: false },
  { id: 3, name: "Nova Beats", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop", online: true },
  { id: 4, name: "Marcus Thorne", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=48&h=48&fit=crop", online: false },
];

const initialMessages: Record<number, Message[]> = {
  1: [
    { id: 1, sender: "them", text: "Hey! I just finished mastering the new track. It sounds amazing 🎵", time: "10:24 AM" },
    { id: 2, sender: "me-blue", text: "Can't wait to hear it! Is it ready for the vault?", time: "10:26 AM" },
    { id: 3, sender: "them", text: "Almost! Just need to do a final check on the low-end frequencies.", time: "10:28 AM" },
    { id: 4, sender: "me-pink", text: "Perfect. Let's schedule the release for Friday then ✨", time: "10:30 AM" },
    { id: 5, sender: "them", type: "file", fileName: "Track_Master_Final_v3.wav", fileSize: "48.2 MB", text: "Here's the file!", time: "10:32 AM" },
    { id: 6, sender: "them", text: "Sending the master file now!", time: "10:33 AM" },
  ],
  2: [
    { id: 1, sender: "them", text: "Let's collab on the next track", time: "Yesterday" },
    { id: 2, sender: "me-blue", text: "I'm down! What vibe are you going for?", time: "Yesterday" },
  ],
  3: [
    { id: 1, sender: "them", text: "The mix sounds incredible! 🔥", time: "3h ago" },
  ],
  4: [
    { id: 1, sender: "them", text: "Check out this new sample pack", time: "1d ago" },
    { id: 2, sender: "me-blue", text: "Thanks! I'll check it out tonight", time: "1d ago" },
  ],
};

const Messaging = () => {
  const [selectedContact, setSelectedContact] = useState(0);
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [allMessages, setAllMessages] = useState(initialMessages);
  const [recording, setRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const filteredContacts = initialContacts.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentContactId = filteredContacts[selectedContact]?.id || 1;
  const currentMessages = allMessages[currentContactId] || [];
  const currentContact = filteredContacts[selectedContact] || initialContacts[0];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessages.length]);

  const getLastMessage = (contactId: number) => {
    const msgs = allMessages[contactId];
    return msgs?.[msgs.length - 1]?.text || "No messages yet";
  };

  const getLastTime = (contactId: number) => {
    const msgs = allMessages[contactId];
    return msgs?.[msgs.length - 1]?.time || "";
  };

  const sendMessage = () => {
    if (!messageInput.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    const newMsg: Message = {
      id: Date.now(),
      sender: "me-blue",
      text: messageInput.trim(),
      time,
    };
    setAllMessages((prev) => ({
      ...prev,
      [currentContactId]: [...(prev[currentContactId] || []), newMsg],
    }));
    setMessageInput("");

    // Simulate auto-reply after 1.5s
    setTimeout(() => {
      const replies = ["Got it! 👍", "Sounds great!", "Let me check that out", "Perfect, thanks!", "On it 🎵"];
      const reply: Message = {
        id: Date.now() + 1,
        sender: "them",
        text: replies[Math.floor(Math.random() * replies.length)],
        time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
      };
      setAllMessages((prev) => ({
        ...prev,
        [currentContactId]: [...(prev[currentContactId] || []), reply],
      }));
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleDownload = (fileName: string) => {
    alert(`Downloading "${fileName}"... (demo)`);
  };

  return (
    <div className="bg-background min-h-screen pb-24">
      <Navbar />

      <div className="max-w-[1280px] mx-auto px-8 pt-24 pb-8">
        <div className="flex gap-6 h-[calc(100vh-130px)]">
          {/* Left Panel - Contacts */}
          <div className="w-[360px] flex-shrink-0 flex flex-col p-6 bg-surface-secondary rounded-4xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-slate-sub">Messages</h2>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 rounded-full hover:bg-rose-50"
                onClick={() => alert("New conversation (demo)")}
              >
                <Plus size={18} className="text-slate-sub" />
              </Button>
            </div>

            <div className="relative mb-5">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted" />
              <Input
                placeholder="Search creators..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setSelectedContact(0); }}
                className="pl-10 bg-surface-quaternary border-0 rounded-full h-11 text-sm placeholder:text-slate-placeholder focus-visible:ring-rose-500"
              />
            </div>

            <ScrollArea className="flex-1">
              <div className="flex flex-col gap-2">
                {filteredContacts.map((contact, i) => (
                  <div
                    key={contact.id}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all hover:opacity-80 rounded-5xl ${
                      selectedContact === i ? "bg-white" : ""
                    }`}
                    onClick={() => setSelectedContact(i)}
                  >
                    <div className="relative flex-shrink-0">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={contact.avatar} />
                        <AvatarFallback className="bg-surface-tertiary text-slate-muted">{contact.name[0]}</AvatarFallback>
                      </Avatar>
                      {contact.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-rose-500 border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-heading">{contact.name}</span>
                        <span className="text-[10px] text-slate-muted">{getLastTime(contact.id)}</span>
                      </div>
                      <p className={`text-xs truncate ${selectedContact === i ? "text-rose-500" : "text-slate-muted"}`}>
                        {getLastMessage(contact.id)}
                      </p>
                    </div>
                  </div>
                ))}
                {filteredContacts.length === 0 && (
                  <p className="text-sm text-slate-muted text-center py-4">No contacts found</p>
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Right Panel - Chat */}
          <div className="flex-1 flex flex-col bg-white rounded-4xl">
            <div className="flex items-center justify-between px-8 py-5 border-b">
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={currentContact.avatar} />
                  <AvatarFallback>{currentContact.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-base font-bold text-slate-sub">{currentContact.name}</h3>
                  <Badge className="bg-transparent text-rose-500 hover:bg-transparent px-0 font-bold text-[10px] tracking-[1px] uppercase border-0">
                    {currentContact.online ? "ACTIVE NOW" : "OFFLINE"}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 rounded-full hover:bg-rose-50"
                  onClick={() => alert("Video call with " + currentContact.name + " (demo)")}
                >
                  <Video size={18} className="text-slate-sub" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 rounded-full hover:bg-rose-50"
                  onClick={() => alert("Chat settings (demo)")}
                >
                  <Settings size={18} className="text-slate-sub" />
                </Button>
              </div>
            </div>

            <ScrollArea className="flex-1 px-8 py-6">
              <div className="flex flex-col gap-4">
                <div className="flex justify-center my-4">
                  <Badge className="bg-rose-50 hover:bg-rose-50 text-slate-muted font-bold text-[10px] tracking-[2px] uppercase border-0 px-4 py-1.5">
                    TODAY
                  </Badge>
                </div>

                {currentMessages.map((msg) => {
                  const isMe = msg.sender.startsWith("me");
                  const isPink = msg.sender === "me-pink";

                  return (
                    <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                      <div className="max-w-[400px]">
                        {msg.type === "file" ? (
                          <div className="px-5 py-4" style={{ backgroundColor: "#F6F3F3", borderRadius: "32px 32px 32px 0px" }}>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-50">
                                <FileText size={18} className="text-rose-500" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-slate-heading">{msg.fileName}</p>
                                <p className="text-[10px] text-slate-muted">{msg.fileSize}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-8 h-8 rounded-full hover:bg-white"
                                onClick={() => handleDownload(msg.fileName!)}
                              >
                                <Download size={16} className="text-slate-sub" />
                              </Button>
                            </div>
                            <p className="mt-2 text-sm text-slate-body">{msg.text}</p>
                            <p className="mt-1 text-[9px] text-slate-muted">{msg.time}</p>
                          </div>
                        ) : (
                          <div
                            className="px-5 py-3"
                            style={{
                              backgroundColor: isMe ? (isPink ? "#A43073" : "#545F73") : "#F6F3F3",
                              borderRadius: isMe ? "32px 32px 0px 32px" : "32px 32px 32px 0px",
                            }}
                          >
                            <p className={`text-sm leading-[22px] ${isMe ? "text-white" : "text-slate-body"}`}>{msg.text}</p>
                            <p className={`mt-1 text-[9px] ${isMe ? (isPink ? "text-rose-100" : "text-[#BCC7DE]") : "text-slate-muted"}`}>{msg.time}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="px-8 py-5">
              <div className="flex items-center gap-3 px-5 py-2 bg-surface-secondary rounded-full">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`w-8 h-8 rounded-full ${recording ? "bg-rose-500 text-white" : "hover:bg-white text-slate-muted"}`}
                  onClick={() => { setRecording(!recording); if (!recording) setTimeout(() => setRecording(false), 3000); }}
                >
                  <Mic size={18} />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-0 text-sm text-slate-body placeholder:text-slate-placeholder focus-visible:ring-0 h-9"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 rounded-full hover:bg-white"
                  onClick={() => setMessageInput((prev) => prev + " 😊")}
                >
                  <Smile size={18} className="text-slate-muted" />
                </Button>
                <Button
                  size="icon"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/90"
                  onClick={sendMessage}
                >
                  <Send size={16} className="text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MiniPlayer />
    </div>
  );
};

export default Messaging;
