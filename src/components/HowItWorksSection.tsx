import { Users, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Users,
      title: "Find Your Partner",
      description:
        "Tell us about your recitation style, pace, and schedule. We'll match you with the perfect Quran companion.",
      color: "text-background",
    },
    {
      icon: BookOpen,
      title: "Start Reciting Together",
      description:
        "Join your matched partner in real-time recitation sessions. Read from your digital mushaf with word-by-word highlighting.",
      color: "text-background",
    },
    {
      icon: Target,
      title: "Improve & Progress",
      description:
        "Receive feedback, track your progress, and build consistency in your Quran journey with peer support.",
      color: "text-background",
    },
  ];

  return (
    <section id="how-it-works" className="pt-24 pb-0 px-0 sm:px-4 bg-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-background mb-6">
            How Tilawah Works
          </h2>
          <p className="text-lg font-subheading text-background/80 max-w-3xl mx-auto leading-relaxed">
            Get started with Tilawah in just three simple steps and begin your Quran journey with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                {/* Icon container */}
                <div className="w-20 h-20 mx-auto mb-6 bg-background/20 rounded-2xl flex items-center justify-center">
                  <IconComponent className={`w-10 h-10 ${step.color}`} />
                </div>

                <h3 className="text-xl font-semibold text-background mb-4">
                  {step.title}
                </h3>
                <p className="text-background/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 mb-16">
          <Button
            variant="pattrn"
            size="default"
            className="rounded-full h-12 px-8 text-base font-semibold"
            style={{
              backgroundColor: '#EDE8D0',
              color: '#1D2E28'
            }}
            onClick={() => {
              // TODO: Update with actual Tilawah app link
              window.open('#', '_blank');
            }}
          >
            Join the Waitlist
          </Button>
        </div>

        {/* Data Points Showcase */}
      </div>
    </section>
  );
};

export default HowItWorksSection;
