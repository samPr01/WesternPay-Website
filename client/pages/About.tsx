import { Zap, Shield, UserCheck } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background pt-20">
      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
              About Us
            </h2>
            <p className="text-lg leading-8 text-brand-gray">
              DekainPay revolutionizes digital payments with cutting-edge
              technology, seamless user experiences, and enterprise-grade
              security. Transform how your business handles transactions with
              our innovative fintech solutions designed for the modern economy.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-brand-gray">
              Comprehensive payment solutions tailored to your business needs
            </p>
          </div>
          <div className="mx-auto max-w-6xl">
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
    </div>
  );
}
