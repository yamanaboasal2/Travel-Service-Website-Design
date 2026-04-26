import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import logo from "../../assets/logo.png";
import { loginUser, registerUser } from "../services/apiService";
import { useLanguage } from "../contexts/LanguageContext";

export function Auth() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validate inputs
    if (!loginData.email.trim()) {
      setError(t('emailRequired'));
      return;
    }
    if (!loginData.password) {
      setError(t('passwordRequired'));
      return;
    }
    
    setLoading(true);

    try {
      console.log("🔐 Starting login with:", { email: loginData.email });
      
      const response = await loginUser(loginData.email, loginData.password);
      
      console.log("✅ Login successful:", response);
      
      // Redirect to home on success
      setTimeout(() => navigate("/"), 500);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : t('loginError');
      console.error("❌ Login error:", errorMessage, err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate inputs
    if (!signupData.name.trim()) {
      setError(t('nameRequired'));
      return;
    }
    if (!signupData.email.trim()) {
      setError(t('emailRequired'));
      return;
    }
    if (!signupData.password) {
      setError(t('passwordRequired'));
      return;
    }
    if (signupData.password !== signupData.confirmPassword) {
      setError(t('passwordsNotMatch'));
      return;
    }
    if (signupData.password.length < 6) {
      setError(t('passwordTooShort'));
      return;
    }

    setLoading(true);

    try {
      console.log("🔐 Starting registration with:", { 
        name: signupData.name, 
        email: signupData.email 
      });
      
      const response = await registerUser(signupData.name, signupData.email, signupData.password);
      
      console.log("✅ Registration successful:", response);
      
      // Show success message briefly before redirecting
      setError(""); // Clear any errors
      
      // Redirect to home on success
      setTimeout(() => navigate("/"), 500);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : t('signupError');
      console.error("❌ Registration error:", errorMessage, err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Rainbow Travel & Tourism" className="h-20 w-20" />
              <div>
                <div className="font-bold text-3xl text-[#2C4A7C]">
                  Rainbow Travel
                </div>
                <div className="text-lg text-[#F5A623]">& Tourism</div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Start Your Journey
              <br />
              <span className="text-[#F5A623]">
                With Us Today
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Join thousands of happy travelers who have discovered the world
              with Rainbow Travel. Create an account to access exclusive deals
              and manage your bookings easily.
            </p>

            <div className="space-y-4">
              {[
                "Access exclusive travel deals",
                "Easy booking management",
                "Personalized recommendations",
                "Priority customer support",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Auth Forms */}
        <Card className="p-8 shadow-2xl">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="text-lg py-3">
                {t('login')}
              </TabsTrigger>
              <TabsTrigger value="signup" className="text-lg py-3">
                {t('signup')}
              </TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('welcomeBack', { name: '' })}
                  </h3>
                  <p className="text-gray-600">
                    {t('loginToAccess')}
                  </p>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">{t('email')}</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder={t('enterYourEmail')}
                        value={loginData.email}
                        onChange={(e) =>
                          setLoginData({ ...loginData, email: e.target.value })
                        }
                        className="pl-12 rounded-xl py-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">{t('password')}</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder={t('enterYourPassword')}
                        value={loginData.password}
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            password: e.target.value,
                          })
                        }
                        className="pl-12 pr-12 rounded-xl py-6"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-600">
                        {t('rememberMe')}
                      </span>
                    </label>
                    <button
                      type="button"
                      className="text-sm text-[#F5A623] hover:text-[#e09515] font-medium"
                    >
                      {t('forgotPassword')}
                    </button>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] hover:from-[#1e3255] hover:to-[#e09515] py-6 disabled:opacity-50"
                  >
                    {loading ? t('loggingIn') : t('login')}
                  </Button>
                </form>
              </div>
            </TabsContent>

            {/* Sign Up Form */}
            <TabsContent value="signup">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('createYourAccount')}
                  </h3>
                  <p className="text-gray-600">
                    {t('joinAndExplore')}
                  </p>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSignupSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">{t('fullName')}</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder={t('enterYourFullName')}
                        value={signupData.name}
                        onChange={(e) =>
                          setSignupData({ ...signupData, name: e.target.value })
                        }
                        className="pl-12 rounded-xl py-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">{t('email')}</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder={t('enterYourEmail')}
                        value={signupData.email}
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            email: e.target.value,
                          })
                        }
                        className="pl-12 rounded-xl py-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password">{t('password')}</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder={t('createPassword')}
                        value={signupData.password}
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            password: e.target.value,
                          })
                        }
                        className="pl-12 pr-12 rounded-xl py-6"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm">{t('confirmPassword')}</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="signup-confirm"
                        type={showPassword ? "text" : "password"}
                        placeholder={t('confirmYourPassword')}
                        value={signupData.confirmPassword}
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="pl-12 rounded-xl py-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      required
                      className="w-4 h-4 mt-1 rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-600">
                      {t('iAgreeToThe')}{' '}
                      <button className="text-[#F5A623] hover:text-[#e09515] font-medium">
                        {t('termsOfService')}
                      </button>{' '}
                      {t('and')}{' '}
                      <button className="text-[#F5A623] hover:text-[#e09515] font-medium">
                        {t('privacyPolicy')}
                      </button>
                    </span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full rounded-full bg-gradient-to-r from-[#2C4A7C] to-[#F5A623] hover:from-[#1e3255] hover:to-[#e09515] py-6 disabled:opacity-50"
                  >
                    {loading ? t('creatingAccount') : t('createAccount')}
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-[#F5A623]"
            >
              ← {t('backToHome')}
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}