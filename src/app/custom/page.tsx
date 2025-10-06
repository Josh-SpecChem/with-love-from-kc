"use client";

import { useState } from "react";
import { 
  Heart, 
  ArrowRight, 
  Upload, 
  Check, 
  Star,
  Clock,
  Palette,
  Scissors,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function CustomOrdersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    quantity: "",
    timeline: "",
    budget: "",
    inspiration: ""
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const projectTypes = [
    { value: "apparel", label: "Apparel", icon: "👕", description: "Custom clothing, hoodies, t-shirts" },
    { value: "accessories", label: "Accessories", icon: "🎒", description: "Bags, mugs, keychains, phone cases" },
    { value: "home", label: "Home Decor", icon: "🏠", description: "Art prints, pillows, wall decor" },
    { value: "wedding", label: "Wedding Favors", icon: "💒", description: "Custom wedding favors and decor" },
    { value: "corporate", label: "Corporate", icon: "🏢", description: "Business merchandise and gifts" }
  ];

  const customProcess = [
    {
      step: 1,
      title: "Share Your Vision",
      description: "Tell us about your custom project and share any inspiration you have",
      icon: Palette,
      details: "Describe your idea, share inspiration images, and let us know your vision"
    },
    {
      step: 2,
      title: "Design Consultation",
      description: "We'll create mockups and design options for your approval",
      icon: Scissors,
      details: "Our team will create 2-3 design concepts based on your requirements"
    },
    {
      step: 3,
      title: "Approval & Production",
      description: "Once approved, we'll handcraft your custom KC creation",
      icon: Heart,
      details: "We'll bring your vision to life with attention to detail and KC pride"
    },
    {
      step: 4,
      title: "Delivery",
      description: "Your custom KC creation is ready for pickup or shipping",
      icon: Truck,
      details: "Fast, secure delivery to your door or local pickup in Kansas City"
    }
  ];

  const portfolioExamples = [
    {
      title: "Custom Royals Wedding Favors",
      description: "Personalized wedding favors for a KC couple's special day",
      image: "/images/placeholders/product-placeholder.svg",
      category: "Wedding"
    },
    {
      title: "KC Skyline Corporate Gifts",
      description: "Custom branded items for a local Kansas City business",
      image: "/images/portfolio/corporate-gifts.jpg",
      category: "Corporate"
    },
    {
      title: "Personalized KC Hoodie",
      description: "Custom hoodie with family name and KC landmarks",
      image: "/images/portfolio/custom-hoodie.jpg",
      category: "Apparel"
    },
    {
      title: "KC Brewery Event Merchandise",
      description: "Custom merchandise for a local brewery event",
      image: "/images/portfolio/brewery-merch.jpg",
      category: "Event"
    }
  ];

  const pricingGuide = [
    {
      category: "Apparel",
      basePrice: "$25",
      factors: ["Design complexity", "Quantity", "Material choice", "Customization level"],
      example: "Custom KC hoodie: $35-65"
    },
    {
      category: "Accessories",
      basePrice: "$15",
      factors: ["Size and material", "Print method", "Quantity", "Rush order"],
      example: "Custom KC mug: $18-35"
    },
    {
      category: "Home Decor",
      basePrice: "$20",
      factors: ["Size and material", "Print quality", "Framing options", "Customization"],
      example: "Custom KC art print: $25-75"
    },
    {
      category: "Wedding Favors",
      basePrice: "$8",
      factors: ["Quantity (bulk discounts)", "Personalization", "Packaging", "Timeline"],
      example: "Custom wedding favors: $8-15 each"
    }
  ];

  const faqs = [
    {
      question: "How long does a custom order take?",
      answer: "Most custom orders take 2-4 weeks from approval to completion. Rush orders (1 week) are available for an additional 25% fee."
    },
    {
      question: "What's your revision policy?",
      answer: "We include up to 2 rounds of revisions in your quote. Additional revisions may incur extra charges depending on complexity."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! We offer volume discounts starting at 10+ pieces. Contact us for a custom quote on bulk orders."
    },
    {
      question: "Can I see mockups before committing?",
      answer: "Absolutely! We'll create 2-3 design mockups for your approval before we begin production."
    },
    {
      question: "What payment terms do you offer?",
      answer: "We require 50% deposit to begin work, with the remaining 50% due upon completion. Corporate accounts may qualify for net-30 terms."
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Custom order submitted:', { formData, selectedFiles });
    // TODO: Implement form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kc-blue/10 via-white to-love-pink/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-kc-red mr-3 heart-pulse" />
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                Custom KC Creations
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Bring your KC vision to life with our custom design service. 
              From personalized wedding favors to corporate merchandise, we create unique pieces that celebrate Kansas City.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-kc-primary">
                Start Your Custom Order
              </Button>
              <Button size="lg" variant="outline" className="border-love-pink text-love-pink hover:bg-love-pink hover:text-white">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Custom Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to bring your KC vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customProcess.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-kc-blue to-love-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-kc-red text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                <p className="text-sm text-kc-blue">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="request" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="request">Request Form</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="pricing">Pricing Guide</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            {/* Request Form Tab */}
            <TabsContent value="request">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading font-bold text-center">
                      Custom Order Request Form
                    </CardTitle>
                    <p className="text-muted-foreground text-center">
                      Tell us about your vision and we'll create something amazing together
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Contact Information */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="timeline">Timeline</Label>
                          <select
                            id="timeline"
                            value={formData.timeline}
                            onChange={(e) => handleInputChange('timeline', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          >
                            <option value="">Select timeline</option>
                            <option value="rush">Rush (1 week) - +25% fee</option>
                            <option value="standard">Standard (2-4 weeks)</option>
                            <option value="flexible">Flexible (4+ weeks)</option>
                          </select>
                        </div>
                      </div>

                      {/* Project Type */}
                      <div>
                        <Label>Project Type *</Label>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                          {projectTypes.map((type) => (
                            <label
                              key={type.value}
                              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                formData.projectType === type.value
                                  ? 'border-kc-blue bg-kc-blue/5'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="projectType"
                                value={type.value}
                                checked={formData.projectType === type.value}
                                onChange={(e) => handleInputChange('projectType', e.target.value)}
                                className="sr-only"
                              />
                              <div className="text-center">
                                <div className="text-2xl mb-2">{type.icon}</div>
                                <div className="font-semibold text-sm">{type.label}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  {type.description}
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Project Description */}
                      <div>
                        <Label htmlFor="description">Project Description *</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe your custom project in detail. What do you envision? Any specific requirements or inspiration?"
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          rows={4}
                          required
                        />
                      </div>

                      {/* Quantity and Budget */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="quantity">Quantity</Label>
                          <Input
                            id="quantity"
                            placeholder="e.g., 50 wedding favors"
                            value={formData.quantity}
                            onChange={(e) => handleInputChange('quantity', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="budget">Budget Range</Label>
                          <select
                            id="budget"
                            value={formData.budget}
                            onChange={(e) => handleInputChange('budget', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-100">Under $100</option>
                            <option value="100-500">$100 - $500</option>
                            <option value="500-1000">$500 - $1,000</option>
                            <option value="1000-plus">$1,000+</option>
                          </select>
                        </div>
                      </div>

                      {/* Inspiration Images */}
                      <div>
                        <Label htmlFor="inspiration">Inspiration Images</Label>
                        <div className="mt-2">
                          <input
                            type="file"
                            id="inspiration"
                            multiple
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <label
                            htmlFor="inspiration"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
                          >
                            <Upload className="h-8 w-8 text-gray-400 mb-2" />
                            <span className="text-sm text-gray-500">
                              Click to upload inspiration images
                            </span>
                          </label>
                          {selectedFiles.length > 0 && (
                            <div className="mt-2">
                              <p className="text-sm text-muted-foreground mb-2">
                                Uploaded files ({selectedFiles.length}):
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {selectedFiles.map((file, index) => (
                                  <Badge key={index} variant="secondary">
                                    {file.name}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="text-center pt-6">
                        <Button size="lg" type="submit" className="btn-kc-primary">
                          Submit Custom Order Request
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                        <p className="text-sm text-muted-foreground mt-4">
                          We'll review your request and get back to you within 24 hours
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Portfolio Tab */}
            <TabsContent value="portfolio">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Custom Project Portfolio
                  </h3>
                  <p className="text-muted-foreground">
                    Examples of our custom KC creations
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {portfolioExamples.map((example, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video bg-gradient-to-br from-kc-blue/20 to-love-pink/20 flex items-center justify-center">
                        <div className="text-center">
                          <Heart className="h-12 w-12 text-kc-red mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">{example.title}</p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-lg">{example.title}</h4>
                          <Badge variant="outline">{example.category}</Badge>
                        </div>
                        <p className="text-muted-foreground">{example.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Pricing Guide Tab */}
            <TabsContent value="pricing">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Custom Order Pricing Guide
                  </h3>
                  <p className="text-muted-foreground">
                    Base pricing varies by project complexity and requirements
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {pricingGuide.map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{item.category}</span>
                          <Badge variant="secondary">Starting at {item.basePrice}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Pricing Factors:</h4>
                          <ul className="space-y-1">
                            {item.factors.map((factor, factorIndex) => (
                              <li key={factorIndex} className="flex items-center text-sm text-muted-foreground">
                                <Check className="h-3 w-3 text-green-500 mr-2" />
                                {factor}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Separator />
                        <div className="text-sm">
                          <span className="font-medium">Example: </span>
                          <span className="text-muted-foreground">{item.example}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Card className="bg-gradient-to-r from-kc-blue/5 to-love-pink/5">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-heading font-semibold mb-4">
                        Need a Custom Quote?
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Every custom project is unique. Contact us for a personalized quote based on your specific requirements.
                      </p>
                      <Button size="lg" className="btn-kc-primary">
                        Get Custom Quote
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-muted-foreground">
                    Common questions about our custom order process
                  </p>
                </div>

                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-3">{faq.question}</h4>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Card className="bg-kc-blue/5 border-kc-blue/20">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-heading font-semibold mb-4">
                        Still Have Questions?
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        We're here to help! Contact us for personalized assistance with your custom project.
                      </p>
                      <Button size="lg" variant="outline" className="border-kc-blue text-kc-blue hover:bg-kc-blue hover:text-white">
                        Contact Us
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
