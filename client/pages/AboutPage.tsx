import { Zap, Shield, UserCheck, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background pt-20">
      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-brand-navy lg:text-5xl mb-6">
              About DekainPay
            </h1>
            <p className="text-lg leading-8 text-brand-gray mb-16">
              DekainPay revolutionizes digital payments with cutting-edge
              technology, seamless user experiences, and enterprise-grade
              security. Transform how your business handles transactions with
              our innovative fintech solutions designed for the modern economy.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg border border-primary-100">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Our Mission
              </h3>
              <p className="text-brand-gray leading-relaxed">
                To empower businesses worldwide with cutting-edge payment
                solutions that simplify financial transactions, enhance
                security, and drive growth. We believe that every business,
                regardless of size, deserves access to enterprise-grade payment
                infrastructure.
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-teal/10 to-white p-8 rounded-2xl shadow-lg border border-brand-teal/20">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Our Vision
              </h3>
              <p className="text-brand-gray leading-relaxed">
                To become the global leader in financial technology, creating a
                world where payments are instant, secure, and effortless. We
                envision a future where geographical boundaries don't limit
                business growth and where every transaction contributes to
                economic prosperity.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-gray">
                Comprehensive payment solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400 to-brand-teal rounded-full translate-x-8 -translate-y-8 opacity-20"></div>
                <Zap className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-3">
                  Instant Payment
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  Process payments in real-time with lightning-fast transaction
                  speeds. Instant settlements and immediate confirmations for
                  superior user experience.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-teal/10 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-teal/20">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-teal to-primary-400 rounded-full translate-x-8 -translate-y-8 opacity-20"></div>
                <Shield className="h-12 w-12 text-brand-teal mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-3">
                  Secure Transaction
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  Bank-grade encryption and multi-layer security protocols
                  ensure every transaction is protected with the highest
                  industry standards.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400 to-brand-teal rounded-full translate-x-8 -translate-y-8 opacity-20"></div>
                <UserCheck className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-3">
                  Seamless Onboarding
                </h3>
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

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/30 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
              Why Choose DekainPay?
            </h2>
            <p className="text-lg leading-8 text-brand-gray">
              We combine innovative technology with unmatched reliability to
              deliver superior payment experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">
                    99.9% Uptime Guarantee
                  </h4>
                  <p className="text-brand-gray">
                    Reliable service with minimal downtime, ensuring your
                    business never misses a payment.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">
                    Global Reach
                  </h4>
                  <p className="text-brand-gray">
                    Accept payments from 190+ countries with multi-currency
                    support and localized payment methods.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">
                    24/7 Customer Support
                  </h4>
                  <p className="text-brand-gray">
                    Round-the-clock assistance from our expert support team
                    whenever you need help.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">
                    Developer-Friendly APIs
                  </h4>
                  <p className="text-brand-gray">
                    Comprehensive APIs and SDKs with detailed documentation for
                    seamless integration.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">
                    Competitive Pricing
                  </h4>
                  <p className="text-brand-gray">
                    Transparent pricing with no hidden fees, designed to scale
                    with your business growth.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">
                    Enterprise Security
                  </h4>
                  <p className="text-brand-gray">
                    Bank-grade encryption and compliance with global financial
                    regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
            Get in Touch
          </h2>
          <p className="text-lg leading-8 text-brand-gray mb-8">
            Ready to transform your payment infrastructure? Contact us today to
            learn more about DekainPay solutions.
          </p>
          <div className="bg-primary-50 rounded-2xl p-8">
            <div className="space-y-4">
              <p className="text-brand-navy font-medium">
                Email: info@dekainpay.com
              </p>
              <p className="text-brand-navy font-medium">
                Address: 213, Diamond Trading Centre, New Palasia, Indore 452001
                (MP) India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
