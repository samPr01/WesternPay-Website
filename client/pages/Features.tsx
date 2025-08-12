import {
  Zap,
  Shield,
  Clock,
  Scale,
  Layers,
  User,
  Activity,
  Code,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";

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

export default function Features() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
    {
      question: "How does dispute resolution work with DekainPay?",
      answer:
        "Our automated dispute management system streamlines the entire process from initial notification to resolution. We provide comprehensive documentation, evidence collection tools, and work directly with card networks to resolve disputes efficiently.",
    },
    {
      question: "Is there a minimum transaction volume requirement?",
      answer:
        "No, DekainPay serves businesses of all sizes, from startups to enterprise corporations. Our scalable infrastructure grows with your business without minimum volume requirements or setup fees for small businesses.",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Payments",
      description:
        "Process payments in milliseconds with real-time settlement capabilities and immediate transaction confirmations.",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description:
        "Bank-grade encryption, multi-factor authentication, and advanced fraud detection protect every transaction.",
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
    {
      icon: Code,
      title: "API Support",
      description:
        "Comprehensive RESTful APIs, SDKs, and developer tools for seamless integration.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background pt-20">
      {/* Header Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-brand-navy lg:text-5xl mb-6">
              Check The Features
            </h1>
            <p className="text-lg leading-8 text-brand-gray">
              Discover the powerful features that make DekainPay the preferred
              choice for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/30 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-200"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
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

      {/* Transform Payments Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-brand-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl mb-6">
              Transform the Way You Handle Payments
            </h2>
            <p className="text-lg leading-8 text-primary-100 mb-8">
              At DekainPay, we empower businesses with cutting-edge payment
              solutions designed for speed, security, and simplicity. Whether
              you're processing customer transactions, managing payroll, or
              making vendor payments, our platform delivers the seamless
              experience you need to stay ahead. Enjoy real-time payments,
              enhanced fraud protection, and streamlined operations that help
              your business grow effortlessly. With our quick onboarding and
              multi-channel payment options, managing finances has never been
              easier.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div
                className="text-center animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-primary-200">Uptime Reliability</div>
              </div>
              <div
                className="text-center animate-slide-in-left"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-3xl font-bold text-white mb-2">
                  &lt;300ms
                </div>
                <div className="text-primary-200">Average Response Time</div>
              </div>
              <div
                className="text-center animate-slide-in-left"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-primary-200">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionizing Payments Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
                Revolutionizing Payments for a Smarter Business
              </h2>
              <p className="text-lg leading-8 text-brand-gray mb-6">
                Our platform ensures seamless integrations, real-time tracking,
                and unmatched security, so you can focus on growth without
                worrying about the details. Experience faster, smarter, and more
                reliable payments today with DekainPay.
              </p>
              <p className="text-lg leading-8 text-brand-gray">
                With DekainPay, you can automate repetitive tasks, streamline
                financial workflows, and gain valuable insights into your
                payment processes. Our user-friendly interface and powerful
                features enable businesses of all sizes to manage transactions
                effortlessly, while our robust support team is always ready to
                assist you.
              </p>
            </div>
            <div className="relative animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-brand-teal/20 rounded-3xl rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-primary-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-brand-navy">
                      Smart Analytics Dashboard
                    </h3>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-brand-gray">
                        Processing Speed
                      </span>
                      <span className="text-sm font-semibold text-brand-teal">
                        Lightning Fast
                      </span>
                    </div>
                    <div className="w-full bg-primary-100 rounded-full h-2">
                      <div className="bg-gradient-to-r from-brand-teal to-primary-500 h-2 rounded-full w-[95%] animate-pulse"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-brand-gray">
                        Security Level
                      </span>
                      <span className="text-sm font-semibold text-primary-600">
                        Enterprise Grade
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-primary-50 rounded-xl">
                        <div className="text-2xl font-bold text-primary-600 animate-pulse">
                          98.7%
                        </div>
                        <div className="text-xs text-brand-gray">
                          Success Rate
                        </div>
                      </div>
                      <div className="text-center p-4 bg-brand-teal/10 rounded-xl">
                        <div className="text-2xl font-bold text-brand-teal animate-pulse">
                          0.2s
                        </div>
                        <div className="text-xs text-brand-gray">
                          Avg Response
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

      {/* Empowering Business Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
              Empowering Your Business with Effortless Payments
            </h2>
            <p className="text-lg leading-8 text-brand-gray mb-8">
              DekainPay is designed to simplify your financial transactions
              while enhancing your business efficiency. With our seamless
              integrations, you can manage everything from instant payments to
              payroll and vendor payouts with ease. Our platform offers
              unmatched security, real-time tracking, and detailed analytics,
              giving you full visibility and control over your financial
              operations.
            </p>
            <p className="text-lg leading-8 text-brand-gray mb-12">
              Spend less time on manual tasks and more time driving growth,
              knowing that your payments are fast, secure, and fully optimized.
              Say goodbye to delays, complex systems, and security
              concerns—embrace a future where your payments are intelligent,
              automated, and designed for success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 animate-slide-in-left"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-400/20 to-brand-teal/20 rounded-full translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="text-3xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  10M+
                </div>
                <div className="text-sm text-brand-gray">
                  Transactions Daily
                </div>
              </div>

              <div
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-teal/20 to-primary-400/20 rounded-full translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="text-3xl font-bold text-brand-teal mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-sm text-brand-gray">
                  Enterprise Clients
                </div>
              </div>

              <div
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 animate-slide-in-left"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-400/20 to-brand-teal/20 rounded-full translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="text-3xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  190+
                </div>
                <div className="text-sm text-brand-gray">Countries Served</div>
              </div>

              <div
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 animate-slide-in-left"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-teal/20 to-primary-400/20 rounded-full translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="text-3xl font-bold text-brand-teal mb-2 group-hover:scale-110 transition-transform duration-300">
                  $50B+
                </div>
                <div className="text-sm text-brand-gray">Volume Processed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 lg:py-24 bg-white">
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
          <div className="text-center mt-12">
            <p className="text-brand-gray mb-6">
              Still have questions? Our support team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-200 rounded-xl text-primary-600 font-medium hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
