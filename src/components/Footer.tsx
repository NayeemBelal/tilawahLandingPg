import appIcon from "@/assets/AppIcon.png";
import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
  { to: "/delete-account", label: "Delete Account" },
];

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
        
        {/* Policy & page links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-background/70 text-sm hover:text-background underline-offset-4 hover:underline transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-background/60 text-sm">
          © 2025 Tilawah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 