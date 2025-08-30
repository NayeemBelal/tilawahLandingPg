import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import recitingPpl from "@/assets/recitingPpl.png";
import colorWashBackground from "@/assets/colorWashBackground.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen pt-28 md:pt-32 px-0 relative"
      style={{
        backgroundImage: `url(${colorWashBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Semi-transparent overlay to make background more subtle */}
      <div className="absolute inset-0 bg-background/40 pointer-events-none"></div>

      {/* Subtle gradient overlay */}
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-foreground/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Subtle accent effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-2xl pointer-events-none"></div>

      <div className="text-center px-4 sm:px-0 relative z-10">
        {/* Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 border-2 border-foreground/30 rounded-full px-4 py-2 mb-8 bg-foreground/10"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="text-foreground text-sm font-medium">
            📖 Join the Quran community
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-4xl md:text-6xl font-heading text-foreground mb-4 md:mb-6 leading-tight"
          style={{ willChange: "transform, opacity" }}
        >
          Your Quran Recitation
          <br />
          <span className="text-foreground font-heading">Companion</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-base md:text-xl font-subheading text-foreground/90 mb-6 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ willChange: "transform, opacity" }}
        >
          Connect with Quran partners, perfect your recitation, and build consistency 
          in your journey with the Book of Allah. Whether you're a Hafidh or a learner, 
          Tilawah brings you the accountability and support you need.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-0 px-8"
          style={{ willChange: "transform, opacity" }}
        >
          <Button
            variant="pattrn"
            size="default"
            className="rounded-full h-12 px-8 text-base font-semibold shadow-2xl shadow-foreground/20"
            onClick={() => {
              // TODO: Update with actual Tilawah app link
              window.open('#', '_blank');
            }}
          >
            Join the Waitlist
          </Button>
          <p className="text-foreground/80 text-sm mt-4">
            Be among the first to experience Tilawah
          </p>
        </motion.div>

        {/* App Mockup Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
  );
};

export default HeroSection;
