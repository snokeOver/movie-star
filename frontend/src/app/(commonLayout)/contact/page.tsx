import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/modules/contact/ContactForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | MovieRent",
  description:
    "Get in touch with our team for any questions or support regarding movie rentals.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our movie rental service? Our team is here to
            help. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <ContactForm />
            </div>
          </div>

          <div>
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
              <div className="aspect-video bg-muted rounded-md overflow-hidden mb-6">
                <Image
                  src="/location.png"
                  width={500}
                  height={500}
                  alt="Map location of MovieRent headquarters"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">
                      123 Cinema Boulevard
                      <br />
                      Hollywood, CA 90028
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      support@movierent.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 PM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Can't find what you're looking for? Check our{" "}
            <a href="/faq" className="text-primary hover:underline">
              FAQ page
            </a>{" "}
            or contact us directly.
          </p>
        </div>
      </div>
    </div>
  );
}
