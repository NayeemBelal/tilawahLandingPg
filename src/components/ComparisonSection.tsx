import React from "react";
import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

const ComparisonSection = () => {
  return (
    <section id="comparison" className="pt-12 pb-24 px-0 sm:px-4 bg-background">
      <div className="container mx-auto">
        {/* Tagline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-6 leading-tight max-w-4xl mx-auto">
            Stop Struggling Alone in Your Quran Journey
          </h2>
          <p className="text-lg font-subheading text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            See the difference Tilawah makes in your Quran recitation and memorization journey
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* WITHOUT */}
          <div
            className="relative overflow-hidden rounded-[34px] p-6 md:p-8 bg-card ring-1 ring-red-500/35"
            style={{
              willChange: "transform",
              contain: "layout style paint",
              transform: "translateZ(0)",
            }}
          >
            {/* Optimized gradient overlay */}
            <div
              className="absolute inset-0 rounded-[34px] pointer-events-none"
              style={{
                background: `
                  linear-gradient(to right, rgba(239,68,68,0.15), rgba(239,68,68,0.08) 15%, transparent 30%, transparent 70%, rgba(239,68,68,0.08) 85%, rgba(239,68,68,0.15)),
                  linear-gradient(to bottom, rgba(239,68,68,0.12), rgba(239,68,68,0.06) 15%, transparent 30%, transparent 70%, rgba(239,68,68,0.06) 85%, rgba(239,68,68,0.12))
                `,
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            />
            {/* Inner border glow */}
            <div
              className="absolute inset-0 rounded-[34px] pointer-events-none"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(239,68,68,0.15)",
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-12">
                Without Tilawah
              </h3>

              <div className="space-y-6 md:space-y-10">
                <div className="flex items-start gap-5">
                  <X
                    className="w-7 h-7 text-red-500 flex-shrink-0 mt-1"
                    strokeWidth={3}
                  />
                  <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                    <strong className="text-red-500">Struggle alone</strong>{" "}
                    without accountability or peer support
                  </p>
                </div>

                <div className="flex items-start gap-5">
                  <X
                    className="w-7 h-7 text-red-500 flex-shrink-0 mt-1"
                    strokeWidth={3}
                  />
                  <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                    Miss mistakes and{" "}
                    <strong className="text-red-500">
                      develop bad habits
                    </strong>{" "}
                    in your recitation
                  </p>
                </div>

                <div className="flex items-start gap-5">
                  <X
                    className="w-7 h-7 text-red-500 flex-shrink-0 mt-1"
                    strokeWidth={3}
                  />
                  <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                    <strong className="text-red-500">Lose motivation</strong>{" "}
                    when there's no one to share your progress with
                  </p>
                </div>

                <div className="flex items-start gap-5">
                  <X
                    className="w-7 h-7 text-red-500 flex-shrink-0 mt-1"
                    strokeWidth={3}
                  />
                  <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                    Spend time{" "}
                    <strong className="text-red-500">searching for partners</strong>{" "}
                    instead of focusing on your recitation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WITH */}
          <div
            className="relative overflow-hidden rounded-[34px] p-6 md:p-8 bg-card ring-1 ring-primary/35"
            style={{
              willChange: "transform",
              contain: "layout style paint",
              transform: "translateZ(0)",
            }}
          >
            {/* Optimized gradient overlay */}
            <div
              className="absolute inset-0 rounded-[34px] pointer-events-none"
              style={{
                background: `
                  linear-gradient(to right, rgba(29, 46, 40, 0.15), rgba(29, 46, 40, 0.08) 15%, transparent 30%, transparent 70%, rgba(29, 46, 40, 0.08) 85%, rgba(29, 46, 40, 0.15)),
                  linear-gradient(to bottom, rgba(29, 46, 40, 0.12), rgba(29, 46, 40, 0.06) 15%, transparent 30%, transparent 70%, rgba(29, 46, 40, 0.06) 85%, rgba(29, 46, 40, 0.12))
                `,
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            />
            {/* Inner border glow */}
            <div
              className="absolute inset-0 rounded-[34px] pointer-events-none"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(29, 46, 40, 0.15)",
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-12">
                With Tilawah
              </h3>

              <div className="space-y-6 md:space-y-10">
                <div className="flex items-start gap-5">
                  <Check
                    className="w-7 h-7 text-primary flex-shrink-0 mt-1"
                    strokeWidth={3}
                  />
                  <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                    <strong className="text-primary">
                      Find perfect partners
                    </strong>{" "}
                    who match your style and schedule
                  </p>
                </div>

                <div className="flex items-start gap-5">
                  <Check
                    className="w-7 h-7 text-primary flex-shrink-0 mt-1"
                    strokeWidth={3}
                  />
                  <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                    Get{" "}
                    <strong className="text-primary">
                      instant feedback
                    </strong>{" "}
                    and catch mistakes in real-time
                  </p>
                </div>

                <div className="flex items-start gap-5">
                  <Check
                    className="w-7 h-7 text-primary flex-shrink-0 mt-1"
                    strokeWidth={3}
                  />
                  <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                    <strong className="text-primary">
                      Build consistency
                    </strong>{" "}
                    with scheduled recitation sessions
                  </p>
                </div>

                <div className="flex items-start gap-5">
                  <Check
                    className="w-7 h-7 text-primary flex-shrink-0 mt-1"
                    strokeWidth={3}
                  />
                  <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                    Track progress and{" "}
                    <strong className="text-primary">
                      improve your tajweed
                    </strong>{" "}
                    with detailed analytics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
