import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSearch } from "../contexts/SearchContext";
import { useLanguage } from "../contexts/LanguageContext";
// import logo from "figma:asset/1f3ae537638b8a42ec68e9ae4a77c883be930ed3.png";
import logo from "../../assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery, isSearching, filteredDestinations, filteredServices, filteredOffers } = useSearch();
  const { isRTL, t, toggleLanguage, language } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: t('home'), path: "/" },
    { name: t('aboutUs'), path: "/about" },
    { name: t('services'), path: "/services" },
    { name: t('offers'), path: "/offers" },
    { name: t('contact'), path: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to search results page or show results in current page
    if (searchQuery.trim()) {
      // For now, navigate to offers page which has filtering
      navigate('/offers');
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt={t('Rainbow Travel & Tourism')} className="h-16 w-16" />
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
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="pl-10 pr-10 py-2 w-64 rounded-full"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>

            <Link to="/auth">
              <Button className="rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] hover:from-[#1e3255] hover:to-[#e09515]">
                {t('loginSignup')}
              </Button>
            </Link>

            <Button
              onClick={toggleLanguage}
              className="rounded-full border-2 border-[#2C4A7C] text-[#2C4A7C] hover:bg-[#2C4A7C] hover:text-white transition-colors px-4 py-2"
            >
              {language === 'ar' ? 'EN' : 'عر'}
            </Button>
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
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="pl-10 pr-10 py-2 w-full rounded-full"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
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
                {t('loginSignup')}
              </Button>
            </Link>

            <Button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="w-full rounded-full border-2 border-[#2C4A7C] text-[#2C4A7C] hover:bg-[#2C4A7C] hover:text-white transition-colors"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}