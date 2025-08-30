import appIcon from "@/assets/AppIcon.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 px-4">
      <div className="container mx-auto text-center">
        {/* App Icon */}
        <div className="flex justify-center mb-6">
          <img
            src={appIcon}
            alt="Tilawah App Icon"
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-lg"
          />
        </div>
        
        {/* Tagline */}
        <h3 className="text-3xl md:text-4xl font-bold text-background mb-8">
          Connect. Recite. Excel.
        </h3>
        
        {/* Description */}
        <p className="text-background/70 text-lg mb-6 max-w-2xl mx-auto">
          Your all-in-one companion for building consistency and excellence in Quran recitation.
        </p>
        
        {/* Copyright */}
        <p className="text-background/60 text-sm">
          © 2025 Tilawah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 