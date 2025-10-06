"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Award, 
  Users, 
  MapPin, 
  Mail, 
  Phone, 
  Clock,
  Star,
  ArrowRight,
  Instagram,
  Facebook
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      bio: "Sarah started Made With Love KC with a passion for celebrating Kansas City's unique culture. A KC native, she brings over 10 years of design experience and an unwavering love for our amazing city.",
      image: "/images/team/sarah-johnson.svg",
      specialties: ["Product Design", "KC Culture", "Community Outreach"]
    },
    {
      name: "Mike Rodriguez",
      role: "Production Manager",
      bio: "Mike oversees our workshop operations and ensures every piece meets our high standards. His attention to detail and craftsmanship skills make him the backbone of our production team.",
      image: "/images/team/mike-rodriguez.svg",
      specialties: ["Quality Control", "Workshop Operations", "Craftsmanship"]
    },
    {
      name: "Jessica Chen",
      role: "Marketing & Social Media",
      bio: "Jessica manages our Instagram presence and helps tell the story of Made With Love KC. She's passionate about connecting with our KC community and sharing our journey.",
      image: "/images/team/jessica-chen.svg",
      specialties: ["Social Media", "Community Building", "Storytelling"]
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Founded Made With Love KC",
      description: "Started with a simple mission: celebrate Kansas City through handmade goods"
    },
    {
      year: "2023",
      title: "First KC Love Event",
      description: "Launched our community event series to connect with KC locals"
    },
    {
      year: "2024",
      title: "1,000+ Happy Customers",
      description: "Reached our first major milestone of satisfied KC customers"
    },
    {
      year: "2024",
      title: "2,500+ Instagram Followers",
      description: "Built a strong community of KC lovers on social media"
    },
    {
      year: "2024",
      title: "Website Launch",
      description: "Expanded from Instagram to a full e-commerce platform"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "KC Pride",
      description: "Every product celebrates the unique culture and spirit of Kansas City. We're passionate about showcasing what makes KC special."
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "We believe in creating products that last. Every piece is thoughtfully designed and carefully crafted with attention to detail."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Supporting local artists and businesses throughout Kansas City is at the heart of everything we do."
    },
    {
      icon: Star,
      title: "Customer Love",
      description: "Your satisfaction is our priority. We stand behind every product with our customer satisfaction guarantee."
    }
  ];

  const partnerships = [
    {
      name: "KC Local Artists Collective",
      description: "Collaborating with local artists to create unique KC-inspired designs"
    },
    {
      name: "Kansas City Breweries",
      description: "Partnering with local breweries for our brewery coaster collection"
    },
    {
      name: "KC Sports Teams",
      description: "Creating custom merchandise for Royals and Chiefs fans"
    },
    {
      name: "Local Wedding Vendors",
      description: "Providing custom KC-themed wedding favors and decor"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kc-blue/10 via-white to-love-pink/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-kc-red mr-3 heart-pulse" />
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                Our Story
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're passionate about Kansas City and love creating products that celebrate our amazing city. 
              Every item is thoughtfully designed and handmade with attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-kc-primary" asChild>
                <Link href="/products">
                  Shop Our Products
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-love-pink text-love-pink hover:bg-love-pink hover:text-white" asChild>
                <Link href="/custom">
                  Request Custom Order
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                How It All Began
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                  Why Kansas City?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Kansas City isn't just our home—it's our inspiration. From the iconic skyline to the 
                  passionate sports fans, from the thriving arts scene to the incredible sense of community, 
                  KC has a unique spirit that deserves to be celebrated.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We started Made With Love KC because we wanted to create products that capture this 
                  special energy and help KC locals show their pride wherever they go.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/about/kc-skyline.svg"
                  alt="Kansas City skyline"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-love-pink text-white p-4 rounded-lg">
                  <Heart className="h-8 w-8" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <Image
                  src="/images/about/workshop.svg"
                  alt="Our workshop"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -top-4 -left-4 bg-kc-blue text-white p-4 rounded-lg">
                  <Award className="h-8 w-8" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our mission is simple: create high-quality, handmade products that celebrate Kansas City 
                  and support our local community. Every item we create is designed with KC pride and 
                  crafted with love in our Kansas City workshop.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that when you wear or display our products, you're not just showing KC pride—you're 
                  supporting local artists, businesses, and the community that makes Kansas City so special.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our KC love story
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-kc-blue text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              What drives us every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-kc-blue to-love-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The passionate people behind Made With Love KC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-kc-blue font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, specIndex) => (
                      <Badge key={specIndex} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* KC Community Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              KC Community Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Supporting our local community every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                Local Partnerships & Collaborations
              </h3>
              <div className="space-y-4">
                {partnerships.map((partnership, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-love-pink rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{partnership.name}</h4>
                      <p className="text-muted-foreground text-sm">{partnership.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/about/community-event.svg"
                alt="KC community event"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-kc-blue to-love-pink rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Join Our KC Community
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Follow our journey and be part of the KC love story
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="https://instagram.com/made.withlovekc" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 mr-2" />
                  Follow on Instagram
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-kc-blue" asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-kc-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-kc-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Location</h3>
                <p className="text-muted-foreground">
                  Kansas City, Missouri<br />
                  United States
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-love-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-love-pink" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Email</h3>
                <p className="text-muted-foreground">
                  hello@madewithlovekc.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-kc-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-kc-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Response Time</h3>
                <p className="text-muted-foreground">
                  Within 24 hours<br />
                  Monday - Friday
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-kc-primary" asChild>
              <Link href="/contact">
                Send Us a Message
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
