import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import appMockup from "@/assets/app-mockups.png";

const AndroidPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "fcaebbc6-cfb9-4556-87c1-d782257422e7",
          name: name,
          email: email,
          message: `Android Waitlist Request from ${name} (${email})`,
          subject: "New Android Waitlist Signup - Tilawah",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto text-center px-4">
          {/* Join Android Waitlist Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Join the Android Waitlist
            </h1>
            
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Tilawah is coming to Android soon! Be among the first to experience Quran excellence on your Android device.
            </p>
            
            {/* Waitlist Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-card border-border text-foreground placeholder:text-foreground/50 rounded-xl h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-card border-border text-foreground placeholder:text-foreground/50 rounded-xl h-12"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="pattrn"
                size="lg"
                className="w-full rounded-xl h-12 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join"}
              </Button>
              
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="text-primary text-sm text-center mt-4">
                  ✅ Successfully joined the Android waitlist! We'll notify you when it's ready.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-500 text-sm text-center mt-4">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>

                    {/* Mobile Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mb-8 md:mb-12 overflow-hidden -mx-4 sm:-mx-0 -mx-4"
            style={{ willChange: "transform, opacity" }}
          >
          <img
            src={appMockup}
            alt="Tilawah App Mockup"
            className="h-auto max-h-[900px] sm:max-h-[600px] object-contain w-auto scale-110 sm:scale-100"
          />
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AndroidPage; 