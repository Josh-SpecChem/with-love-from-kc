"use client";

import { 
  Ruler, 
  Shirt, 
  Crown, 
  Coffee, 
  Heart,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Mail,
  Phone,
  Download
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SizeGuidePage() {
  const apparelSizes = [
    {
      size: "XS",
      chest: "32-34\"",
      waist: "26-28\"",
      length: "26\"",
      fit: "Slim fit"
    },
    {
      size: "S",
      chest: "34-36\"",
      waist: "28-30\"",
      length: "27\"",
      fit: "Slim fit"
    },
    {
      size: "M",
      chest: "36-38\"",
      waist: "30-32\"",
      length: "28\"",
      fit: "Regular fit"
    },
    {
      size: "L",
      chest: "38-40\"",
      waist: "32-34\"",
      length: "29\"",
      fit: "Regular fit"
    },
    {
      size: "XL",
      chest: "40-42\"",
      waist: "34-36\"",
      length: "30\"",
      fit: "Relaxed fit"
    },
    {
      size: "XXL",
      chest: "42-44\"",
      waist: "36-38\"",
      length: "31\"",
      fit: "Relaxed fit"
    }
  ];

  const hatSizes = [
    {
      size: "S/M",
      circumference: "21.5-22.5\"",
      description: "Fits most adults"
    },
    {
      size: "L/XL",
      circumference: "22.5-23.5\"",
      description: "Fits larger heads"
    },
    {
      size: "One Size",
      circumference: "Adjustable",
      description: "Snapback or adjustable fit"
    }
  ];

  const mugSizes = [
    {
      size: "Standard",
      capacity: "11 oz",
      height: "3.5\"",
      diameter: "3\"",
      description: "Perfect for coffee or tea"
    },
    {
      size: "Large",
      capacity: "15 oz",
      height: "4\"",
      diameter: "3.25\"",
      description: "Great for larger drinks"
    },
    {
      size: "Oversized",
      capacity: "20 oz",
      height: "4.5\"",
      diameter: "3.5\"",
      description: "Extra large for big coffee lovers"
    }
  ];

  const measuringTips = [
    {
      tip: "Chest Measurement",
      instruction: "Measure around the fullest part of your chest, keeping the tape measure horizontal",
      icon: Shirt
    },
    {
      tip: "Waist Measurement",
      instruction: "Measure around your natural waistline, usually the narrowest part of your torso",
      icon: Ruler
    },
    {
      tip: "Head Circumference",
      instruction: "Measure around your head about 1 inch above your eyebrows",
      icon: Crown
    },
    {
      tip: "Length Measurement",
      instruction: "For shirts, measure from the base of the neck to the bottom hem",
      icon: Ruler
    }
  ];

  const fitGuides = [
    {
      category: "Hoodies",
      description: "Our hoodies are designed for comfort and style. They have a relaxed fit that's perfect for layering.",
      features: [
        "Kangaroo pocket",
        "Drawstring hood",
        "Ribbed cuffs and hem",
        "Pre-shrunk cotton blend"
      ],
      icon: Shirt
    },
    {
      category: "T-Shirts",
      description: "Classic fit t-shirts that are comfortable and flattering. Made from soft, breathable cotton.",
      features: [
        "Classic crew neck",
        "Short sleeves",
        "Straight hem",
        "100% cotton"
      ],
      icon: Shirt
    },
    {
      category: "Baseball Caps",
      description: "Adjustable caps with structured crowns and curved bills. Perfect for showing your KC pride.",
      features: [
        "Adjustable snapback",
        "Structured crown",
        "Curved bill",
        "Embroidered KC designs"
      ],
      icon: Crown
    },
    {
      category: "Mugs",
      description: "High-quality ceramic mugs that are dishwasher and microwave safe.",
      features: [
        "Ceramic construction",
        "Dishwasher safe",
        "Microwave safe",
        "Comfortable handle"
      ],
      icon: Coffee
    }
  ];

  const faqs = [
    {
      question: "How do I measure myself for apparel?",
      answer: "Use a flexible measuring tape and measure over light clothing. For chest, measure around the fullest part. For waist, measure at your natural waistline. Always measure snugly but not tight."
    },
    {
      question: "What if I'm between sizes?",
      answer: "We recommend sizing up for a more comfortable fit, especially for hoodies and t-shirts. Our items are designed to be comfortable and slightly relaxed."
    },
    {
      question: "Do your items shrink?",
      answer: "Our cotton items are pre-shrunk, but may shrink slightly with washing. We recommend following the care instructions on the label."
    },
    {
      question: "Can I exchange for a different size?",
      answer: "Yes! We offer free size exchanges within 30 days. Contact us to arrange an exchange."
    },
    {
      question: "What if I'm not sure about sizing?",
      answer: "Contact us! We're happy to help you find the right size. Send us your measurements and we'll recommend the best fit."
    },
    {
      question: "Do you offer plus sizes?",
      answer: "Yes! We offer sizes up to XXL and are working on expanding our size range. Contact us if you need larger sizes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Ruler className="h-8 w-8 text-love-pink" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Size Guide
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              Find the perfect fit for your KC gear! Use our detailed size charts 
              and measuring tips to ensure you get the right size every time.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-sm">
                <CheckCircle className="h-3 w-3 mr-1" />
                Accurate Sizing
              </Badge>
              <Badge variant="outline" className="text-sm">
                <HelpCircle className="h-3 w-3 mr-1" />
                Size Help Available
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Apparel Sizes */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Apparel Size Chart
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shirt className="h-5 w-5 text-love-pink" />
                <span>Hoodies & T-Shirts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Size</th>
                      <th className="text-left p-3 font-semibold">Chest</th>
                      <th className="text-left p-3 font-semibold">Waist</th>
                      <th className="text-left p-3 font-semibold">Length</th>
                      <th className="text-left p-3 font-semibold">Fit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apparelSizes.map((size, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{size.size}</td>
                        <td className="p-3">{size.chest}</td>
                        <td className="p-3">{size.waist}</td>
                        <td className="p-3">{size.length}</td>
                        <td className="p-3">{size.fit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-blue-600 mb-2" />
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> All measurements are in inches and represent the garment dimensions. 
                  For best fit, measure yourself and compare to our size chart.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hat Sizes */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Hat Size Chart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hatSizes.map((size, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Hat className="h-8 w-8 text-love-pink mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{size.size}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{size.circumference}</p>
                  <p className="text-xs text-muted-foreground">{size.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mug Sizes */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Mug Size Chart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mugSizes.map((size, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Coffee className="h-8 w-8 text-love-pink mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{size.size}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Capacity: {size.capacity}</p>
                    <p>Height: {size.height}</p>
                    <p>Diameter: {size.diameter}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{size.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Measuring Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            How to Measure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {measuringTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <tip.icon className="h-6 w-6 text-love-pink mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">{tip.tip}</h3>
                      <p className="text-sm text-muted-foreground">{tip.instruction}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fit Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Product Fit Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fitGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <guide.icon className="h-5 w-5 text-love-pink" />
                    <span>{guide.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="text-sm space-y-1">
                      {guide.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Sizing FAQ
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

        {/* Size Help CTA */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-love-pink/5 to-kc-blue/5">
            <CardContent className="p-8 text-center">
              <Ruler className="h-12 w-12 text-love-pink mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Need Help Finding Your Size?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Not sure about sizing? Our KC team is here to help! 
                Send us your measurements and we'll recommend the perfect fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-love-pink" asChild>
                  <a href="/contact">Get Size Help</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:hello@madewithlovekc.com">Email Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Size Chart Download */}
        <Card className="bg-gradient-to-r from-love-pink to-kc-blue text-white">
          <CardContent className="p-8 text-center">
            <Download className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-2">
              Download Our Size Chart
            </h3>
            <p className="text-lg opacity-90 mb-4">
              Save our size chart for easy reference when shopping!
            </p>
            <Button variant="secondary" size="lg">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
