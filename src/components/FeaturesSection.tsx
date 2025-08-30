import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Target, Calendar, MessageCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-0 sm:px-4 pb-10 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-4 leading-tight max-w-3xl mx-auto">
            Everything You Need for Your Quran Journey
          </h2>
          <p className="text-lg font-subheading text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Discover the comprehensive tools and features that make Tilawah your perfect Quran companion
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Top Feature - Full Width */}
          <div className="mb-8">
            <div
              className="relative overflow-hidden border border-primary/30 rounded-3xl p-8 md:p-12 bg-foreground"
              style={{
                willChange: "transform",
                contain: "layout style paint",
                transform: "translateZ(0)",
              }}
            >
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-background/20 rounded-2xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-background" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-background">
                      Smart Buddy Matching System
                    </h3>
                  </div>
                  <p className="text-background/80 text-base leading-relaxed mb-4">
                    Find Quran partners who match your recitation style, pace, and schedule. 
                    Our AI-powered system connects you with the perfect companion for your journey.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Recitation Style",
                      "Pace Matching",
                      "Schedule Compatibility",
                      "Experience Level",
                      "Language Preference",
                    ].map((feature, index) => (
                      <span
                        key={index}
                        className="bg-background/20 text-background px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-80 h-64 bg-background rounded-2xl p-6 border border-primary/30">
                  <div className="h-full flex flex-col justify-center">
                    <div className="bg-background border border-primary/30 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-foreground font-bold">
                          🤝 Perfect Match
                        </span>
                        <span className="text-foreground text-sm">
                          95% Compatibility
                        </span>
                      </div>
                      <div className="text-foreground text-sm">
                        Same recitation style & schedule
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/60">Style:</span>
                        <span className="text-foreground">Hafs</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/60">Pace:</span>
                        <span className="text-foreground">Medium</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/60">Availability:</span>
                        <span className="text-foreground">Evenings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features - Three Columns */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Interactive Quran Feature */}
            <div
              className="relative overflow-hidden border border-primary/20 rounded-3xl p-6 bg-foreground"
              style={{
                willChange: "transform",
                contain: "layout style paint",
                transform: "translateZ(0)",
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-background/20 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-lg font-semibold text-background">
                    Interactive Quran
                  </h3>
                </div>
                <p className="text-background/80 leading-relaxed mb-4 text-sm">
                  Read from your digital mushaf with elegant word-by-word highlighting. 
                  Follow along with ease during recitation sessions.
                </p>
                <div className="bg-background/40 rounded-xl p-3 border border-background/20">
                  <div className="text-center text-background text-xs">
                    📖 Word-by-word highlighting
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Tracking Feature */}
            <div
              className="relative overflow-hidden border border-primary/20 rounded-3xl p-6 bg-foreground"
              style={{
                willChange: "transform",
                contain: "layout style paint",
                transform: "translateZ(0)",
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-background/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-lg font-semibold text-background">
                    Progress Support
                  </h3>
                </div>
                <p className="text-background/80 leading-relaxed mb-4 text-sm">
                  Track your memorization progress, improve tajweed, and build consistency 
                  with detailed analytics and feedback.
                </p>
                <div className="bg-background/40 rounded-xl p-3 border border-background/20">
                  <div className="text-center text-background text-xs">
                    📊 Detailed progress tracking
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduling Feature */}
            <div
              className="relative overflow-hidden border border-primary/20 rounded-3xl p-6 bg-foreground"
              style={{
                willChange: "transform",
                contain: "layout style paint",
                transform: "translateZ(0)",
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-background/20 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-lg font-semibold text-background">
                    Flexible Scheduling
                  </h3>
                </div>
                <p className="text-background/80 leading-relaxed mb-4 text-sm">
                  Set your preferred recitation times and be matched with partners 
                  who fit your schedule perfectly.
                </p>
                <div className="bg-background/40 rounded-xl p-3 border border-background/20">
                  <div className="text-center text-background text-xs">
                    ⏰ Smart time matching
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button
            variant="pattrn"
            size="default"
            className="rounded-full h-12 px-8 text-base font-semibold shadow-2xl shadow-primary/20"
            onClick={() => {
              // Link to Tilawah app on App Store
              window.open('https://apps.apple.com/us/app/tilawah/id6749555708', '_blank');
            }}
          >
             Join Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
