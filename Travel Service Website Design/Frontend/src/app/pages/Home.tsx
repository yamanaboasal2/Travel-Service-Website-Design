import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useSearch } from "../contexts/SearchContext";
import { useLanguage } from "../contexts/LanguageContext";

export function Home() {
  const { filteredDestinations, isSearching } = useSearch();
  const { t, flexDirection } = useLanguage();

  const destinations = [
    {
      name: "تركيا",
      image: "https://images.unsplash.com/photo-1587974136825-b150ee48f112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc3RhbmJ1bCUyMHR1cmtleSUyMGhhZ2lhJTIwc29waGlhfGVufDF8fHx8MTc3NDgwMjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "إسطنبول التاريخية",
    },
    {
      name: "الإمارات (دبي)",
      image: "https://images.unsplash.com/photo-1628155092735-d1146f19cd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1cmolMjBraGFsaWZhJTIwc2t5bGluZXxlbnwxfHx8fDE3NzQ3NTc2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "دبي الحديثة",
    },
    {
      name: "مصر",
      image: "https://images.unsplash.com/photo-1692986172150-ec32dccfa5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdCUyMHB5cmFtaWRzJTIwY2Fpcm98ZW58MXx8fHwxNzc0NzkxNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "الأهرامات القديمة",
    },
    {
      name: "فرنسا",
      image: "https://images.unsplash.com/photo-1642947392578-b37fbd9a4d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyJTIwZnJhbmNlfGVufDF8fHx8MTc3NDgwMjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "باريس الرومانسية",
    },
    {
      name: "إيطاليا",
      image: "https://images.unsplash.com/photo-1698103182362-51abdc45d008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwY29sb3NzZXVtJTIwaXRhbHl8ZW58MXx8fHwxNzc0NzE4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "روما التاريخية",
    },
    {
      name: "المالديف",
      image: "https://images.unsplash.com/photo-1699019493395-8a1f0c7883a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMGJlYWNoJTIwcmVzb3J0JTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0ODAyNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "الجنة الاستوائية",
    },
    {
      name: "السعودية",
      image: "https://images.unsplash.com/photo-1647177156430-28fcb2d4011f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNjYSUyMHNhdWRpJTIwYXJhYmlhJTIwa2FhYmF8ZW58MXx8fHwxNzc0NzA4NDczfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "مكة المكرمة المقدسة",
    },
  ];

  // Use filtered destinations if searching, otherwise show all
  const displayDestinations = isSearching ? filteredDestinations.map(filtered => {
    const fullDest = destinations.find(d => d.name === filtered.name);
    return fullDest || filtered;
  }) : destinations;

  const attractions = [
    {
      name: "Paradise Beaches",
      image: "https://images.unsplash.com/photo-1656557828306-ad3dbd54521e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2UlMjBjbGVhciUyMHdhdGVyfGVufDF8fHx8MTc3NDgwMjcxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Crystal clear waters",
    },
    {
      name: "Cultural Landmarks",
      image: "https://images.unsplash.com/photo-1598177183224-b3cec6da6b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwdGVtcGxlJTIwbGFuZG1hcmslMjBjdWx0dXJhbHxlbnwxfHx8fDE3NzQ4MDI3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Ancient wonders",
    },
    {
      name: "Mountain Adventures",
      image: "https://images.unsplash.com/photo-1764022398523-cb127ab75581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGFkdmVudHVyZSUyMHRyYXZlbHxlbnwxfHx8fDE3NzQ3MDU0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Breathtaking views",
    },
  ];

  const offers = [
    {
      title: "Istanbul Package",
      location: "Turkey",
      price: "$750",
      duration: "5 Days / 4 Nights",
      image: "https://images.unsplash.com/photo-1587974136825-b150ee48f112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc3RhbmJ1bCUyMHR1cmtleSUyMGhhZ2lhJTIwc29waGlhfGVufDF8fHx8MTc3NDgwMjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Aqaba Beach Trip",
      location: "Jordan",
      price: "$400",
      duration: "4 Days / 3 Nights",
      image: "https://images.unsplash.com/photo-1643884713348-f8cf6f435cd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcWFiYSUyMGpvcmRhbiUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc3NDgwMjcxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Sharm El Sheikh Luxury",
      location: "Egypt",
      price: "$900",
      duration: "5 Days / 4 Nights",
      image: "https://images.unsplash.com/photo-1665643956022-ee053e925743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFybSUyMGVsJTIwc2hlaWtoJTIwcmVkJTIwc2VhJTIwZWd5cHR8ZW58MXx8fHwxNzc0ODAyNzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      location: "Nablus",
      rating: 5,
      text: "Rainbow Travel made our trip to Turkey unforgettable! Everything was perfectly organized, from flights to hotel bookings. Highly recommended!",
      image: "https://images.unsplash.com/photo-1690531611128-7dd9c9230cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRyYXZlbGVycyUyMHZhY2F0aW9uJTIwc21pbGluZ3xlbnwxfHx8fDE3NzQ4MDI3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Sara Mahmoud",
      location: "Ramallah",
      rating: 5,
      text: "Best travel agency in Palestine! The staff is professional and helpful. Our Dubai vacation was amazing thanks to their excellent service.",
      image: "https://images.unsplash.com/photo-1690531611128-7dd9c9230cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRyYXZlbGVycyUyMHZhY2F0aW9uJTIwc21pbGluZ3xlbnwxfHx8fDE3NzQ4MDI3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Mohammed Ali",
      location: "Jenin",
      rating: 5,
      text: "Competitive prices and excellent deals! Rainbow Travel helped us find the perfect package within our budget. Will definitely book again!",
      image: "https://images.unsplash.com/photo-1690531611128-7dd9c9230cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRyYXZlbGVycyUyMHZhY2F0aW9uJTIwc21pbGluZ3xlbnwxfHx8fDE3NzQ4MDI3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1773779717914-8d118a5f900d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBhaXJwbGFuZSUyMHN1bnNldHxlbnwxfHx8fDE3NzQ4MDI3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Travel Adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A7C]/90 via-[#2C4A7C]/70 to-[#F5A623]/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t('journeyBegins')}
            <br />
            <span className="text-[#F5A623]">
              {t('memoriesYours')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {t('exploreWorld')}
          </p>
          <div className={`flex flex-col sm:${flexDirection()} gap-4 justify-center`}>
            <Link to="/offers">
              <Button
                size="lg"
                className="rounded-full bg-[#F5A623] hover:bg-[#e09515] text-white text-lg px-8 py-6"
              >
                {t('exploreDestinations')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/booking">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30 text-white text-lg px-8 py-6"
              >
                {t('bookNow')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#2C4A7C] via-[#F5A623] to-[#2C4A7C] bg-clip-text text-transparent">
              {t('welcome')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('yourTrustedPartner')}
            </p>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C4A7C] via-[#F5A623] to-[#2C4A7C] bg-clip-text text-transparent">
              {t('topDestinations')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('explorePopular')}
            </p>
            {isSearching && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl inline-block">
                <p className="text-blue-700 text-sm">
                  {t('Showing {count} destinations matching your search', { count: displayDestinations.length })}
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayDestinations.map((destination, index) => (
              <Card
                key={index}
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">
                      {t(destination.name)}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {t(destination.description)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Attractions */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {t('popularTouristAttractions')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('discoverBeachesLandmarks')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card
                key={index}
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">
                      {t(attraction.name)}
                    </h3>
                    <p className="text-white/90">{t(attraction.description)}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#F5A623] via-[#2C4A7C] to-[#F5A623] bg-clip-text text-transparent">
              {t('specialOffers')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('exclusiveDeals')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F5A623] to-[#2C4A7C] text-white px-4 py-2 rounded-full font-bold">
                    {offer.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{t(offer.title)}</h3>
                  <p className="text-gray-600 mb-2">{t(offer.location)}</p>
                  <p className="text-[#2C4A7C] font-semibold mb-4">
                    {t(offer.duration)}
                  </p>
                  <Link to="/offers">
                    <Button className="w-full rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] hover:from-[#1e3255] hover:to-[#e09515]">
                      {t('viewDetails')}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/offers">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-[#2C4A7C] text-[#2C4A7C] hover:bg-blue-50"
              >
                {t('View All Offers')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C4A7C] via-[#F5A623] to-[#2C4A7C] bg-clip-text text-transparent">
              {t('What Our Customers Say')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('Real experiences from happy travelers')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C4A7C] to-[#F5A623] flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2C4A7C] via-[#1e3255] to-[#F5A623] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('Ready to Start Your Journey?')}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {t('Book your dream vacation today and create memories that last a lifetime')}
          </p>
          <div className={`flex flex-col sm:${flexDirection()} gap-4 justify-center`}>
            <Link to="/booking">
              <Button
                size="lg"
                className="rounded-full bg-white text-[#2C4A7C] hover:bg-gray-100 text-lg px-8 py-6"
              >
                {t('Book Now')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                {t('contactUs')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}