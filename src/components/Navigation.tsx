import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
    // Force scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    let ticking = false;

    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [handleScroll]);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`transition-all duration-300 ${
          scrolled
            ? "shadow-lg bg-[#1D2E28]"
            : "bg-[#1D2E28]"
        }`}
        style={{
          borderRadius: "50px",
          border: "1px solid rgba(29, 46, 40, 0.3)",
          willChange: "transform, opacity",
        }}
      >
        <div className="px-4 py-2 md:px-6 md:py-3">
          <div className="flex items-center justify-between gap-4 md:gap-8">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2"
              onClick={() => {
                // Force scroll to top when navigating to home
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 100);
              }}
            >
              <img
                src="/src/assets/AppIcon2.png"
                alt="Tilawah"
                className="w-8 h-8 md:w-11 md:h-11"
              />
              <span className="text-white font-bold text-base md:text-lg">
                Tilawah
              </span>
            </Link>

            {/* Mobile Contact Icon */}
            <button
              onClick={handleContactClick}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {location.pathname === "/" ? (
                <>
                  <a
                    href="#how-it-works"
                    className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                  >
                    How it Works
                  </a>
                  <a
                    href="#comparison"
                    className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                  >
                    Why Tilawah?
                  </a>
                  <a
                    href="#features"
                    className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                  >
                    Features
                  </a>
                  <button
                    onClick={handleContactClick}
                    className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                  >
                    Contact
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/#how-it-works"
                    className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo(0, 0);
                      }, 100);
                    }}
                  >
                    How it Works
                  </Link>
                  <Link
                    to="/#comparison"
                    className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo(0, 0);
                      }, 100);
                    }}
                  >
                    Why Tilawah?
                  </Link>
                  <Link
                    to="/#features"
                    className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo(0, 0);
                      }, 100);
                    }}
                  >
                    Features
                  </Link>
                  <button
                    onClick={handleContactClick}
                    className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                  >
                    Contact
                  </button>
                </>
              )}

            </div>

            {/* Download Button - Rule #3: First-Person Psychology */}
            <Button
              variant="pattrn"
              size="sm"
              className="rounded-full whitespace-nowrap bg-[#2A3F38] text-white hover:bg-[#3A4F48]"
              onClick={() => {
                // Link to Tilawah app on App Store
                window.open('https://apps.apple.com/us/app/tilawah/id6749555708', '_blank');
              }}
            >
              Start now!
            </Button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navigation;
