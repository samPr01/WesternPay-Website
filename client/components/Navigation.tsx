import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "#home", route: "/" },
    { name: "Services", href: "#services", route: "/" },
    { name: "About", href: "#about", route: "/" },
    { name: "Features", href: "#features", route: "/" },
  ];

  const handleNavigation = (href: string, route: string) => {
    // Clean the href to ensure it's a valid selector
    const cleanHref = href.split("?")[0].split("&")[0];

    if (location.pathname === route && cleanHref.startsWith("#")) {
      // If we're on the home page, use smooth scroll
      const element = document.querySelector(cleanHref);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home page with the hash
      navigate(route + cleanHref);
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary-100">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-brand-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-brand-navy">
                WesternPay
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href, item.route)}
                className="text-brand-gray hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              to="/login"
              className="text-primary-600 hover:text-primary-700 transition-colors duration-200 font-medium border border-primary-600 px-4 py-2 rounded-lg"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200 font-medium px-4 py-2 rounded-lg"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              className="text-brand-gray"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.route)}
                  className="block w-full text-left px-3 py-2 text-brand-gray hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Link
                  to="/login"
                  className="block w-full text-left text-primary-600 hover:text-primary-700 transition-colors duration-200 font-medium border border-primary-600 px-4 py-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200 font-medium px-4 py-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
