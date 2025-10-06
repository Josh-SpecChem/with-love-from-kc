"use client";

import { 
  RotateCcw, 
  Clock, 
  Package, 
  CheckCircle, 
  AlertCircle, 
  Heart,
  Mail,
  Phone,
  Calendar,
  Shield,
  CreditCard,
  Truck
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: "Contact Us",
      description: "Reach out within 30 days to initiate your return or exchange.",
      icon: Mail,
      timeframe: "Day 1",
      details: "Email us at hello@madewithlovekc.com or use our contact form"
    },
    {
      step: 2,
      title: "Get Return Label",
      description: "We'll provide you with a prepaid return shipping label.",
      icon: Package,
      timeframe: "Within 24 hours",
      details: "Check your email for the return label and instructions"
    },
    {
      step: 3,
      title: "Package & Ship",
      description: "Pack your item securely and drop it off at any carrier location.",
      icon: Truck,
      timeframe: "Day 2-3",
      details: "Use the provided label and packaging materials"
    },
    {
      step: 4,
      title: "Process Refund",
      description: "Once received, we'll process your refund within 3-5 business days.",
      icon: CreditCard,
      timeframe: "3-5 business days",
      details: "Refund will appear on your original payment method"
    }
  ];

  const returnPolicies = [
    {
      category: "Standard Returns",
      timeframe: "30 days",
      condition: "Unused, original packaging",
      eligible: [
        "Regular apparel items",
        "Accessories (mugs, coasters, etc.)",
        "Home decor items",
        "Art prints"
      ],
      notEligible: [
        "Custom orders",
        "Personalized items",
        "Items worn or used",
        "Items without original packaging"
      ],
      icon: Package,
      color: "text-green-600"
    },
    {
      category: "Defective Items",
      timeframe: "No time limit",
      condition: "Manufacturing defects only",
      eligible: [
        "Items with printing errors",
        "Damaged packaging",
        "Missing components",
        "Quality issues"
      ],
      notEligible: [
        "Normal wear and tear",
        "Customer damage",
        "Items used beyond normal use"
      ],
      icon: AlertCircle,
      color: "text-red-600"
    },
    {
      category: "Exchanges",
      timeframe: "30 days",
      condition: "Same item, different size/color",
      eligible: [
        "Size exchanges",
        "Color exchanges",
        "Style exchanges (same price)"
      ],
      notEligible: [
        "Different product categories",
        "Price differences",
        "Custom items"
      ],
      icon: RotateCcw,
      color: "text-blue-600"
    }
  ];

  const refundMethods = [
    {
      method: "Original Payment Method",
      timeframe: "3-5 business days",
      description: "Refunded to the card or account used for purchase",
      icon: CreditCard
    },
    {
      method: "Store Credit",
      timeframe: "Immediate",
      description: "Instant credit to your account for future purchases",
      icon: Heart
    },
    {
      method: "PayPal",
      timeframe: "3-5 business days",
      description: "Refunded to your PayPal account",
      icon: CreditCard
    }
  ];

  const faqs = [
    {
      question: "How long do I have to return an item?",
      answer: "You have 30 days from the delivery date to initiate a return. Items must be in original condition with tags attached."
    },
    {
      question: "Do I have to pay for return shipping?",
      answer: "No! We provide prepaid return labels for all returns and exchanges. Just contact us to get started."
    },
    {
      question: "Can I exchange an item for a different size?",
      answer: "Yes! We offer free exchanges for different sizes or colors of the same item. Contact us to arrange an exchange."
    },
    {
      question: "What if my item is defective?",
      answer: "We stand behind our products! If you receive a defective item, contact us immediately and we'll replace it at no cost to you."
    },
    {
      question: "Can I return custom orders?",
      answer: "Custom orders and personalized items are not eligible for returns since they're made specifically for you."
    },
    {
      question: "How long does it take to get my refund?",
      answer: "Once we receive your return, refunds are processed within 3-5 business days and will appear on your original payment method."
    },
    {
      question: "What if I'm not satisfied with my purchase?",
      answer: "We want you to love your KC gear! If you're not satisfied, contact us and we'll work with you to make it right."
    },
    {
      question: "Can I return items purchased at events?",
      answer: "Yes! Items purchased at local events or markets can be returned using the same process. Just contact us with your purchase details."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <RotateCcw className="h-8 w-8 text-love-pink" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Returns & Exchanges
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              We want you to love your KC gear! If you're not completely satisfied, 
              we make returns and exchanges easy with our hassle-free process.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-sm">
                <Clock className="h-3 w-3 mr-1" />
                30-Day Returns
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Package className="h-3 w-3 mr-1" />
                Free Returns
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Return Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            How Returns Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {returnSteps.map((step, index) => (
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
                  <Badge variant="outline" className="text-xs mb-3">{step.timeframe}</Badge>
                  <p className="text-xs text-muted-foreground">{step.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Return Policies */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Return Policies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {returnPolicies.map((policy, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <policy.icon className={`h-5 w-5 ${policy.color}`} />
                    <span>{policy.category}</span>
                  </CardTitle>
                  <div className="space-y-2">
                    <Badge variant="outline">{policy.timeframe}</Badge>
                    <p className="text-sm text-muted-foreground">{policy.condition}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-600 mb-2">Eligible Items:</h4>
                    <ul className="text-sm space-y-1">
                      {policy.eligible.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-red-600 mb-2">Not Eligible:</h4>
                    <ul className="text-sm space-y-1">
                      {policy.notEligible.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <AlertCircle className="h-3 w-3 text-red-500 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Refund Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Refund Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {refundMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <method.icon className="h-8 w-8 text-love-pink mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{method.method}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <Badge variant="outline" className="text-xs">{method.timeframe}</Badge>
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
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span>Return Requirements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Original Packaging</p>
                    <p className="text-sm text-muted-foreground">
                      Items must be returned in original packaging with tags attached.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Unused Condition</p>
                    <p className="text-sm text-muted-foreground">
                      Items must be in unused condition without signs of wear.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Return Authorization</p>
                    <p className="text-sm text-muted-foreground">
                      Contact us first to get a return authorization number.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Prepaid Label</p>
                    <p className="text-sm text-muted-foreground">
                      Use the prepaid return label we provide for free shipping.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-love-pink" />
                  <span>Customer Satisfaction</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-love-pink mt-0.5" />
                  <div>
                    <p className="font-medium">Easy Communication</p>
                    <p className="text-sm text-muted-foreground">
                      Contact us anytime with questions about returns or exchanges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-love-pink mt-0.5" />
                  <div>
                    <p className="font-medium">Personal Support</p>
                    <p className="text-sm text-muted-foreground">
                      Our KC team provides personal support for all return requests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-love-pink mt-0.5" />
                  <div>
                    <p className="font-medium">Quick Processing</p>
                    <p className="text-sm text-muted-foreground">
                      Returns are processed quickly once we receive your items.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Package className="h-5 w-5 text-love-pink mt-0.5" />
                  <div>
                    <p className="font-medium">Quality Assurance</p>
                    <p className="text-sm text-muted-foreground">
                      We inspect all returns to ensure quality standards are met.
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
            Returns FAQ
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
              <RotateCcw className="h-12 w-12 text-love-pink mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Ready to Return or Exchange?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Have questions about returns or need to start a return? 
                Our KC team is here to help make the process as easy as possible!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-love-pink" asChild>
                  <a href="/contact">Start Return</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:hello@madewithlovekc.com">Email Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Satisfaction Guarantee */}
        <Card className="bg-gradient-to-r from-love-pink to-kc-blue text-white">
          <CardContent className="p-8 text-center">
            <Heart className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-2">
              Customer Satisfaction Guarantee
            </h3>
            <p className="text-lg opacity-90">
              We stand behind every product we make with love in Kansas City!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
