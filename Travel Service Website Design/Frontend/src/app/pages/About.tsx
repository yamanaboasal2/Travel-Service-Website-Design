import { Link } from "react-router-dom";
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
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t, flexDirection } = useLanguage();
  const values = [
    {
      icon: Award,
      title: "competitivePrices",
      description: "pricesDesc",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "excellentService",
      description: "serviceDesc",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Shield,
      title: "organizedTrips",
      description: "organizedDesc",
      color: "from-[#2C4A7C] to-blue-600",
    },
    {
      icon: Sparkles,
      title: "continuousOffers",
      description: "offersDesc",
      color: "from-orange-500 to-amber-500",
    },
  ];

  const stats = [
    { number: "10+", label: t('yearsExperience') },
    { number: "5000+", label: t('happyTravelers') },
    { number: "50+", label: t('destinations') },
    { number: "24/7", label: t('customerSupport') },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('aboutUs')}</h1>
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
                {t('ourStory')}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {t('storyText')}
                </p>
                <p>
                  {t('storyText2')}
                </p>
                <p>
                  {t('storyText3')}
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
                {t('ourMission')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('ourMissionText')}
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F5A623] to-[#2C4A7C] flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                {t('ourVision')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('ourVisionText')}
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
              {t('whyChoose')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('whyChooseDesc')}
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
                    {t(value.title)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t(value.description)}
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
              {t('ourCoreValues')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: t('customerFirst'),
                description: t('customerFirstDesc'),
              },
              {
                icon: Shield,
                title: t('trustReliability'),
                description: t('trustReliabilityDesc'),
              },
              {
                icon: TrendingUp,
                title: t('continuousImprovement'),
                description: t('continuousImprovementDesc'),
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
              <h2 className="text-4xl font-bold mb-6">{t('visitOurOffice')}</h2>
              <p className="text-xl text-white/90 mb-8">
                {t('officeLocationDesc')}
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-lg">
                  📍 {t('officeAddress')}
                </p>
                <p className="text-lg">📞 {t('phoneNumber')}</p>
                <p className="text-lg">✉️ {t('emailAddress')}</p>
              </div>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-[#2C4A7C] hover:bg-gray-100 text-lg px-8 py-6"
                >
                  {t('Get in Touch')}
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
            {t('readyToStartJourney')}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {t('createUnforgettableMemories')}
          </p>
          <div className={`flex flex-col sm:${flexDirection()} gap-4 justify-center`}>
            <Link to="/offers">
              <Button
                size="lg"
                className="rounded-full bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              >
                {t('viewOffers')}
              </Button>
            </Link>
            <Link to="/booking">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                {t('bookNow')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}