import { Link } from "react-router";
import {
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Competitive Prices",
      description:
        "We offer the best value for your money with exclusive deals and competitive rates on all our packages.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Excellent Service",
      description:
        "Our professional and friendly team is dedicated to providing you with outstanding customer service at every step.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Shield,
      title: "Organized Trips",
      description:
        "Every detail is carefully planned and organized to ensure your trip is smooth, safe, and stress-free.",
      color: "from-[#2C4A7C] to-blue-600",
    },
    {
      icon: Sparkles,
      title: "Continuous Offers",
      description:
        "Take advantage of our regular promotions, seasonal discounts, and special offers throughout the year.",
      color: "from-orange-500 to-amber-500",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C4A7C] via-[#1e3255] to-[#F5A623] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner in creating unforgettable travel experiences
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#2C4A7C] via-[#F5A623] to-[#2C4A7C] bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Rainbow Travel & Tourism was founded with a simple yet
                  powerful vision: to make travel accessible, enjoyable, and
                  memorable for everyone. Located in the heart of Nablus at
                  Nablus City Center, second floor, we have become a trusted
                  name in the travel industry.
                </p>
                <p>
                  Our journey began with a passion for exploration and a
                  commitment to excellence. Over the years, we have helped
                  thousands of travelers discover the world, creating memories
                  that last a lifetime. From the bustling streets of Istanbul to
                  the pristine beaches of the Maldives, we've been there every
                  step of the way.
                </p>
                <p>
                  What sets us apart is our dedication to personalized service.
                  We understand that every traveler is unique, with different
                  dreams, preferences, and budgets. That's why we take the time
                  to listen, understand, and craft travel solutions that
                  perfectly match your needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 text-center bg-gradient-to-br from-blue-50 to-orange-100 border-2 border-blue-200"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2C4A7C] to-[#F5A623] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional travel experiences by offering
                comprehensive, reliable, and affordable travel solutions. We
                strive to make every journey seamless and memorable, ensuring
                our clients return home with stories worth sharing and memories
                to cherish forever.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F5A623] to-[#2C4A7C] flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To become the leading travel agency in Palestine, recognized for
                our commitment to excellence, innovation, and customer
                satisfaction. We envision a future where travel is accessible to
                all, and where Rainbow Travel is the first choice for travelers
                seeking quality and value.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C4A7C] via-[#F5A623] to-[#2C4A7C] bg-clip-text text-transparent">
              Why Choose Rainbow Travel?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're more than just a travel agency – we're your partners in
              adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C4A7C] via-[#F5A623] to-[#2C4A7C] bg-clip-text text-transparent">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Customer First",
                description:
                  "Your satisfaction is our top priority. We listen, adapt, and deliver.",
              },
              {
                icon: Shield,
                title: "Trust & Reliability",
                description:
                  "We build lasting relationships based on honesty and dependability.",
              },
              {
                icon: TrendingUp,
                title: "Continuous Improvement",
                description:
                  "We constantly evolve to bring you the best travel experiences.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2C4A7C] to-[#F5A623] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#2C4A7C] via-[#1e3255] to-[#F5A623] rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Visit Our Office</h2>
              <p className="text-xl text-white/90 mb-8">
                We're located in the heart of Nablus, ready to help you plan
                your next adventure
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-lg">
                  📍 Nablus City Center, Second Floor
                  <br />
                  Nablus, Palestine
                </p>
                <p className="text-lg">📞 0597441666</p>
                <p className="text-lg">✉️ info@rainbowtravel.ps</p>
              </div>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-[#2C4A7C] hover:bg-gray-100 text-lg px-8 py-6"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2C4A7C] via-[#1e3255] to-[#F5A623] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let us help you create unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/offers">
              <Button
                size="lg"
                className="rounded-full bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              >
                View Offers
              </Button>
            </Link>
            <Link to="/booking">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}