import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
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
    // Handle login logic
    console.log("Login attempt:", formData);
  };

  const features = [
    "Instant money transfers",
    "Secure payment processing",
    "24/7 customer support",
    "Global payment network",
    "Mobile app access",
    "Business solutions",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Features */}
            <div className="hidden lg:block">
              <div className="max-w-md">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-brand-navy mb-4">
                    Welcome Back to WesternPay
                  </h1>
                  <p className="text-lg text-brand-gray leading-relaxed">
                    Access your account and continue managing your digital payments with our secure and reliable platform.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">
                    What you can do:
                  </h3>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-brand-gray">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-brand-navy mb-2">
                    Secure & Reliable
                  </h4>
                  <p className="text-sm text-brand-gray">
                    Your data is protected with bank-grade encryption and multi-layer security protocols.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="lg:max-w-md mx-auto w-full">
              <Card className="shadow-xl border-0">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-brand-navy">
                    Sign In to Your Account
                  </CardTitle>
                  <CardDescription className="text-brand-gray">
                    Welcome back! Please enter your details to access your account
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Enter your password"
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

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="rememberMe"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onCheckedChange={(checked) => 
                            setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                          }
                        />
                        <Label htmlFor="rememberMe" className="text-sm text-brand-gray">
                          Remember me
                  </Label>
                  </div>
                      <Link
                        to="/forgot-password"
                        className="text-sm text-primary-600 hover:underline font-medium"
                      >
                        Forgot password?
                      </Link>
                </div>

              {/* Submit Button */}
              <Button
                type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 text-lg font-semibold"
              >
                      Sign In
                      <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

                  {/* Divider */}
                  <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-gray-200"></div>
                    <span className="px-4 text-sm text-brand-gray">or</span>
                    <div className="flex-1 border-t border-gray-200"></div>
                  </div>

                  {/* Social Login */}
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-brand-navy hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Continue with Google
                    </Button>
            </div>

                  {/* Sign Up Link */}
              <div className="mt-6 text-center">
                    <p className="text-sm text-brand-gray">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-primary-600 hover:underline font-medium">
                        Sign up here
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
