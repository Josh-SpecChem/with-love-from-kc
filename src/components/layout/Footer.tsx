"use client";

import Link from "next/link";
import { Heart, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const productCategories = [
    { label: "Apparel", href: "/products/apparel" },
    { label: "Accessories", href: "/products/accessories" },
    { label: "Home Decor", href: "/products/home" },
    { label: "Custom Orders", href: "/products/custom" },
  ];

  const customerService = [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Size Guide", href: "/size-guide" },
  ];

  const socialLinks = [
    { 
      label: "Instagram", 
      href: "https://instagram.com/made.withlovekc", 
      icon: Instagram,
      external: true 
    },
    { 
      label: "Facebook", 
      href: "#", 
      icon: Facebook,
      external: false 
    },
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-kc-red" />
              <span className="font-heading font-bold text-xl">
                Made With Love KC
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We're passionate about Kansas City and love creating products that 
              celebrate our amazing city. Every item is handmade with love and 
              supports our local community.
            </p>
            <div className="flex space-x-2">
              <Badge variant="secondary" className="text-xs">
                Handmade in Kansas City
              </Badge>
              <Badge variant="outline" className="text-xs">
                Supporting Local Artists
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-kc-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Products</h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="text-sm text-muted-foreground hover:text-kc-blue transition-colors"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Customer Service</h3>
            <ul className="space-y-2">
              {customerService.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-kc-blue transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Newsletter Signup */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Heart className="h-5 w-5 text-love-pink" />
              <h3 className="font-heading font-semibold text-xl">
                Stay Updated with KC Love
              </h3>
            </div>
            <p className="text-muted-foreground">
              Get the latest news about new products, KC events, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="btn-love-pink">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Kansas City, Missouri</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>hello@madewithlovekc.com</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : "_self"}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-kc-blue transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <Link
              href="/privacy"
              className="hover:text-kc-blue transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-kc-blue transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <span>© {currentYear} Made With Love KC</span>
            <Heart className="h-3 w-3 text-kc-red" />
            <span>in Kansas City</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Heart className="h-3 w-3 text-love-pink" />
              <span>Customer Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="h-3 w-3 text-kc-red" />
              <span>Free Shipping on Orders $50+</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="h-3 w-3 text-kc-blue" />
              <span>30-Day Return Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



