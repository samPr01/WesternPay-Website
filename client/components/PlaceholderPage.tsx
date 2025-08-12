import { ArrowRight, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background pt-20">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Construction className="mx-auto h-16 w-16 text-primary-500 mb-8" />
        <h1 className="text-4xl font-bold tracking-tight text-brand-navy lg:text-5xl mb-6">
          {title}
        </h1>
        <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary-100 max-w-lg mx-auto">
          <h3 className="text-xl font-semibold text-brand-navy mb-4">
            Coming Soon
          </h3>
          <p className="text-brand-gray mb-6">
            This page is currently under development. We're working hard to
            bring you comprehensive information about DekainPay's capabilities.
          </p>
          <Button className="bg-primary-500 hover:bg-primary-600 text-white w-full">
            Continue to Explore
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
