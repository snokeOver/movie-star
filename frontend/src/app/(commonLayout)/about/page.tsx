import Image from "next/image";
import type { Metadata } from "next";
import {
  Film,
  Star,
  Users,
  Award,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "About Us | Movie Star",
  description:
    "Learn about Movie Star - your premier destination for renting and streaming the latest movies and classics.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
          <Image
            src="/about3.jpg"
            alt="Cinema background"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center py-24 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About Movie Star
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl">
            Your premier destination for renting and streaming the latest
            blockbusters and timeless classics.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, Movie Star was born from a passion for cinema
                and a vision to create the most user-friendly movie rental
                platform on the web.
              </p>
              <p>
                What started as a small collection of indie films has grown into
                a comprehensive library of over 10,000 titles spanning every
                genre, era, and culture.
              </p>
              <p>
                Our mission is simple: to connect movie lovers with the films
                they want to watch, when they want to watch them, at an
                affordable price and with an exceptional user experience.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button>
                Browse Movies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Join Now</Button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="/about1.png"
              alt="Film equipment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-4xl font-bold">10K+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Movies Available</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-4xl font-bold">500K+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-4xl font-bold">190+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-4xl font-bold">4.9</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
          What We Offer
        </h2>
        <Tabs defaultValue="streaming" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="streaming">Streaming</TabsTrigger>
            <TabsTrigger value="rentals">Rentals</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>
          <TabsContent value="streaming" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Unlimited Streaming</CardTitle>
                <CardDescription>
                  Watch thousands of movies with our premium subscription
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Film className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Extensive Library</h4>
                    <p className="text-sm text-muted-foreground">
                      Access to over 10,000 movies from major studios and
                      independent filmmakers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">New Releases</h4>
                    <p className="text-sm text-muted-foreground">
                      Be the first to watch the latest blockbusters and
                      award-winning films
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Streaming</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="rentals" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Flexible Rentals</CardTitle>
                <CardDescription>
                  Rent individual movies without a subscription
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Award className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Premium Titles</h4>
                    <p className="text-sm text-muted-foreground">
                      Access to the newest releases before they're available on
                      subscription services
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Family Viewing</h4>
                    <p className="text-sm text-muted-foreground">
                      48-hour viewing window once you start watching, perfect
                      for family movie nights
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Browse Rentals</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="community" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Movie Community</CardTitle>
                <CardDescription>
                  Connect with fellow movie enthusiasts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <MessageCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Reviews & Discussions</h4>
                    <p className="text-sm text-muted-foreground">
                      Share your thoughts and read reviews from our community of
                      movie lovers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Curated Lists</h4>
                    <p className="text-sm text-muted-foreground">
                      Discover new favorites with curated lists from our film
                      experts and community
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Community</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section>
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Ready to start your movie journey?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              Join thousands of movie lovers who have discovered their next
              favorite film on Movie Star.
            </p>
            <Button variant="secondary" size="lg">
              Sign Up Now
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
