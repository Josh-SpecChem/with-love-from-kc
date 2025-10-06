"use client";

import { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  Heart, 
  Search,
  HelpCircle,
  Package,
  Truck,
  RotateCcw,
  Ruler,
  CreditCard,
  Shield,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  popular?: boolean;
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqItems: FAQItem[] = [
    // General Questions
    {
      id: "what-is-made-with-love-kc",
      question: "What is Made With Love KC?",
      answer: "Made With Love KC is a Kansas City-based business that creates handmade products celebrating our amazing city. We specialize in apparel, accessories, home decor, and custom orders, all crafted with love right here in KC.",
      category: "general",
      popular: true
    },
    {
      id: "where-are-you-located",
      question: "Where are you located?",
      answer: "We're based in Kansas City, Missouri! While we don't have a physical storefront open to the public, we operate from our workshop where we create all our handmade products. You can find us at local events and markets throughout the year.",
      category: "general"
    },
    {
      id: "how-long-have-you-been-in-business",
      question: "How long have you been in business?",
      answer: "We've been creating KC-inspired products for over 3 years! What started as a passion project celebrating our love for Kansas City has grown into a thriving business that supports local artists and the KC community.",
      category: "general"
    },

    // Products
    {
      id: "what-products-do-you-make",
      question: "What types of products do you make?",
      answer: "We create a wide variety of KC-inspired products including hoodies, t-shirts, mugs, coasters, art prints, baseball caps, and custom orders. All products are designed to celebrate Kansas City's unique culture, landmarks, and community spirit.",
      category: "products",
      popular: true
    },
    {
      id: "are-products-handmade",
      question: "Are all your products handmade?",
      answer: "Yes! Every product we create is handmade with love in Kansas City. We work with local artists and craftspeople to ensure each item meets our high quality standards while supporting the local community.",
      category: "products"
    },
    {
      id: "do-you-offer-custom-orders",
      question: "Do you offer custom orders?",
      answer: "Absolutely! We love creating custom pieces for special occasions like weddings, corporate events, or personal celebrations. Custom orders typically take 2-3 weeks to complete. Contact us to discuss your custom needs.",
      category: "products",
      popular: true
    },
    {
      id: "product-materials",
      question: "What materials do you use?",
      answer: "We use high-quality materials for all our products. Our apparel is made from comfortable cotton blends, our mugs are ceramic, coasters are made from durable materials, and art prints use premium paper. We prioritize quality and sustainability in all our material choices.",
      category: "products"
    },

    // Orders & Payment
    {
      id: "how-to-place-order",
      question: "How do I place an order?",
      answer: "Ordering is easy! Browse our products online, select your items, and add them to your cart. You can pay securely with credit card, PayPal, or other payment methods. For custom orders, contact us directly to discuss your needs.",
      category: "orders"
    },
    {
      id: "payment-methods",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All payments are processed securely through our payment processor to ensure your information is protected.",
      category: "orders"
    },
    {
      id: "order-confirmation",
      question: "Will I receive an order confirmation?",
      answer: "Yes! You'll receive an email confirmation immediately after placing your order, and another email when your order ships. You can track your order status through the tracking information we provide.",
      category: "orders"
    },

    // Shipping
    {
      id: "shipping-times",
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within the continental US. We offer expedited shipping options for faster delivery. International shipping is available but may take longer. Free shipping is available on orders over $50!",
      category: "shipping",
      popular: true
    },
    {
      id: "shipping-costs",
      question: "How much does shipping cost?",
      answer: "Shipping costs vary by location and order size. We offer free shipping on orders over $50 within the continental US. Standard shipping typically costs $5-8, while expedited options are available for additional fees.",
      category: "shipping"
    },
    {
      id: "international-shipping",
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide! International shipping costs and delivery times vary by destination. Please note that customers are responsible for any customs duties or taxes that may apply.",
      category: "shipping"
    },
    {
      id: "track-order",
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on the carrier's website. You can also contact us if you need help tracking your order.",
      category: "shipping"
    },

    // Returns & Exchanges
    {
      id: "return-policy",
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Custom orders and personalized items are not eligible for returns. Contact us to initiate a return.",
      category: "returns",
      popular: true
    },
    {
      id: "exchange-process",
      question: "How do I exchange an item?",
      answer: "To exchange an item, contact us within 30 days of delivery. We'll provide you with a return label and process your exchange once we receive the original item. Exchanges are subject to availability.",
      category: "returns"
    },
    {
      id: "defective-items",
      question: "What if my item is defective?",
      answer: "We stand behind the quality of our products. If you receive a defective item, contact us immediately and we'll replace it at no cost to you. We may request photos of the defect to help us improve our quality control.",
      category: "returns"
    },

    // Sizing
    {
      id: "size-guide",
      question: "Do you have a size guide?",
      answer: "Yes! We provide detailed size guides for all our apparel items. You can find size charts on individual product pages and our dedicated Size Guide page. When in doubt, contact us for sizing recommendations.",
      category: "sizing"
    },
    {
      id: "sizing-help",
      question: "I'm not sure about sizing. Can you help?",
      answer: "Absolutely! We're happy to help you find the right size. Contact us with your measurements or questions, and we'll provide personalized sizing recommendations based on your specific needs.",
      category: "sizing"
    }
  ];

  const categories = [
    { value: "all", label: "All Questions", icon: HelpCircle },
    { value: "general", label: "General", icon: Heart },
    { value: "products", label: "Products", icon: Package },
    { value: "orders", label: "Orders & Payment", icon: CreditCard },
    { value: "shipping", label: "Shipping", icon: Truck },
    { value: "returns", label: "Returns", icon: RotateCcw },
    { value: "sizing", label: "Sizing", icon: Ruler }
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const popularFAQs = faqItems.filter(item => item.popular);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <HelpCircle className="h-8 w-8 text-love-pink" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              Find answers to common questions about our products, shipping, returns, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-sm">
                <Heart className="h-3 w-3 mr-1" />
                KC Local Support
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Clock className="h-3 w-3 mr-1" />
                Quick Answers
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search FAQs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.value}
                      variant={selectedCategory === category.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.value)}
                      className={selectedCategory === category.value ? "btn-love-pink" : ""}
                    >
                      <category.icon className="h-4 w-4 mr-2" />
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular FAQs */}
        {selectedCategory === "all" && searchQuery === "" && (
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
              <Heart className="h-6 w-6 text-love-pink mr-2" />
              Popular Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularFAQs.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{item.question}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {item.answer}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleItem(item.id)}
                        className="ml-2"
                      >
                        {openItems.includes(item.id) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    {openItems.includes(item.id) && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm">{item.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All FAQs */}
        <div className="space-y-4">
          <h2 className="text-2xl font-heading font-bold mb-6">
            {selectedCategory === "all" ? "All Questions" : categories.find(c => c.value === selectedCategory)?.label}
            {searchQuery && ` (${filteredFAQs.length} results)`}
          </h2>
          
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{item.question}</h3>
                          {item.popular && (
                            <Badge variant="secondary" className="text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {categories.find(c => c.value === item.category)?.label}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleItem(item.id)}
                        className="ml-2"
                      >
                        {openItems.includes(item.id) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    {openItems.includes(item.id) && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No questions found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchQuery 
                    ? "Try adjusting your search terms or browse all questions."
                    : "No questions available in this category."
                  }
                </p>
                {searchQuery && (
                  <Button 
                    variant="outline" 
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-love-pink/5 to-kc-blue/5">
            <CardContent className="p-8 text-center">
              <HelpCircle className="h-12 w-12 text-love-pink mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Can't find what you're looking for? We're here to help! 
                Contact us directly and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-love-pink" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:hello@madewithlovekc.com">Email Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

