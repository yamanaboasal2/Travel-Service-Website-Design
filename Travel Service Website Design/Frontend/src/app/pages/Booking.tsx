import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Plane,
  Hotel,
  Users,
  Calendar,
  MapPin,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useLanguage } from "../contexts/LanguageContext";

export function Booking() {
  const { offerId } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    // Step 1: Booking Type
    bookingType: "both", // flight, hotel, both
    travelWithGroup: "no", // yes, no

    // Step 2: Traveler Information
    numTravelers: "1",
    passportType: "palestinian",
    fullName: "",
    email: "",
    phone: "",
    passportNumber: "",

    // Step 3: Destination
    continent: "",
    country: "",
    departureDate: "",
    returnDate: "",

    // Step 4: Additional
    specialRequests: "",
  });

  const continents = {
    Asia: ["Turkey", "UAE", "Saudi Arabia", "Jordan", "Thailand", "Japan"],
    Africa: ["Egypt", "Morocco", "South Africa", "Kenya"],
    Europe: ["France", "Italy", "Spain", "Germany", "Greece", "UK"],
    Americas: ["USA", "Canada", "Brazil", "Mexico"],
    Oceania: ["Australia", "New Zealand", "Maldives"],
  };

  const prefilledOffer = offerId
    ? {
        istanbul: { continent: "Asia", country: "Turkey" },
        aqaba: { continent: "Asia", country: "Jordan" },
        sharm: { continent: "Africa", country: "Egypt" },
        dubai: { continent: "Asia", country: "UAE" },
        cairo: { continent: "Africa", country: "Egypt" },
        maldives: { continent: "Oceania", country: "Maldives" },
      }[offerId]
    : null;

  const handleInputChange = (field: string, value: string) => {
    setBookingData({ ...bookingData, [field]: value });

    // Auto-populate if offer selected
    if (prefilledOffer && step === 1) {
      setBookingData({
        ...bookingData,
        [field]: value,
        continent: prefilledOffer.continent,
        country: prefilledOffer.country,
      });
    }
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingData);
    // Show confirmation and redirect to contact or confirmation page
    alert(t('bookingSubmittedSuccess'));
    navigate("/contact");
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return bookingData.bookingType && bookingData.travelWithGroup;
      case 2:
        return (
          bookingData.numTravelers &&
          bookingData.passportType &&
          bookingData.fullName &&
          bookingData.email &&
          bookingData.phone
        );
      case 3:
        return (
          bookingData.continent &&
          bookingData.country &&
          bookingData.departureDate &&
          bookingData.returnDate
        );
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#2C4A7C] via-[#F5A623] to-[#2C4A7C] bg-clip-text text-transparent">
            {t('bookYourTrip')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('completeFormStartJourney')}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {[
              { num: 1, title: t('bookingType') },
              { num: 2, title: t('yourDetails') },
              { num: 3, title: t('destination') },
              { num: 4, title: t('review') },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= s.num
                        ? "bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step > s.num ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      s.num
                    )}
                  </div>
                  <span
                    className={`text-sm mt-2 hidden sm:block ${
                      step >= s.num ? "text-[#2C4A7C] font-semibold" : "text-gray-500"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
                {idx < 3 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-all ${
                      step > s.num
                        ? "bg-gradient-to-r from-[#2C4A7C] to-[#F5A623]"
                        : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <Card className="p-8 shadow-2xl">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Booking Type */}
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    What would you like to book?
                  </h2>
                  <RadioGroup
                    value={bookingData.bookingType}
                    onValueChange={(value) =>
                      handleInputChange("bookingType", value)
                    }
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <Label
                      htmlFor="flight"
                      className={`flex flex-col items-center gap-4 p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        bookingData.bookingType === "flight"
                          ? "border-[#2C4A7C] bg-blue-50"
                          : "border-gray-200 hover:border-[#F5A623]"
                      }`}
                    >
                      <RadioGroupItem
                        value="flight"
                        id="flight"
                        className="sr-only"
                      />
                      <Plane className="w-12 h-12 text-[#2C4A7C]" />
                      <span className="font-semibold text-gray-900">
                        Flight Only
                      </span>
                    </Label>

                    <Label
                      htmlFor="hotel"
                      className={`flex flex-col items-center gap-4 p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        bookingData.bookingType === "hotel"
                          ? "border-[#2C4A7C] bg-blue-50"
                          : "border-gray-200 hover:border-[#F5A623]"
                      }`}
                    >
                      <RadioGroupItem
                        value="hotel"
                        id="hotel"
                        className="sr-only"
                      />
                      <Hotel className="w-12 h-12 text-[#F5A623]" />
                      <span className="font-semibold text-gray-900">
                        Hotel Only
                      </span>
                    </Label>

                    <Label
                      htmlFor="both"
                      className={`flex flex-col items-center gap-4 p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        bookingData.bookingType === "both"
                          ? "border-[#2C4A7C] bg-blue-50"
                          : "border-gray-200 hover:border-[#F5A623]"
                      }`}
                    >
                      <RadioGroupItem
                        value="both"
                        id="both"
                        className="sr-only"
                      />
                      <div className="flex gap-2">
                        <Plane className="w-10 h-10 text-[#2C4A7C]" />
                        <Hotel className="w-10 h-10 text-[#F5A623]" />
                      </div>
                      <span className="font-semibold text-gray-900">
                        Flight + Hotel
                      </span>
                    </Label>
                  </RadioGroup>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    Travel with company group?
                  </h2>
                  <RadioGroup
                    value={bookingData.travelWithGroup}
                    onValueChange={(value) =>
                      handleInputChange("travelWithGroup", value)
                    }
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <Label
                      htmlFor="group-yes"
                      className={`flex items-center gap-4 p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        bookingData.travelWithGroup === "yes"
                          ? "border-[#2C4A7C] bg-blue-50"
                          : "border-gray-200 hover:border-[#F5A623]"
                      }`}
                    >
                      <RadioGroupItem
                        value="yes"
                        id="group-yes"
                        className="sr-only"
                      />
                      <Users className="w-10 h-10 text-[#2C4A7C]" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          Yes, with group
                        </div>
                        <div className="text-sm text-gray-600">
                          Join organized group tours
                        </div>
                      </div>
                    </Label>

                    <Label
                      htmlFor="group-no"
                      className={`flex items-center gap-4 p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        bookingData.travelWithGroup === "no"
                          ? "border-[#2C4A7C] bg-blue-50"
                          : "border-gray-200 hover:border-[#F5A623]"
                      }`}
                    >
                      <RadioGroupItem
                        value="no"
                        id="group-no"
                        className="sr-only"
                      />
                      <Users className="w-10 h-10 text-[#F5A623]" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          No, independent
                        </div>
                        <div className="text-sm text-gray-600">
                          Travel independently
                        </div>
                      </div>
                    </Label>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 2: Traveler Information */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Traveler Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="numTravelers">Number of Travelers</Label>
                    <Select
                      value={bookingData.numTravelers}
                      onValueChange={(value) =>
                        handleInputChange("numTravelers", value)
                      }
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Person" : "People"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="passportType">Passport Type</Label>
                    <Select
                      value={bookingData.passportType}
                      onValueChange={(value) =>
                        handleInputChange("passportType", value)
                      }
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="palestinian">Palestinian</SelectItem>
                        <SelectItem value="jordanian">Jordanian</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name (as on passport)</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={bookingData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="rounded-xl"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={bookingData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="rounded-xl"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0597441666"
                      value={bookingData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passportNumber">
                    Passport Number (optional)
                  </Label>
                  <Input
                    id="passportNumber"
                    type="text"
                    placeholder="Enter passport number"
                    value={bookingData.passportNumber}
                    onChange={(e) =>
                      handleInputChange("passportNumber", e.target.value)
                    }
                    className="rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Destination */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Choose Your Destination
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="continent">Continent</Label>
                    <Select
                      value={bookingData.continent}
                      onValueChange={(value) => {
                        handleInputChange("continent", value);
                        handleInputChange("country", ""); // Reset country
                      }}
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select continent" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(continents).map((continent) => (
                          <SelectItem key={continent} value={continent}>
                            {continent}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select
                      value={bookingData.country}
                      onValueChange={(value) =>
                        handleInputChange("country", value)
                      }
                      disabled={!bookingData.continent}
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {bookingData.continent &&
                          continents[
                            bookingData.continent as keyof typeof continents
                          ].map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="departureDate">Departure Date</Label>
                    <Input
                      id="departureDate"
                      type="date"
                      value={bookingData.departureDate}
                      onChange={(e) =>
                        handleInputChange("departureDate", e.target.value)
                      }
                      className="rounded-xl"
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="returnDate">Return Date</Label>
                    <Input
                      id="returnDate"
                      type="date"
                      value={bookingData.returnDate}
                      onChange={(e) =>
                        handleInputChange("returnDate", e.target.value)
                      }
                      className="rounded-xl"
                      required
                      min={bookingData.departureDate || new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests">
                    Special Requests (optional)
                  </Label>
                  <textarea
                    id="specialRequests"
                    placeholder="Any special requirements or requests..."
                    value={bookingData.specialRequests}
                    onChange={(e) =>
                      handleInputChange("specialRequests", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Review Your Booking
                </h2>

                <div className="space-y-4">
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-orange-100">
                    <h3 className="font-semibold text-lg mb-4 text-gray-900 flex items-center gap-2">
                      <Plane className="w-5 h-5 text-[#2C4A7C]" />
                      Booking Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Booking Type:</span>
                        <p className="font-semibold text-gray-900 capitalize">
                          {bookingData.bookingType === "both"
                            ? "Flight + Hotel"
                            : bookingData.bookingType}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-600">Travel Mode:</span>
                        <p className="font-semibold text-gray-900">
                          {bookingData.travelWithGroup === "yes"
                            ? "With Group"
                            : "Independent"}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-teal-50">
                    <h3 className="font-semibold text-lg mb-4 text-gray-900 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Traveler Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-semibold text-gray-900">
                          {bookingData.fullName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-semibold text-gray-900">
                          {bookingData.email}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone:</span>
                        <span className="font-semibold text-gray-900">
                          {bookingData.phone}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Travelers:</span>
                        <span className="font-semibold text-gray-900">
                          {bookingData.numTravelers} Person(s)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Passport:</span>
                        <span className="font-semibold text-gray-900 capitalize">
                          {bookingData.passportType}
                        </span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-orange-50 to-blue-100">
                    <h3 className="font-semibold text-lg mb-4 text-gray-900 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-orange-600" />
                      Destination & Dates
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Destination:</span>
                        <span className="font-semibold text-gray-900">
                          {bookingData.country}, {bookingData.continent}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Departure:</span>
                        <span className="font-semibold text-gray-900">
                          {bookingData.departureDate}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Return:</span>
                        <span className="font-semibold text-gray-900">
                          {bookingData.returnDate}
                        </span>
                      </div>
                    </div>
                  </Card>

                  {bookingData.specialRequests && (
                    <Card className="p-6 bg-gradient-to-br from-green-50 to-teal-50">
                      <h3 className="font-semibold text-lg mb-2 text-gray-900 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-green-600" />
                        Special Requests
                      </h3>
                      <p className="text-sm text-gray-700">
                        {bookingData.specialRequests}
                      </p>
                    </Card>
                  )}
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-orange-100 p-6 rounded-xl">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Note:</strong> This is a booking request. Our team
                    will review your information and contact you within 24 hours
                    to confirm availability, provide pricing details, and finalize
                    your booking.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <div>
                {step > 1 && (
                  <Button
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="rounded-full px-8"
                  >
                    Back
                  </Button>
                )}
              </div>

              <div className="flex gap-4">
                <Link to="/">
                  <Button type="button" variant="ghost" className="rounded-full">
                    Cancel
                  </Button>
                </Link>

                {step < 4 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] hover:from-[#1e3255] hover:to-[#e09515] px-8"
                  >
                    Next
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 px-8"
                  >
                    Submit Booking Request
                    <CheckCircle className="ml-2 w-5 h-5" />
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Card>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Need help with your booking?</p>
          <Link to="/contact">
            <Button
              variant="outline"
              className="rounded-full border-2 border-[#2C4A7C] text-[#2C4A7C] hover:bg-blue-50"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}