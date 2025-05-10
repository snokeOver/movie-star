import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const ExtraSection = () => {
  return (
    <div>
      {/* Team Section */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
          Meet Our Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              name: "Alex Johnson",
              role: "Founder & CEO",
              bio: "Film enthusiast with 15 years in digital media",
              image: "team-member-1",
            },
            {
              name: "Sarah Chen",
              role: "Chief Content Officer",
              bio: "Former film critic with a passion for storytelling",
              image: "team-member-2",
            },
            {
              name: "Marcus Williams",
              role: "Head of Technology",
              bio: "Tech innovator focused on seamless streaming experiences",
              image: "team-member-3",
            },
            {
              name: "Priya Patel",
              role: "Customer Experience Director",
              bio: "Dedicated to creating the best user journey possible",
              image: "team-member-4",
            },
          ].map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square w-full">
                <Image
                  src={"/about2.png"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How does Movie Star differ from other streaming services?
            </AccordionTrigger>
            <AccordionContent>
              Movie Star offers both subscription-based streaming and individual
              rentals, giving you more flexibility. We also focus exclusively on
              movies (not TV shows), allowing us to curate a deeper film library
              with more classics, indies, and international titles than general
              streaming platforms.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What devices can I watch Movie Star on?
            </AccordionTrigger>
            <AccordionContent>
              Movie Star is available on all major platforms including web
              browsers, iOS and Android mobile devices, smart TVs (Samsung, LG,
              Sony), streaming devices (Roku, Apple TV, Chromecast, Fire TV),
              and gaming consoles (PlayStation, Xbox).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How much does Movie Star cost?</AccordionTrigger>
            <AccordionContent>
              We offer several pricing tiers: Basic ($8.99/month), Premium
              ($12.99/month with 4K streaming), and Family ($15.99/month with
              multiple profiles). Individual rentals typically range from $3.99
              to $6.99 depending on the release date and popularity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can I download movies to watch offline?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Premium and Family subscribers can download movies for
              offline viewing on mobile devices. Downloads remain available for
              30 days and expire 48 hours after you start watching.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              How do I request a movie that's not in your library?
            </AccordionTrigger>
            <AccordionContent>
              We welcome suggestions! You can submit movie requests through your
              account dashboard or by contacting our customer support team. We
              regularly review user requests when acquiring new content.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact Section */}
      <section className="mb-10">
        <div className="rounded-xl bg-muted p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                Get In Touch
              </h2>
              <p className="mb-6 text-muted-foreground">
                Have questions or feedback? We'd love to hear from you. Our team
                is always ready to help enhance your movie experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>support@Movie Star.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>Live chat available 24/7</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Support
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSection;
