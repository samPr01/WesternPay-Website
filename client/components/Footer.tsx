import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function Footer() {
  const navigation = {
    company: [
      { name: "About Us", href: "/about-page" },
      { name: "FAQs", href: "/faqs-page" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Refunds & Cancellation", href: "/refunds-cancellation" },
    ],
  };

  return (
    <footer className="bg-brand-navy" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-brand-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-white">WesternPay</span>
            </div>
            <p className="text-sm leading-6 text-primary-200 max-w-md">
              Empowering Modern India & Beyond with instant money transfer, bill payments, 
              mobile & DTH recharge, fintech APIs, smart analytics, and global payment integration.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">
              Company
            </h3>
            <ul role="list" className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm leading-6 text-primary-200 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">
              Address
            </h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 text-primary-200 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm leading-6 text-primary-200">
                  213, Diamond Trading Centre
                  <br />
                  New Palasia, Indore 474001 (MP) India
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-800 pt-6">
          <p className="text-xs leading-5 text-primary-200">
            &copy; 2024 WesternPay, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
