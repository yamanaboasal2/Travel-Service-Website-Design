import { Link } from "react-router";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
// import logo from "../asset/1f3ae537638b8a42ec68e9ae4a77c883be930ed3.png";
import logo from "../../assets/logo.png";

export function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#2C4A7C] via-[#1e3255] to-[#0f1e3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Rainbow Travel & Tourism" className="h-14 w-14" />
              <div>
                <div className="font-bold text-xl">Rainbow Travel</div>
                <div className="text-sm text-[#F5A623]">& Tourism</div>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Your trusted travel partner in Nablus, providing complete travel
              solutions and memorable experiences around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-[#F5A623] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  Nablus City Center, Second Floor
                  <br />
                  Nablus, Palestine
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:0597441666"
                  className="text-white/80 hover:text-[#F5A623] transition-colors"
                >
                  0597441666
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-white/80">info@rainbowtravel.ps</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/RainbowTours"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#F5A623] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/Rinbowtours93"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#F5A623] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/RainbowTours"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#F5A623] flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-sm text-white/80">@RainbowTours</p>
              <p className="text-sm text-white/80">@Rinbowtours93</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Rainbow Travel & Tourism. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}