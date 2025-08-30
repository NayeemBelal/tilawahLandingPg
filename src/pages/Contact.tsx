import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import recitingPpl from "@/assets/recitingPpl.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = "service_bsvzw06"; // Replace with your EmailJS service ID
      const templateId = "template_i0c19q7"; // Replace with your EmailJS template ID
      const publicKey = "8W9hBpF3VBPIBHNyH"; // Replace with your EmailJS public key

      const templateParams = {
        from_email: email,
        message: message,
        to_email: "your-email@example.com", // Replace with your email
        website: "Tilawah",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Email sending failed:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="min-h-screen pt-20 md:pt-24 px-4 sm:px-0 relative">
        {/* Gradient overlay - only visible on desktop */}
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-foreground/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Accent gradient effect - visible on all screens */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12 pt-8"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-[#1D2E28] mb-4 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-[#1D2E28]/70 max-w-xl mx-auto">
              Have feedback, questions, or need help? We'd love to hear from you.
            </p>
          </motion.div>

          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-primary/10 border border-primary/30 rounded-2xl text-center"
            >
              <div className="text-primary text-lg font-semibold mb-2">
                ✅ Message Sent Successfully!
              </div>
              <p className="text-foreground/70">
                Thank you for your message. We'll get back to you soon!
              </p>
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-2xl text-center"
            >
              <div className="text-red-500 text-lg font-semibold mb-2">
                ❌ Error
              </div>
              <p className="text-foreground/70">{error}</p>
            </motion.div>
          )}

          {/* Contact Form */}
          {!isSubmitted && (
            <>
              {/* Email Input */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-4 mb-8"
              >
              <div>
                <label htmlFor="email" className="block text-foreground text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-transparent border border-[#1D2E28]/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-[#1D2E28] transition-colors duration-200 disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-foreground text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-transparent border border-[#1D2E28]/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-[#1D2E28] transition-colors duration-200 resize-none disabled:opacity-50"
                  placeholder="Questions about Tilawah, feedback, anything..."
                />
              </div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                style={{ willChange: "transform, opacity" }}
              >
                <Button
                  type="submit"
                  variant="pattrn"
                  size="default"
                  disabled={isSubmitting}
                  className="w-full rounded-full h-12 px-8 text-base font-semibold shadow-2xl shadow-primary/20 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </motion.form>
            </>
          )}

          {/* App Mockup Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center overflow-hidden -mx-4 sm:mx-0"
            style={{ willChange: "transform, opacity" }}
          >
            <img
              src={recitingPpl}
              alt="People reciting Quran together"
              className="h-auto max-h-[600px] sm:max-h-[400px] object-contain w-auto scale-110 sm:scale-100"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 