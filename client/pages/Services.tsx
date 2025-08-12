import { useState } from "react";
import {
  CreditCard,
  Globe,
  Smartphone,
  Users,
  Building,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Activity,
  Code,
  Smartphone as MobileIcon,
  Wallet,
  FileText,
  Calculator,
  BarChart3,
  Lock,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const [activeTab, setActiveTab] = useState("core");

  const coreServices = [
    {
      icon: Wallet,
      title: "Money Transfer",
      description: "Send money globally with competitive rates and instant processing. Secure, fast, and reliable transfers worldwide.",
      features: ["Instant transfers", "Competitive rates", "Global coverage"],
      stats: "3Cr+",
      statsLabel: "Monthly Transfers",
      buttonText: "Transfer Now",
      buttonColor: "bg-primary-600 hover:bg-primary-700",
    },
    {
      icon: FileText,
      title: "Bill Payment",
      description: "Pay utilities, services, and bills online with ease. Schedule payments and never miss a due date again.",
      features: ["Auto-pay options", "Bill reminders", "Multiple providers"],
      stats: "5L+",
      statsLabel: "Bills Paid Monthly",
      buttonText: "Pay Bills",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Smartphone,
      title: "Mobile Recharge",
      description: "Top up mobile phones instantly with support for all major carriers. Quick, convenient, and secure.",
      features: ["All carriers", "Instant recharge", "Special offers"],
      stats: "2L+",
      statsLabel: "Recharges Daily",
      buttonText: "Recharge Now",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  const businessSolutions = [
    {
      icon: Users,
      title: "B2C Solutions",
      description: "Direct sales portals that facilitate seamless transactions between businesses and consumers with intuitive interfaces.",
      stats: "15K+",
      statsLabel: "Business Partners",
      buttonText: "Learn More",
    },
    {
      icon: Building,
      title: "B2B Platform",
      description: "Enterprise-grade solutions enabling businesses to trade goods and services efficiently with advanced features.",
      stats: "500+",
      statsLabel: "Enterprise Clients",
      buttonText: "Learn More",
    },
    {
      icon: Shield,
      title: "Trusted by 50k+",
      description: "Join thousands of satisfied customers who trust our platform for secure and reliable digital payment solutions.",
      stats: "99.8%",
      statsLabel: "Customer Satisfaction",
      buttonText: "Learn More",
    },
    {
      icon: MobileIcon,
      title: "Mobile Ready",
      description: "Fully optimized mobile applications and responsive design ensuring seamless experiences across all devices.",
      stats: "2M+",
      statsLabel: "App Downloads",
      buttonText: "Learn More",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Payments",
      description: "Process payments in real-time with lightning-fast transaction speeds. Instant settlements and immediate confirmations for superior user experience.",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade encryption and multi-layer security protocols ensure every transaction is protected with the highest industry standards.",
    },
    {
      icon: Users,
      title: "Seamless Onboarding",
      description: "Get started in minutes with our intuitive setup process. Simple integration and comprehensive documentation make implementation effortless.",
    },
    {
      icon: Clock,
      title: "Faster Settlements",
      description: "Accelerated settlement times with automated reconciliation and instant fund availability.",
    },
    {
      icon: BarChart3,
      title: "Dispute Resolution",
      description: "Streamlined dispute management system with automated workflows and quick resolution processes.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Infrastructure that grows with your business, handling millions of transactions with ease.",
    },
    {
      icon: Activity,
      title: "User-Friendly Processes",
      description: "Intuitive interfaces and simplified workflows designed for optimal user experience.",
    },
    {
      icon: Code,
      title: "Real-Time Tracking",
      description: "Monitor transactions, analytics, and performance metrics with live dashboards and reporting.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Why Choose WesternPay
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Experience the next generation of digital payments
          </h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            Comprehensive payment solutions tailored to meet diverse business and personal needs. 
            Our platform is designed for businesses of all sizes with cutting-edge technology and enterprise-grade security.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Comprehensive digital payment solutions for all your financial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {coreServices.map((service, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-navy">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-brand-gray leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      {service.stats}
                    </div>
                    <div className="text-sm text-brand-gray">
                      {service.statsLabel}
                    </div>
                  </div>
                  
                  {service.features && (
                    <ul className="text-left mb-6 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-brand-gray">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <Button className={`w-full ${service.buttonColor} text-white`}>
                    {service.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Business Solutions
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Enterprise-grade solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessSolutions.map((solution, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-brand-navy">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-brand-gray text-sm leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="text-xl font-bold text-primary-600 mb-1">
                      {solution.stats}
                    </div>
                    <div className="text-xs text-brand-gray">
                      {solution.statsLabel}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                    {solution.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Comprehensive Features
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Discover the powerful features that make WesternPay the preferred choice for businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-brand-navy">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-gray text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary-600 to-brand-teal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using WesternPay for their payment needs. 
            Get started today and experience the future of digital payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 text-lg font-semibold">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
