import { useState, useEffect } from "react";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Users,
  CheckCircle,
  UserCheck,
  Clock,
  Scale,
  Layers,
  User,
  Activity,
  Code,
  Plus,
  Minus,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-primary-100 last:border-b-0">
    <button
      className="w-full py-6 text-left flex justify-between items-center hover:text-primary-600 transition-colors duration-200"
      onClick={onToggle}
    >
      <span className="text-lg font-semibold text-brand-navy pr-4">
        {question}
      </span>
      {isOpen ? (
        <Minus className="h-5 w-5 text-primary-500 flex-shrink-0" />
      ) : (
        <Plus className="h-5 w-5 text-primary-500 flex-shrink-0" />
      )}
    </button>
    {isOpen && (
      <div className="pb-6 text-brand-gray leading-relaxed animate-fade-in">
        {answer}
      </div>
    )}
  </div>
);

export default function Index() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle hash navigation when component mounts or hash changes
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Extract just the hash fragment, removing any query parameters
      const cleanHash = hash.split("?")[0].split("&")[0];
      if (cleanHash && cleanHash.startsWith("#")) {
        setTimeout(() => {
          const element = document.querySelector(cleanHash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          data: formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully! We will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(
          "Failed to send message. Please try again or contact us directly.",
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again or contact us directly.");
    }
  };

  const faqs = [
    {
      question: "How quickly can I start processing payments with DekainPay?",
      answer:
        "With our seamless onboarding process, you can start processing payments within 24 hours. Our quick setup wizard guides you through account verification, integration, and testing, ensuring you're ready to accept payments with minimal downtime.",
    },
    {
      question: "What security measures does DekainPay implement?",
      answer:
        "DekainPay employs bank-grade encryption, multi-factor authentication, PCI DSS compliance, and advanced fraud detection algorithms. All transactions are processed through secure, encrypted channels with real-time monitoring to protect against threats.",
    },
    {
      question: "Which payment methods and currencies does DekainPay support?",
      answer:
        "We support all major payment methods including credit/debit cards, digital wallets, bank transfers, and cryptocurrency. DekainPay processes transactions in 190+ countries with support for multiple currencies and automatic conversion.",
    },
    {
      question: "How does DekainPay's pricing structure work?",
      answer:
        "DekainPay offers transparent, competitive pricing with no hidden fees. Our rates are based on transaction volume with discounts for high-volume merchants. Contact our sales team for custom enterprise pricing tailored to your business needs.",
    },
    {
      question: "Can DekainPay integrate with my existing business systems?",
      answer:
        "Yes! DekainPay provides comprehensive APIs, SDKs, and pre-built integrations for popular platforms like Shopify, WooCommerce, and enterprise ERPs. Our developer-friendly documentation makes integration straightforward.",
    },
    {
      question: "What kind of support does DekainPay provide?",
      answer:
        "We offer 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team includes technical specialists who can assist with integration, troubleshooting, and optimization.",
    },
  ];

  const detailedFeatures = [
    {
      icon: Zap,
      title: "Instant Payments",
      description:
        "Process payments in real-time with lightning-fast transaction speeds. Instant settlements and immediate confirmations for superior user experience.",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description:
        "Bank-grade encryption and multi-layer security protocols ensure every transaction is protected with the highest industry standards.",
    },
    {
      icon: UserCheck,
      title: "Seamless Onboarding",
      description:
        "Get started in minutes with our intuitive setup process. Simple integration and comprehensive documentation make implementation effortless.",
    },
    {
      icon: Clock,
      title: "Faster Settlements",
      description:
        "Accelerated settlement times with automated reconciliation and instant fund availability.",
    },
    {
      icon: Scale,
      title: "Dispute Resolution",
      description:
        "Streamlined dispute management system with automated workflows and comprehensive tracking.",
    },
    {
      icon: Layers,
      title: "Scalable Solutions",
      description:
        "Infrastructure that grows with your business, handling millions of transactions seamlessly.",
    },
    {
      icon: User,
      title: "User-Friendly Processes",
      description:
        "Intuitive interfaces and simplified workflows designed for optimal user experience.",
    },
    {
      icon: Activity,
      title: "Real-Time Tracking",
      description:
        "Monitor transactions, analytics, and performance metrics with live dashboards and alerts.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background">
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden px-6 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-brand-teal/5 to-primary-600/10 animate-gradient-x"></div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight text-brand-navy lg:text-6xl">
                The Future of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-brand-teal">
                  Financial Technology
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-brand-gray max-w-xl">
                DekainPay revolutionizes digital payments with cutting-edge
                technology, seamless user experiences, and enterprise-grade
                security. Transform how your business handles transactions.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative lg:ml-10 animate-slide-in-left">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-primary-400 to-brand-teal rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 -right-4 w-72 h-72 bg-gradient-to-r from-brand-teal to-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-primary-100">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-brand-navy">
                        Payment Dashboard
                      </h3>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-primary-100 rounded-full w-3/4"></div>
                      <div className="h-3 bg-primary-200 rounded-full w-1/2"></div>
                      <div className="h-3 bg-primary-100 rounded-full w-5/6"></div>
                    </div>
                    <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-brand-teal/10 rounded-xl">
                      <div className="text-2xl font-bold text-primary-600">
                        $2.4M
                      </div>
                      <div className="text-sm text-brand-gray">
                        Monthly Volume
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl">
              Why Choose DekainPay?
            </h2>
            <p className="mt-4 text-lg leading-8 text-brand-gray">
              Built for the modern economy with features that scale with your
              business
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400 to-brand-teal rounded-full translate-x-8 -translate-y-8 opacity-20"></div>
                <Shield className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-3">
                  Enterprise Security
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  Bank-grade encryption, multi-factor authentication, and
                  compliance with global financial regulations ensure your data
                  is always protected.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-teal/10 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-teal/20">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-teal to-primary-400 rounded-full translate-x-8 -translate-y-8 opacity-20"></div>
                <Zap className="h-12 w-12 text-brand-teal mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-3">
                  Lightning Fast
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  Process payments in milliseconds with our optimized
                  infrastructure. Real-time transactions and instant settlement
                  capabilities.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400 to-brand-teal rounded-full translate-x-8 -translate-y-8 opacity-20"></div>
                <Globe className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-3">
                  Global Reach
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  Accept payments from 190+ countries with multi-currency
                  support and localized payment methods for international
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-navy to-primary-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white lg:text-5xl">
                $50B+
              </div>
              <div className="mt-2 text-primary-200">Transaction Volume</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white lg:text-5xl">
                99.9%
              </div>
              <div className="mt-2 text-primary-200">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white lg:text-5xl">
                10M+
              </div>
              <div className="mt-2 text-primary-200">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white lg:text-5xl">
                190+
              </div>
              <div className="mt-2 text-primary-200">Countries Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
                Built for Scale, Designed for Simplicity
              </h2>
              <p className="text-lg text-brand-gray mb-8">
                DekainPay combines powerful enterprise features with intuitive
                design. Our platform grows with your business, from startup to
                enterprise.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-navy">
                      Smart Analytics
                    </h4>
                    <p className="text-brand-gray">
                      Real-time insights and detailed reporting to optimize your
                      payment flows
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-navy">
                      Developer First
                    </h4>
                    <p className="text-brand-gray">
                      Comprehensive APIs and SDKs for seamless integration
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-navy">
                      24/7 Support
                    </h4>
                    <p className="text-brand-gray">
                      Expert support team available around the clock
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-brand-teal rounded-3xl rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-primary-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-brand-navy">
                      Transaction Analytics
                    </h3>
                    <TrendingUp className="h-5 w-5 text-brand-teal" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-brand-gray">
                        Success Rate
                      </span>
                      <span className="text-sm font-semibold text-brand-teal">
                        99.8%
                      </span>
                    </div>
                    <div className="w-full bg-primary-100 rounded-full h-2">
                      <div className="bg-gradient-to-r from-brand-teal to-primary-500 h-2 rounded-full w-[99.8%]"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-brand-gray">
                        Processing Time
                      </span>
                      <span className="text-sm font-semibold text-primary-600">
                        0.3s avg
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-primary-50 rounded-xl">
                        <div className="text-2xl font-bold text-primary-600">
                          156K
                        </div>
                        <div className="text-xs text-brand-gray">Today</div>
                      </div>
                      <div className="text-center p-4 bg-brand-teal/10 rounded-xl">
                        <div className="text-2xl font-bold text-brand-teal">
                          4.2M
                        </div>
                        <div className="text-xs text-brand-gray">
                          This Month
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
              About Us
            </h2>
            <p className="text-lg leading-8 text-brand-gray mb-16">
              DekainPay revolutionizes digital payments with cutting-edge
              technology, seamless user experiences, and enterprise-grade
              security. Transform how your business handles transactions with
              our innovative fintech solutions designed for the modern economy.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h3 className="text-2xl font-bold tracking-tight text-brand-navy lg:text-3xl">
                Our Services
              </h3>
              <p className="mt-4 text-lg leading-8 text-brand-gray">
                Comprehensive payment solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400 to-brand-teal rounded-full translate-x-8 -translate-y-8 opacity-20"></div>
                <Zap className="h-12 w-12 text-primary-500 mb-4" />
                <h4 className="text-xl font-semibold text-brand-navy mb-3">
                  Instant Payment
                </h4>
                <p className="text-brand-gray leading-relaxed">
                  Process payments in real-time with lightning-fast transaction
                  speeds. Instant settlements and immediate confirmations for
                  superior user experience.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-teal/10 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-teal/20">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-teal to-primary-400 rounded-full translate-x-8 -translate-y-8 opacity-20"></div>
                <Shield className="h-12 w-12 text-brand-teal mb-4" />
                <h4 className="text-xl font-semibold text-brand-navy mb-3">
                  Secure Transaction
                </h4>
                <p className="text-brand-gray leading-relaxed">
                  Bank-grade encryption and multi-layer security protocols
                  ensure every transaction is protected with the highest
                  industry standards.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400 to-brand-teal rounded-full translate-x-8 -translate-y-8 opacity-20"></div>
                <UserCheck className="h-12 w-12 text-primary-500 mb-4" />
                <h4 className="text-xl font-semibold text-brand-navy mb-3">
                  Seamless Onboarding
                </h4>
                <p className="text-brand-gray leading-relaxed">
                  Get started in minutes with our intuitive setup process.
                  Simple integration and comprehensive documentation make
                  implementation effortless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section
        id="features"
        className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/30 to-background"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
              Comprehensive Features
            </h2>
            <p className="text-lg leading-8 text-brand-gray">
              Discover the powerful features that make DekainPay the preferred
              choice for businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {detailedFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-400/20 to-brand-teal/20 rounded-full translate-x-6 -translate-y-6"></div>
                <feature.icon className="h-10 w-10 text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-brand-navy mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-brand-gray leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg leading-8 text-brand-gray">
              Get answers to common questions about DekainPay's features,
              security, and implementation.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-primary-100 overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/30 to-background"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
              Contact Us
            </h2>
            <p className="text-lg leading-8 text-brand-gray">
              Get in touch with our team to learn more about DekainPay
              solutions.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary-100">
                  <h3 className="text-2xl font-bold text-brand-navy mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-brand-navy mb-1">
                          Email
                        </h4>
                        <p className="text-brand-gray break-all">
                          info@dekainpay.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-brand-navy mb-1">
                          Address
                        </h4>
                        <p className="text-brand-gray leading-relaxed">
                          213, Diamond Trading Centre
                          <br />
                          New Palasia, Indore 474001 (MP) India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-primary-100">
                <h3 className="text-2xl font-bold text-brand-navy mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-brand-navy font-medium"
                      >
                        Your Name
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 border-primary-200 focus:border-primary-500 focus:ring-primary-500"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-brand-navy font-medium"
                      >
                        Your Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 border-primary-200 focus:border-primary-500 focus:ring-primary-500"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="subject"
                      className="text-brand-navy font-medium"
                    >
                      Subject
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 border-primary-200 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Enter the subject of your inquiry"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-brand-navy font-medium"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 border-primary-200 focus:border-primary-500 focus:ring-primary-500 min-h-[120px]"
                      placeholder="Enter your message or inquiry details"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
