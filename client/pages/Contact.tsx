import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background pt-20">
      {/* Header Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-brand-navy lg:text-5xl mb-6">
              Contact
            </h1>
            <p className="text-lg leading-8 text-brand-gray">
              Get in touch with our team to learn more about DekainPay
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/30 to-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-primary-100">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy mb-8 text-center">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-brand-navy font-medium">
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
                <Label htmlFor="email" className="text-brand-navy font-medium">
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
      </section>
    </div>
  );
}
