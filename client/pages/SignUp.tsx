import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    marketingEmails: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const benefits = [
    "Instant money transfers worldwide",
    "Secure payment processing",
    "24/7 customer support",
    "Competitive exchange rates",
    "Mobile app access",
    "Business solutions",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Benefits */}
            <div className="hidden lg:block">
              <div className="max-w-md">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-brand-navy mb-4">
                    Join WesternPay Today
                  </h1>
                  <p className="text-lg text-brand-gray leading-relaxed">
                    Experience the future of digital payments with our comprehensive platform. 
                    Get started in minutes and unlock a world of financial possibilities.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">
                    What you'll get:
                  </h3>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-brand-gray">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-brand-navy mb-2">
                    Trusted by millions
                  </h4>
                  <p className="text-sm text-brand-gray">
                    Join over 50,000+ businesses and individuals who trust WesternPay for their payment needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="lg:max-w-md mx-auto w-full">
              <Card className="shadow-xl border-0">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-brand-navy">
                    Create Your Account
                  </CardTitle>
                  <CardDescription className="text-brand-gray">
                    Start your journey with WesternPay in just a few steps
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-brand-navy">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="mt-1"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-brand-navy">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="mt-1"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-brand-navy">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-brand-navy">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <Label htmlFor="password" className="text-sm font-medium text-brand-navy">
                        Password
                      </Label>
                      <div className="relative mt-1">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleChange}
                          required
                          placeholder="Create a strong password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-gray hover:text-brand-navy"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <Label htmlFor="confirmPassword" className="text-sm font-medium text-brand-navy">
                        Confirm Password
                      </Label>
                      <div className="relative mt-1">
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          placeholder="Confirm your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-gray hover:text-brand-navy"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="agreeToTerms"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => 
                            setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                          }
                          required
                        />
                        <Label htmlFor="agreeToTerms" className="text-sm text-brand-gray leading-relaxed">
                          I agree to the{" "}
                          <Link to="/terms" className="text-primary-600 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy-policy" className="text-primary-600 hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="marketingEmails"
                          name="marketingEmails"
                          checked={formData.marketingEmails}
                          onCheckedChange={(checked) => 
                            setFormData(prev => ({ ...prev, marketingEmails: checked as boolean }))
                          }
                        />
                        <Label htmlFor="marketingEmails" className="text-sm text-brand-gray leading-relaxed">
                          I would like to receive updates about new features and offers
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 text-lg font-semibold"
                    >
                      Create Account
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>

                  {/* Login Link */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-brand-gray">
                      Already have an account?{" "}
                      <Link to="/login" className="text-primary-600 hover:underline font-medium">
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
