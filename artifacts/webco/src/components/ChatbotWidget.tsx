import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, ChevronDown, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ChatMessage,
  QuickReply,
  getBotResponse,
  getWelcomeMessage,
  generateId,
} from "@/lib/chatbot";

// ─── Markdown-like renderer (bold + newlines only) ────────────────────────────
function renderText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, li) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={li}>
        {parts.map((part, pi) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={pi}>{part.slice(2, -2)}</strong>;
          }
          return <span key={pi}>{part}</span>;
        })}
        {li < lines.length - 1 && <br />}
      </span>
    );
  });
}

// ─── Typing indicator ─────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-3">
      <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="bg-white/10 dark:bg-white/10 light:bg-gray-100 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-blue-400"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Single message bubble ────────────────────────────────────────────────────
function MessageBubble({
  message,
  onQuickReply,
}: {
  message: ChatMessage;
  onQuickReply: (value: string) => void;
}) {
  const isBot = message.role === "bot";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn("flex items-end gap-2 mb-3", !isBot && "flex-row-reverse")}
    >
      {/* Avatar */}
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mb-0.5">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}

      <div className={cn("flex flex-col gap-2 max-w-[85%]", !isBot && "items-end")}>
        {/* Bubble */}
        <div
          className={cn(
            "px-4 py-2.5 text-sm leading-relaxed rounded-2xl",
            isBot
              ? "bg-white/10 border border-white/10 text-gray-100 rounded-bl-sm"
              : "bg-blue-600 text-white rounded-br-sm"
          )}
        >
          {renderText(message.text)}
        </div>

        {/* Quick replies */}
        {isBot && message.quickReplies && message.quickReplies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-0.5">
            {message.quickReplies.map((qr: QuickReply) => (
              <button
                key={qr.value}
                onClick={() => onQuickReply(qr.value)}
                className="text-xs px-3 py-1.5 rounded-full border border-blue-500/50 text-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-150"
              >
                {qr.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─── Main widget ──────────────────────────────────────────────────────────────
export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const [hasOpened, setHasOpened] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  // Show welcome message on first open
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setIsMinimized(false);
    setUnread(0);
    if (!hasOpened) {
      setHasOpened(true);
      setMessages([getWelcomeMessage()]);
    }
  }, [hasOpened]);

  // Proactive nudge after 8 seconds if user hasn't opened
  useEffect(() => {
    if (hasOpened) return;
    const timer = setTimeout(() => {
      setUnread(1);
    }, 8000);
    return () => clearTimeout(timer);
  }, [hasOpened]);

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      const userMsg: ChatMessage = {
        id: generateId(),
        role: "user",
        text: trimmed,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      // Simulate bot "thinking" with a short delay
      const delay = 600 + Math.random() * 600;
      setTimeout(() => {
        const { text: responseText, quickReplies } = getBotResponse(trimmed);
        const botMsg: ChatMessage = {
          id: generateId(),
          role: "bot",
          text: responseText,
          timestamp: new Date(),
          quickReplies,
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, delay);
    },
    [isTyping]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickReply = useCallback(
    (value: string) => {
      sendMessage(value);
    },
    [sendMessage]
  );

  return (
    <>
      {/* ── Floating toggle button ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
          {!isOpen && unread > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              className="bg-gray-900 border border-white/10 text-white text-sm px-4 py-2.5 rounded-2xl rounded-br-sm shadow-xl max-w-[200px] text-right"
            >
              <p className="font-medium text-xs text-blue-400 mb-0.5">Webco Assistant</p>
              <p className="text-xs text-gray-300">Have questions? I can help!</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={isOpen ? () => setIsOpen(false) : handleOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl shadow-blue-900/40 flex items-center justify-center transition-colors"
          aria-label="Open chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageSquare className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Unread badge */}
          <AnimatePresence>
            {!isOpen && unread > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
              >
                {unread}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={
              isMinimized
                ? { opacity: 1, y: 0, scale: 1, height: "auto" }
                : { opacity: 1, y: 0, scale: 1 }
            }
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 flex flex-col"
            style={{ maxHeight: isMinimized ? undefined : "520px" }}
          >
            {/* Header */}
            <div className="bg-gray-950/95 backdrop-blur-sm px-4 py-3 flex items-center gap-3 border-b border-white/10 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm leading-tight">Webco Assistant</p>
                <p className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Online — typically replies instantly
                </p>
              </div>
              <button
                onClick={() => setIsMinimized((v) => !v)}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded"
                aria-label={isMinimized ? "Expand" : "Minimize"}
              >
                {isMinimized ? (
                  <ChevronDown className="w-4 h-4 rotate-180" />
                ) : (
                  <Minimize2 className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Body */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="flex flex-col overflow-hidden flex-1"
                  style={{ minHeight: 0 }}
                >
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 bg-gray-950/95 backdrop-blur-sm space-y-0 scroll-smooth" style={{ minHeight: 300, maxHeight: 380 }}>
                    {messages.map((msg) => (
                      <MessageBubble
                        key={msg.id}
                        message={msg}
                        onQuickReply={handleQuickReply}
                      />
                    ))}
                    {isTyping && <TypingIndicator />}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <form
                    onSubmit={handleSubmit}
                    className="flex items-center gap-2 px-3 py-3 bg-gray-950/95 border-t border-white/10 flex-shrink-0"
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask anything about Webco..."
                      disabled={isTyping}
                      className="flex-1 bg-white/10 text-white placeholder:text-gray-500 text-sm px-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500/60 focus:bg-white/15 transition-all disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isTyping}
                      className="w-9 h-9 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                      aria-label="Send"
                    >
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </form>

                  {/* Footer branding */}
                  <div className="bg-gray-950/95 px-4 py-2 text-center border-t border-white/5">
                    <p className="text-gray-600 text-xs">
                      Powered by{" "}
                      <span className="text-blue-500 font-medium">Webco AI</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
