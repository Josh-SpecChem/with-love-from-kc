"use client";

import { 
  Truck, 
  Clock, 
  MapPin, 
  Package, 
  Shield, 
  Heart,
  CheckCircle,
  AlertCircle,
  Globe,
  CreditCard,
  Calendar,
  Phone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ShippingPage() {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      price: "Free on orders $50+",
      priceDetails: "$5.99 for orders under $50",
      timeframe: "3-5 business days",
      description: "Our most popular shipping option. Reliable delivery to your door.",
      icon: Package,
      popular: true
    },
    {
      name: "Expedited Shipping",
      price: "$12.99",
      timeframe: "1-2 business days",
      description: "Get your KC love faster with expedited shipping.",
      icon: Truck
    },
    {
      name: "Overnight Shipping",
      price: "$24.99",
      timeframe: "Next business day",
      description: "For when you need your KC gear ASAP!",
      icon: Clock
    }
  ];

  const shippingZones = [
    {
      zone: "Continental US",
      timeframe: "3-5 business days",
      cost: "Free on orders $50+",
      icon: MapPin,
      color: "text-green-600"
    },
    {
      zone: "Alaska & Hawaii",
      timeframe: "5-7 business days",
      cost: "$12.99",
      icon: MapPin,
      color: "text-blue-600"
    },
    {
      zone: "Canada",
      timeframe: "7-10 business days",
      cost: "$15.99",
      icon: Globe,
      color: "text-red-600"
    },
    {
      zone: "International",
      timeframe: "10-14 business days",
      cost: "$19.99",
      icon: Globe,
      color: "text-purple-600"
    }
  ];

  const trackingSteps = [
    {
      step: 1,
      title: "Order Confirmed",
      description: "You'll receive an email confirmation with your order details.",
      icon: CheckCircle,
      timeframe: "Immediately"
    },
    {
      step: 2,
      title: "Processing",
      description: "We prepare your handmade KC products with love.",
      icon: Package,
      timeframe: "1-2 business days"
    },
    {
      step: 3,
      title: "Shipped",
      description: "Your order is on its way! You'll receive tracking information.",
      icon: Truck,
      timeframe: "Day 2-3"
    },
    {
      step: 4,
      title: "Delivered",
      description: "Your KC love arrives at your door!",
      icon: Heart,
      timeframe: "3-5 business days"
    }
  ];

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within the continental US. We offer free shipping on orders over $50!"
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship worldwide. International shipping takes 10-14 business days and costs $19.99. Customers are responsible for any customs duties."
    },
    {
      question: "Can I track my order?",
      answer: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can track your package on the carrier's website."
    },
    {
      question: "What if my package is damaged?",
      answer: "We stand behind our products! If your package arrives damaged, contact us immediately and we'll replace it at no cost to you."
    },
    {
      question: "Can I change my shipping address?",
      answer: "Yes, but only if your order hasn't shipped yet. Contact us immediately if you need to change your shipping address."
    },
    {
      question: "Do you offer same-day delivery?",
      answer: "We don't offer same-day delivery, but we do have overnight shipping available for orders placed before 2 PM CST."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-love-pink" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Shipping Information
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              Get your KC love delivered right to your door! We offer fast, reliable shipping 
              with tracking and insurance on all orders.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-sm">
                <Shield className="h-3 w-3 mr-1" />
                Insured Shipping
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Package className="h-3 w-3 mr-1" />
                Free on $50+
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Shipping Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Shipping Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shippingOptions.map((option, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${option.popular ? 'ring-2 ring-love-pink' : ''}`}>
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <option.icon className="h-8 w-8 text-love-pink" />
                  </div>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <span>{option.name}</span>
                    {option.popular && (
                      <Badge className="bg-love-pink text-white">Most Popular</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-2xl font-bold text-love-pink">{option.price}</p>
                    {option.priceDetails && (
                      <p className="text-sm text-muted-foreground">{option.priceDetails}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{option.timeframe}</p>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Shipping Zones */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Shipping Zones & Times
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {shippingZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <zone.icon className={`h-8 w-8 mx-auto mb-3 ${zone.color}`} />
                  <h3 className="font-semibold mb-2">{zone.zone}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{zone.timeframe}</p>
                  <p className="font-medium text-love-pink">{zone.cost}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tracking Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Order Tracking Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackingSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-love-pink text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <step.icon className="h-8 w-8 text-love-pink mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                  <Badge variant="outline" className="text-xs">{step.timeframe}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  <span>Important Shipping Notes</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Processing Time</p>
                    <p className="text-sm text-muted-foreground">
                      All orders are processed within 1-2 business days. Custom orders may take longer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Business Days</p>
                    <p className="text-sm text-muted-foreground">
                      Shipping times are calculated in business days (Monday-Friday, excluding holidays).
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Address Accuracy</p>
                    <p className="text-sm text-muted-foreground">
                      Please double-check your shipping address. Incorrect addresses may result in delays.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Signature Required</p>
                    <p className="text-sm text-muted-foreground">
                      Orders over $100 require signature confirmation for security.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span>Shipping Protection</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Package className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Insured Shipping</p>
                    <p className="text-sm text-muted-foreground">
                      All orders are insured against loss or damage during transit.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Truck className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Tracking Included</p>
                    <p className="text-sm text-muted-foreground">
                      Every order includes tracking information and delivery confirmation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Careful Packaging</p>
                    <p className="text-sm text-muted-foreground">
                      Each item is carefully packaged to ensure it arrives in perfect condition.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Customer Support</p>
                    <p className="text-sm text-muted-foreground">
                      Our team is here to help with any shipping questions or concerns.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Shipping FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-love-pink/5 to-kc-blue/5">
            <CardContent className="p-8 text-center">
              <Truck className="h-12 w-12 text-love-pink mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Need Help with Shipping?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Have questions about shipping times, tracking, or delivery? 
                Our KC team is here to help you get your order delivered safely!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-love-pink" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:hello@madewithlovekc.com">Email Support</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Free Shipping Banner */}
        <Card className="bg-gradient-to-r from-love-pink to-kc-blue text-white">
          <CardContent className="p-8 text-center">
            <Heart className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-2">
              Free Shipping on Orders $50+
            </h3>
            <p className="text-lg opacity-90">
              Show your KC love and get free shipping on qualifying orders!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
