import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Star,
  Users,
  Utensils,
  Car,
  Compass,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useSearch } from "../contexts/SearchContext";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { getAllOffers } from "../services/apiService";

export function Offers() {
  const { filteredOffers, isSearching } = useSearch();
  const { t, flexDirection } = useLanguage();
  const [countryFilter, setCountryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mockOffers = [
    {
      id: "istanbul",
      title: "istanbulPackage",
      country: "turkey",
      location: "istanbul",
      price: 750,
      duration: "5 Days / 4 Nights",
      rating: 4.9,
      reviews: 127,
      image:
        "https://images.unsplash.com/photo-1587974136825-b150ee48f112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc3RhbmJ1bCUyMHR1cmtleSUyMGhhZ2lhJTIwc29waGlhfGVufDF8fHx8MTc3NDgwMjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      includes: [
        "hotelAccommodationBreakfast",
        "airportTransfers",
        "guidedToursHagiaSophia",
        "visitSultanAhmedMosque",
        "bosphorusCruiseTour",
        "professionalTourGuide",
      ],
      highlights: [
        "historicLandmarks",
        "culturalExperiences",
        "deliciousTurkishCuisine",
        "shoppingGrandBazaar",
      ],
    },
    {
      id: "aqaba",
      title: "aqabaBeachTrip",
      country: "jordan",
      location: "aqaba",
      price: 400,
      duration: "4 Days / 3 Nights",
      rating: 4.8,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1643884713348-f8cf6f435cd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcWFiYSUyMGpvcmRhbiUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc3NDgwMjcxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      includes: [
        "beachfrontHotelStay",
        "seaActivitiesSnorkeling",
        "internalTransportation",
        "optionalWadiRumTrip",
        "redSeaDiving",
        "beachEquipmentRental",
      ],
      highlights: [
        "crystalClearWaters",
        "coralReefsExploration",
        "desertAdventureOption",
        "waterSportsActivities",
      ],
    },
    {
      id: "sharm",
      title: "Sharm El Sheikh Luxury Package",
      country: "Egypt",
      location: "Sharm El Sheikh",
      price: 900,
      duration: "5 Days / 4 Nights",
      rating: 5.0,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1665643956022-ee053e925743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFybSUyMGVsJTIwc2hlaWtoJTIwcmVkJTIwc2VhJTIwZWd5cHR8ZW58MXx8fHwxNzc0ODAyNzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      includes: [
        "5-star all-inclusive resort",
        "Unlimited meals & drinks",
        "Multiple swimming pools",
        "Entertainment & activities",
        "Beach access & water sports",
        "Spa facilities access",
      ],
      highlights: [
        "Luxury accommodation",
        "All-inclusive experience",
        "Red Sea beaches",
        "Evening entertainment",
      ],
    },
    {
      id: "dubai",
      title: "Dubai Luxury Experience",
      country: "UAE",
      location: "Dubai",
      price: 1200,
      duration: "6 Days / 5 Nights",
      rating: 4.9,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1628155092735-d1146f19cd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1cmolMjBraGFsaWZhJTIwc2t5bGluZXxlbnwxfHx8fDE3NzQ3NTc2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      includes: [
        "5-star hotel accommodation",
        "Burj Khalifa visit (148th floor)",
        "Desert safari with BBQ dinner",
        "Dubai Marina cruise",
        "Shopping mall tours",
        "City tour with guide",
      ],
      highlights: [
        "Modern architecture",
        "Luxury shopping",
        "Desert adventures",
        "World-class dining",
      ],
    },
    {
      id: "cairo",
      title: "Cairo & Pyramids Explorer",
      country: "Egypt",
      location: "Cairo",
      price: 650,
      duration: "4 Days / 3 Nights",
      rating: 4.7,
      reviews: 142,
      image:
        "https://images.unsplash.com/photo-1692986172150-ec32dccfa5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdCUyMHB5cmFtaWRzJTIwY2Fpcm98ZW58MXx8fHwxNzc0NzkxNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      includes: [
        "Hotel near pyramids",
        "Guided Pyramids & Sphinx tour",
        "Egyptian Museum visit",
        "Nile River cruise dinner",
        "Traditional Egyptian meals",
        "All entrance fees included",
      ],
      highlights: [
        "Ancient wonders",
        "Historical treasures",
        "Nile experience",
        "Egyptian culture",
      ],
    },
    {
      id: "maldives",
      title: "Maldives Paradise Retreat",
      country: "Maldives",
      location: "Male",
      price: 1500,
      duration: "7 Days / 6 Nights",
      rating: 5.0,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1699019493395-8a1f0c7883a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMGJlYWNoJTIwcmVzb3J0JTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0ODAyNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      includes: [
        "Luxury overwater villa",
        "All-inclusive meals & drinks",
        "Water sports equipment",
        "Snorkeling & diving",
        "Spa treatments included",
        "Private beach access",
      ],
      highlights: [
        "Overwater bungalows",
        "Pristine beaches",
        "Marine life exploration",
        "Ultimate relaxation",
      ],
    },
  ];

  const [offers, setOffers] = useState(mockOffers);

  // Fetch offers from backend or use mock data as fallback
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const apiOffers = await getAllOffers();
        if (apiOffers && apiOffers.length > 0) {
          setOffers(apiOffers);
        } else {
          setOffers(mockOffers);
        }
      } catch (err) {
        console.error("Error fetching offers:", err);
        setOffers(mockOffers);
        setError("Using demo offers (API unavailable)");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  const localFilteredOffers = offers.filter((offer) => {
    // First apply search filtering if searching
    if (isSearching) {
      const searchMatch = filteredOffers.some(searchOffer => searchOffer.id === offer.id);
      if (!searchMatch) return false;
    }

    // Then apply existing filters
    const countryMatch =
      countryFilter === "all" || offer.country === countryFilter;
    const priceMatch =
      priceFilter === "all" ||
      (priceFilter === "low" && offer.price < 700) ||
      (priceFilter === "mid" && offer.price >= 700 && offer.price < 1000) ||
      (priceFilter === "high" && offer.price >= 1000);
    return countryMatch && priceMatch;
  });

  const countries = ["all", ...new Set(offers.map((o) => o.country))];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#F5A623] via-[#e09515] to-[#2C4A7C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('specialOffers')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {t('offersPageDesc')}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col sm:${flexDirection()} gap-4 items-center justify-between`}>
            <div className="text-lg font-semibold text-gray-700">
              {t('{count} Packages Available', { count: filteredOffers.length })}
            </div>
            <div className={`flex flex-col sm:${flexDirection()} gap-4`}>
              <Select value={countryFilter} onValueChange={setCountryFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder={t('Filter by Country')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('All Countries')}</SelectItem>
                  {countries.slice(1).map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder={t('Filter by Price')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('All Prices')}</SelectItem>
                  <SelectItem value="low">{t('Under $700')}</SelectItem>
                  <SelectItem value="mid">{t('$700 - $1000')}</SelectItem>
                  <SelectItem value="high">{t('Over $1000')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Results Indicator */}
          {isSearching && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-blue-700 text-sm">
                {t('Showing {count} result{plural} for your search', { count: localFilteredOffers.length })}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-700 text-sm">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">{t('Loading offers...')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {localFilteredOffers.map((offer) => (
                <Card
                  key={offer.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F5A623] to-[#2C4A7C] text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                    ${offer.price}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-3xl font-bold text-white mb-1">
                      {offer.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/90">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{offer.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{offer.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-900">
                        {offer.rating}
                      </span>
                    </div>
                    <span className="text-gray-600">
                      ({offer.reviews} reviews)
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Compass className="w-5 h-5 text-[#2C4A7C]" />
                      {t('Package Includes:')}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {offer.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] mt-1.5 flex-shrink-0" />
                          <span className="text-gray-700">{t(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {t('Highlights:')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {offer.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-[#2C4A7C] rounded-full text-sm font-medium"
                        >
                          {t(highlight)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`flex flex-col sm:${flexDirection()} gap-3`}>
                    <Link to={`/booking/${offer.id}`} className="flex-1">
                      <Button className="w-full rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] hover:from-[#1e3255] hover:to-[#e09515] py-6">
                        {t('Book Now')}
                      </Button>
                    </Link>
                    <Link to="/contact" className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full rounded-full border-2 border-[#2C4A7C] text-[#2C4A7C] hover:bg-blue-50 py-6"
                      >
                        {t('Ask Questions')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2C4A7C] via-[#1e3255] to-[#F5A623] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cantFind')}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {t('contactCustom')}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="rounded-full bg-white text-[#2C4A7C] hover:bg-gray-100 text-lg px-8 py-6"
            >
              {t('contactUs')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}