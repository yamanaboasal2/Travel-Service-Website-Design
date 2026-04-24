import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Plane,
  Hotel,
  Package,
  FileText,
  MapPin,
  Calendar,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { getAllServices } from "../services/apiService";

interface ServiceType {
  _id?: string;
  title: string;
  description: string;
  price?: number;
  icon?: any;
  features?: string[];
  color?: string;
  image?: string;
  duration?: string;
}

// Icon map for services
const iconMap: { [key: string]: any } = {
  flight: Plane,
  hotel: Hotel,
  package: Package,
  visa: FileText,
  planning: Calendar,
  group: MapPin,
};

// Default mock services (fallback if no services in database)
const mockServices = [
  {
    title: "Flight Booking",
    description:
      "Book flights to destinations worldwide with competitive prices and flexible options. We work with major airlines to get you the best deals.",
    features: [
      "International & domestic flights",
      "Best fare guarantee",
      "Easy cancellation & rescheduling",
      "24/7 customer support",
    ],
    color: "from-blue-500 to-cyan-500",
    icon: "flight",
  },
  {
    title: "Hotel Reservations",
    description:
      "Find and book the perfect accommodation for your trip. From luxury resorts to budget-friendly hotels, we have options for every traveler.",
    features: [
      "Wide range of accommodations",
      "Best price guarantee",
      "Verified reviews & ratings",
      "Special group rates",
    ],
    color: "from-[#2C4A7C] to-[#F5A623]",
    icon: "hotel",
  },
  {
    title: "Tour Packages",
    description:
      "Explore our carefully curated tour packages that include flights, hotels, tours, and activities. Everything you need for a hassle-free vacation.",
    features: [
      "All-inclusive packages",
      "Customizable itineraries",
      "Expert local guides",
      "Group & private tours",
    ],
    color: "from-orange-500 to-red-500",
    icon: "package",
  },
  {
    title: "Visa Assistance",
    description:
      "Get expert help with visa applications and documentation. We guide you through the entire process to ensure a smooth experience.",
    features: [
      "Visa consultation",
      "Document preparation",
      "Application tracking",
      "Multiple country support",
    ],
    color: "from-green-500 to-teal-500",
    icon: "visa",
  },
  {
    title: "Travel Planning",
    description:
      "Let our experienced travel consultants help you plan the perfect trip. We handle all the details so you can focus on enjoying your journey.",
    features: [
      "Personalized itineraries",
      "Budget planning",
      "Activity recommendations",
      "Travel insurance options",
    ],
    color: "from-[#F5A623] to-[#2C4A7C]",
    icon: "planning",
  },
  {
    title: "Group Travel",
    description:
      "Planning a group trip? We specialize in organizing travel for families, friends, and corporate groups with special group rates and dedicated support.",
    features: [
      "Special group discounts",
      "Dedicated coordinator",
      "Flexible payment options",
      "Custom group activities",
    ],
    color: "from-[#2C4A7C] to-blue-600",
    icon: "group",
  },
];

export function Services() {
  const [services, setServices] = useState<ServiceType[]>(mockServices);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const apiServices = await getAllServices();
        
        // If we got services from API, use them
        if (apiServices && apiServices.length > 0) {
          setServices(apiServices);
        } else {
          // Otherwise use mock services
          setServices(mockServices);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        // Fall back to mock services on error
        setServices(mockServices);
        setError("Using demo services (API unavailable)");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C4A7C] via-[#1e3255] to-[#F5A623] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Complete travel solutions tailored to your needs. From booking to planning, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-700 text-sm">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading services...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                // Get icon from map or use default
                const iconName = (service as any).icon || "package";
                const Icon = iconMap[iconName] || Package;
                
                return (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${(service as any).color || "from-blue-500 to-cyan-500"} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {(service as any).features && (
                      <ul className="space-y-3 mb-6">
                        {(service as any).features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] mt-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link to="/booking">
                      <Button className="w-full rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] hover:from-[#1e3255] hover:to-[#e09515]">
                        Get Started
                      </Button>
                    </Link>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C4A7C] via-[#F5A623] to-[#2C4A7C] bg-clip-text text-transparent">
              Why Choose Rainbow Travel?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to making your travel experience exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Competitive Prices",
                description: "Best value for your money with exclusive deals",
              },
              {
                title: "Excellent Service",
                description: "Professional and friendly customer support",
              },
              {
                title: "Organized Trips",
                description: "Well-planned itineraries for stress-free travel",
              },
              {
                title: "Continuous Offers",
                description: "Regular promotions and special discounts",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C4A7C] to-[#F5A623] flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2C4A7C] via-[#1e3255] to-[#F5A623] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Trip?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today and let us help you plan your perfect vacation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button
                size="lg"
                className="rounded-full bg-white text-[#2C4A7C] hover:bg-gray-100 text-lg px-8 py-6"
              >
                Book Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}