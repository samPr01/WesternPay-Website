import React from "react";
import { RotateCcw, X, Clock, AlertTriangle, CheckCircle, FileText, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RefundsCancellation() {
  const lastUpdated = "December 8, 2024";

  const refundPolicies = [
    {
      service: "Money Transfers",
      icon: RotateCcw,
      description: "Domestic and international money transfer refund policies",
      policies: [
        "Cancellation within 30 minutes of initiation: Full refund",
        "After 30 minutes but before processing: Partial refund (minus processing fees)",
        "After processing: Refund depends on recipient bank policies",
        "Failed transfers: Automatic refund within 3-5 business days"
      ]
    },
    {
      service: "Bill Payments",
      icon: FileText,
      description: "Utility and service bill payment refund policies",
      policies: [
        "Successful payments: No refunds (payments are final)",
        "Failed payments: Automatic refund within 24-48 hours",
        "Duplicate payments: Refund of duplicate amount within 3-5 days",
        "Wrong biller payments: Case-by-case review required"
      ]
    },
    {
      service: "Mobile Recharge",
      icon: Phone,
      description: "Mobile recharge and DTH payment refund policies",
      policies: [
        "Successful recharges: No refunds (recharges are final)",
        "Failed recharges: Automatic refund within 2-4 hours",
        "Wrong number recharges: No refunds (user responsibility)",
        "Operator issues: Refund processed after operator confirmation"
      ]
    }
  ];

  const cancellationProcess = [
    {
      step: "1",
      title: "Initiate Cancellation",
      description: "Log into your account and navigate to the transaction you wish to cancel. Click on the 'Cancel' button if available.",
      icon: X
    },
    {
      step: "2",
      title: "Review Terms",
      description: "Review the cancellation terms and any applicable fees. Confirm that you understand the refund timeline and process.",
      icon: FileText
    },
    {
      step: "3",
      title: "Submit Request",
      description: "Submit your cancellation request. You'll receive a confirmation email with a reference number for tracking.",
      icon: CheckCircle
    },
    {
      step: "4",
      title: "Processing",
      description: "We'll process your cancellation request within the specified timeframe and notify you of the outcome.",
      icon: Clock
    }
  ];

  const refundTimelines = [
    {
      type: "Instant Refunds",
      timeframe: "Within 24 hours",
      description: "For cancellations made within 30 minutes of transaction initiation",
      icon: Clock
    },
    {
      type: "Standard Refunds",
      timeframe: "3-5 business days",
      description: "For most refund requests and failed transactions",
      icon: RotateCcw
    },
    {
      type: "Complex Cases",
      timeframe: "7-10 business days",
      description: "For disputed transactions or cases requiring investigation",
      icon: AlertTriangle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <RotateCcw className="w-4 h-4 mr-2" />
            Refunds & Cancellations
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Refunds & Cancellation Policy
          </h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed mb-8">
            At WesternPay, we understand that sometimes you may need to cancel a transaction or request a refund. 
            This policy outlines our procedures and timelines for refunds and cancellations.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-brand-gray">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Policies */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              Refund Policies by Service
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Different services have different refund policies based on their nature and processing requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {refundPolicies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-brand-navy">
                      {policy.service}
                    </CardTitle>
                    <p className="text-brand-gray text-sm">
                      {policy.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {policy.policies.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3 text-sm text-brand-gray">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Cancellation Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">
                How to Cancel a Transaction
              </h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                Follow these simple steps to cancel a transaction and request a refund.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cancellationProcess.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg text-center">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-bold text-lg">{step.step}</span>
                      </div>
                      <CardTitle className="text-lg font-bold text-brand-navy">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-brand-gray text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Refund Timelines */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">
                Refund Timelines
              </h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                Understanding how long it takes to process your refund based on the type of transaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {refundTimelines.map((timeline, index) => {
                const Icon = timeline.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg text-center">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-brand-navy">
                        {timeline.type}
                      </CardTitle>
                      <div className="text-2xl font-bold text-primary-600">
                        {timeline.timeframe}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-brand-gray text-sm leading-relaxed">
                        {timeline.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Important Information */}
          <Card className="mb-16 border-0 shadow-lg bg-yellow-50 border-l-4 border-yellow-400">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-4">
                    Important Information
                  </h3>
                  <div className="space-y-3 text-brand-gray">
                    <p>
                      • <strong>Processing Fees:</strong> Some transactions may incur processing fees that are non-refundable.
                    </p>
                    <p>
                      • <strong>Bank Processing:</strong> Refunds to bank accounts may take additional time based on your bank's processing schedule.
                    </p>
                    <p>
                      • <strong>Currency Conversion:</strong> For international transactions, refunds will be processed in the original currency at current exchange rates.
                    </p>
                    <p>
                      • <strong>Fraud Prevention:</strong> We reserve the right to investigate suspicious transactions before processing refunds.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="bg-gradient-to-r from-primary-600 to-brand-teal border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need Help with a Refund?
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                If you have questions about refunds or need assistance with a cancellation, 
                our support team is here to help you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 font-semibold">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Support
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Support
                </Button>
              </div>
              <div className="mt-6 text-blue-100 text-sm">
                <p>Support Hours: 24/7</p>
                <p>Email: support@westernpay.in | Phone: 1800-WESTERN</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
