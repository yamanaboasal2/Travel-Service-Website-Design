import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Search, Languages } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// import logo from "figma:asset/1f3ae537638b8a42ec68e9ae4a77c883be930ed3.png";
import logo from "../../assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality can be implemented here
    console.log("Search for:", searchQuery);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
    // Here you can add logic to actually change the language
    console.log("Language changed to:", language === "en" ? "ar" : "en");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Rainbow Travel & Tourism" className="h-16 w-16" />
            <div>
              <div className="font-bold text-xl text-[#2C4A7C]">
                Rainbow Travel
              </div>
              <div className="text-xs text-[#F5A623]">& Tourism</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-[#F5A623] font-semibold"
                    : "text-gray-700 hover:text-[#F5A623]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search and Auth */}
          <div className="hidden lg:flex items-center gap-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-56 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>
            
            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="rounded-full border-2 border-[#2C4A7C] text-[#2C4A7C] hover:bg-blue-50 gap-2"
            >
              <Languages className="w-4 h-4" />
              <span className="font-semibold">{language === "en" ? "AR" : "EN"}</span>
            </Button>

            <Link to="/auth">
              <Button className="rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] hover:from-[#1e3255] hover:to-[#e09515]">
                Login / Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 ${
                  isActive(link.path)
                    ? "text-[#F5A623] font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/auth" onClick={() => setIsOpen(false)}>
              <Button className="w-full rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623]">
                Login / Sign Up
              </Button>
            </Link>
            
            {/* Mobile Language Switcher */}
            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="w-full rounded-full border-2 border-[#2C4A7C] text-[#2C4A7C] hover:bg-blue-50 gap-2"
            >
              <Languages className="w-4 h-4" />
              <span className="font-semibold">{language === "en" ? "العربية" : "English"}</span>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}