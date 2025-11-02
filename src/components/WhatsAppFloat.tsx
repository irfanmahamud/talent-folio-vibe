import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Replace with your actual WhatsApp number (with country code, no + or spaces)
  const phoneNumber = "8801234567890"; // Example: Bangladesh number
  const message = "Hello! I'm interested in your recruitment services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Main WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip/Message Box */}
        {isOpen && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-strong p-4 max-w-xs animate-slide-in-right">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Chat with us!</p>
                  <p className="text-xs text-muted-foreground">We're online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Have questions about our services? Start a conversation!
            </p>
            <Button
              size="sm"
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Chat
            </Button>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-strong hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-bounce-slow"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
          
          {/* Button Icon */}
          <MessageCircle className="h-6 w-6 text-white relative z-10 group-hover:scale-110 transition-transform" />
          
          {/* Online Indicator */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse"></span>
        </button>
      </div>
    </>
  );
};

export default WhatsAppFloat;
