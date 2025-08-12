import { useState } from "react";
import { Plus, Minus, HelpCircle, Shield, CreditCard, Smartphone, Globe, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const faqs: FAQItem[] = [
    // Account & Security
    {
      question: "How do I create a WesternPay account?",
      answer: "Creating a WesternPay account is simple. Visit our website and click 'Sign Up' to register with your email address, phone number, and create a secure password. You'll need to verify your email and phone number to complete the registration process.",
      category: "account"
    },
    {
      question: "Is my money safe with WesternPay?",
      answer: "Yes, your money is completely safe. We use bank-grade encryption and follow strict security protocols. All transactions are protected by multiple layers of security, and we're regulated by financial authorities to ensure the highest standards of safety.",
      category: "security"
    },
    {
      question: "What should I do if I forget my password?",
      answer: "If you forget your password, click 'Forgot Password' on the login page. We'll send a secure link to your registered email address where you can reset your password. You can also contact our 24/7 customer support for assistance.",
      category: "account"
    },
    {
      question: "How do I enable two-factor authentication?",
      answer: "Go to your account settings and select 'Security'. You can enable two-factor authentication using SMS, email, or authenticator apps. This adds an extra layer of security to protect your account.",
      category: "security"
    },
    // Money Transfer
    {
      question: "How long does a money transfer take?",
      answer: "Most domestic transfers are instant or completed within minutes. International transfers typically take 1-3 business days depending on the destination country and transfer method. You'll receive real-time updates on your transfer status.",
      category: "transfer"
    },
    {
      question: "What are the transfer limits?",
      answer: "Transfer limits vary based on your account type and verification level. Basic accounts have daily limits of ₹50,000, while verified accounts can transfer up to ₹10,00,000 daily. Business accounts have higher limits based on requirements.",
      category: "transfer"
    },
    {
      question: "Can I cancel a money transfer?",
      answer: "You can cancel a transfer within 30 minutes of initiating it if it hasn't been processed yet. Once processed, cancellation depends on the recipient bank's policies. Contact our support team immediately if you need to cancel a transfer.",
      category: "transfer"
    },
    {
      question: "What currencies do you support?",
      answer: "We support transfers in over 50 currencies including USD, EUR, GBP, INR, CAD, AUD, and many more. Exchange rates are updated in real-time and are among the most competitive in the market.",
      category: "transfer"
    },
    // Bill Payments
    {
      question: "Which bill payments are supported?",
      answer: "We support payments for electricity, water, gas, mobile, broadband, DTH, insurance premiums, credit cards, and many other utilities. You can also set up automatic payments to never miss a due date.",
      category: "bills"
    },
    {
      question: "How do I set up automatic bill payments?",
      answer: "Go to 'Bill Payments' in your account, select the biller, and choose 'Auto Pay'. You can set up recurring payments with your preferred payment method and schedule. You'll receive notifications before each payment.",
      category: "bills"
    },
    {
      question: "What if my bill payment fails?",
      answer: "If a payment fails, we'll notify you immediately. Check your payment method and try again. If the issue persists, contact our support team. We'll help you resolve the issue and ensure your payment goes through.",
      category: "bills"
    },
    // Mobile Recharge
    {
      question: "Which mobile operators are supported?",
      answer: "We support all major mobile operators in India including Airtel, Jio, Vi, BSNL, MTNL, and regional operators. You can recharge prepaid numbers and pay postpaid bills for all supported operators.",
      category: "recharge"
    },
    {
      question: "How quickly is mobile recharge processed?",
      answer: "Mobile recharges are processed instantly. You'll receive confirmation within seconds, and the recharge amount will be credited to your mobile number immediately. You'll also get an SMS confirmation from your operator.",
      category: "recharge"
    },
    {
      question: "Can I recharge international numbers?",
      answer: "Currently, we support recharges for Indian mobile numbers only. For international recharges, you can use our money transfer service to send money to family and friends abroad.",
      category: "recharge"
    },
    // Business Services
    {
      question: "How do I integrate WesternPay into my business?",
      answer: "We offer easy-to-integrate APIs and SDKs for businesses. Our technical team will help you with integration, testing, and go-live support. We also provide comprehensive documentation and developer resources.",
      category: "business"
    },
    {
      question: "What are the transaction fees for businesses?",
      answer: "Business transaction fees are competitive and based on your transaction volume. We offer volume-based pricing with no hidden charges. Contact our business team for a customized pricing plan for your business needs.",
      category: "business"
    },
    {
      question: "Do you provide business analytics and reporting?",
      answer: "Yes, we provide comprehensive analytics and reporting tools. You can track transactions, generate reports, analyze customer behavior, and get insights to grow your business. All data is available in real-time through our dashboard.",
      category: "business"
    },
    // Technical Support
    {
      question: "How can I contact customer support?",
      answer: "Our customer support is available 24/7. You can reach us through live chat on our website, email at support@westernpay.in, or call our toll-free number 1800-WESTERN. We also have a comprehensive help center with detailed guides.",
      category: "support"
    },
    {
      question: "What are your customer support hours?",
      answer: "Our customer support is available 24/7, 365 days a year. Whether you need help at 2 AM or 2 PM, our team is always ready to assist you with any questions or issues you may have.",
      category: "support"
    },
    {
      question: "Do you have a mobile app?",
      answer: "Yes, we have mobile apps for both iOS and Android devices. Download our app from the App Store or Google Play Store to access all WesternPay features on the go. The app offers the same security and features as our web platform.",
      category: "support"
    }
  ];

  const categories = [
    { id: "all", name: "All FAQs", icon: HelpCircle },
    { id: "account", name: "Account & Security", icon: Shield },
    { id: "transfer", name: "Money Transfer", icon: CreditCard },
    { id: "bills", name: "Bill Payments", icon: Smartphone },
    { id: "recharge", name: "Mobile Recharge", icon: Smartphone },
    { id: "business", name: "Business Services", icon: Users },
    { id: "support", name: "Support", icon: HelpCircle },
  ];

  const filteredFAQs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Frequently Asked Questions
            </h1>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about WesternPay services, account management, 
            and payment solutions. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-primary-600 text-white shadow-lg"
                      : "bg-white text-brand-gray hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <button
                    className="w-full text-left flex justify-between items-center hover:text-primary-600 transition-colors duration-200"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <CardTitle className="text-lg font-semibold text-brand-navy pr-4">
                      {faq.question}
                    </CardTitle>
                    {openFAQ === index ? (
                      <Minus className="h-5 w-5 text-primary-500 flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary-500 flex-shrink-0" />
                    )}
                  </button>
                </CardHeader>
                {openFAQ === index && (
                  <CardContent className="pt-0">
                    <p className="text-brand-gray leading-relaxed animate-fade-in">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Contact Support CTA */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-primary-600 to-brand-teal border-0">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Still have questions?
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Our customer support team is here to help you 24/7. 
                  Get in touch with us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Contact Support
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Live Chat
                  </button>
              </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
