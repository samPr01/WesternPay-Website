import { Shield, Lock, Eye, Users, FileText, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  const lastUpdated = "December 8, 2024";

  const sections = [
    {
      title: "Information We Collect",
      icon: FileText,
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, make a transaction, or contact our support team. This may include your name, email address, phone number, date of birth, address, and government-issued identification documents."
        },
        {
          subtitle: "Transaction Information",
          text: "We collect information about your transactions, including payment method details, transaction amounts, recipient information, and transaction history to provide our services and comply with regulatory requirements."
        },
        {
          subtitle: "Device and Usage Information",
          text: "We automatically collect information about your device and how you interact with our services, including IP address, browser type, operating system, device identifiers, and usage patterns."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our payment services, process transactions, verify your identity, and ensure compliance with applicable laws and regulations."
        },
        {
          subtitle: "Communication",
          text: "We use your contact information to send you important updates about your account, transaction confirmations, security alerts, and customer support communications."
        },
        {
          subtitle: "Security and Fraud Prevention",
          text: "We use your information to detect, prevent, and investigate fraudulent activities, security breaches, and other potentially prohibited or illegal activities."
        }
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      icon: Shield,
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our platform, processing payments, providing customer support, and conducting business operations."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law, regulation, legal process, or government request, or to protect our rights, property, or safety, or that of our users or the public."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to the same privacy protections outlined in this policy."
        }
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your personal information, including encryption, secure servers, access controls, and regular security assessments."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements."
        },
        {
          subtitle: "Data Breach Response",
          text: "In the event of a data breach, we will notify affected users and relevant authorities as required by law, and take appropriate steps to mitigate any potential harm."
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      icon: Eye,
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information through your account settings or by contacting our support team."
        },
        {
          subtitle: "Data Portability",
          text: "You may request a copy of your personal information in a structured, machine-readable format for transfer to another service provider."
        },
        {
          subtitle: "Deletion",
          text: "You may request deletion of your personal information, subject to our legal obligations to retain certain data for regulatory compliance and fraud prevention."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Privacy & Security
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed mb-8">
            At WesternPay, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-brand-gray">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                Introduction
              </h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                WesternPay ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our payment services, website, and mobile applications.
              </p>
              <p className="text-brand-gray leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </CardContent>
          </Card>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-brand-navy">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3 className="text-lg font-semibold text-brand-navy mb-2">
                          {item.subtitle}
                        </h3>
                        <p className="text-brand-gray leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Information */}
          <Card className="mt-8 border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                Additional Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    Cookies and Tracking Technologies
                  </h3>
                  <p className="text-brand-gray leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, 
                    and provide personalized content. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    International Data Transfers
                  </h3>
                  <p className="text-brand-gray leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place to protect your data in accordance with applicable laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    Children's Privacy
                  </h3>
                  <p className="text-brand-gray leading-relaxed">
                    Our services are not intended for children under 18 years of age. We do not knowingly collect 
                    personal information from children under 18. If you believe we have collected such information, 
                    please contact us immediately.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    Changes to This Policy
                  </h3>
                  <p className="text-brand-gray leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                    the new policy on this page and updating the "Last updated" date. We encourage you to review this 
                    policy periodically.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8 bg-gradient-to-r from-primary-600 to-brand-teal border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact our privacy team.
              </p>
              <div className="space-y-2 text-blue-100">
                <p>Email: privacy@westernpay.in</p>
                <p>Phone: 1800-WESTERN</p>
                <p>Address: 213, Diamond Trading Centre, New Palasia, Indore 452001 (MP) India</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
