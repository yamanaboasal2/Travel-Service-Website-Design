import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, TikTok, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { sendContactMessage } from "../services/apiService";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await sendContactMessage(
        formData.name,
        formData.email,
        "Contact Form Message",
        formData.message
      );
      
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C4A7C] via-[#1e3255] to-[#F5A623] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            We're here to help you plan your perfect trip. Get in touch with us
            today!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2C4A7C] via-[#F5A623] to-[#2C4A7C] bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Have questions or need assistance? We're here to help! Reach
                  out to us through any of the following channels.
                </p>
              </div>

              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C4A7C] to-[#F5A623] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Office Location
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Nablus City Center
                      <br />
                      Second Floor
                      <br />
                      Nablus, Palestine
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5A623] to-[#2C4A7C] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Phone Number
                    </h3>
                    <a
                      href="tel:0597441666"
                      className="text-[#2C4A7C] hover:text-[#1e3255] font-medium"
                    >
                      0597441666
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Available 24/7 for inquiries
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-[#2C4A7C] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:info@rainbowtravel.ps"
                      className="text-[#2C4A7C] hover:text-[#1e3255] font-medium"
                    >
                      info@rainbowtravel.ps
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </Card>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Follow Us on Social Media
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/RainbowPalestina/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C4A7C] to-[#F5A623] hover:from-[#1e3255] hover:to-[#e09515] flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/rainbowtours93/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5A623] to-[#2C4A7C] hover:from-[#e09515] hover:to-[#1e3255] flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@rainbowtourspal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 flex items-center justify-center transition-colors"
                  >
                    <TikTok className="w-6 h-6 text-white" />
                  </a>
                </div>
                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <p>@rainbowpalestina</p>
                  <p>@rainbowtours93</p>
                  <p>@rainbowtourspal</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2C4A7C] via-[#F5A623] to-[#2C4A7C] bg-clip-text text-transparent">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within
                    24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="0597441666"
                      value={formData.phone}
                      onChange={handleChange}
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your travel plans or ask us any questions..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] hover:from-[#1e3255] hover:to-[#e09515] py-6 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C4A7C] via-[#F5A623] to-[#2C4A7C] bg-clip-text text-transparent">
              Find Us on the Map
            </h2>
            <p className="text-lg text-gray-600">
              Visit our office at Nablus City Center
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-orange-100 to-blue-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#2C4A7C] mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-900 mb-2">
                  Nablus City Center, Second Floor
                </p>
                <p className="text-gray-600">Nablus, Palestine</p>
                <p className="text-sm text-gray-500 mt-4">
                  Interactive map integration available
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-[#2C4A7C] via-[#1e3255] to-[#F5A623] text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Office Hours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Sunday - Thursday
                </h3>
                <p className="text-white/90">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Saturday</h3>
                <p className="text-white/90">10:00 AM - 4:00 PM</p>
              </div>
              <div className="md:col-span-2 text-center mt-4">
                <p className="text-white/90">
                  Emergency support available 24/7 by phone
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}