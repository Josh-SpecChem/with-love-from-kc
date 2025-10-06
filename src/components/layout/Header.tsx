"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, User, Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NavigationItem } from "@/types";

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "New Arrivals", href: "/products/new" },
  {
    label: "Shop",
    href: "/products",
    children: [
      { label: "All Products", href: "/products" },
      { label: "Apparel", href: "/products/apparel" },
      { label: "Accessories", href: "/products/accessories" },
      { label: "Home Decor", href: "/products/home" },
    ],
  },
  { label: "BEST SELLERS", href: "/products/bestsellers" },
  { label: "SALE", href: "/products/sale" },
  {
    label: "Featured Collections",
    href: "/collections",
    children: [
      { label: "Rustic Rose Collection", href: "/collections/rustic-rose" },
      { label: "Comfort Classics Collection", href: "/collections/comfort-classics" },
    ],
  },
  { label: "Piper Cardigans", href: "/products/piper-cardigans" },
];

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItems] = useState(0); // Mock cart count

  return (
    <>
      {/* Top Promotional Bar */}
      <div className="bg-black text-white text-xs py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span>Free shipping on orders over $50</span>
            <span>•</span>
            <span>New arrivals every week</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="hover:text-gray-300 transition-colors">
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-8 w-8 text-primary-pink heart-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-black uppercase tracking-wide">
                  Made With Love
                </span>
                <span className="font-script text-lg text-primary-pink -mt-1">
                  Kansas City
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Hidden on all screen sizes */}
            <nav className="hidden">
              {/* Desktop navigation is now hidden on all screen sizes */}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="h-9 w-64 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-pink focus:border-primary-pink transition-all duration-200"
                      autoFocus
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(true)}
                    className="text-black hover:text-primary-pink"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* Account */}
              <Button variant="ghost" size="sm" asChild className="text-black hover:text-primary-pink">
                <Link href="/account">
                  <User className="h-4 w-4" />
                </Link>
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="sm" asChild className="text-black hover:text-primary-pink relative">
                <Link href="/cart">
                  <ShoppingCart className="h-4 w-4" />
                  {cartItems > 0 && (
                    <div className="absolute -top-1 -right-1 h-5 w-5 bg-red text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {cartItems}
                    </div>
                  )}
                </Link>
              </Button>

              {/* Mobile menu - Now shown on all screen sizes */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-black hover:text-primary-pink">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                  <div className="flex flex-col space-y-4 mt-8">
                    <div className="flex items-center space-x-2 pb-4 border-b border-gray-200">
                      <Heart className="h-6 w-6 text-primary-pink" />
                      <div className="flex flex-col">
                        <span className="font-serif font-bold text-lg text-black uppercase">
                          Made With Love
                        </span>
                        <span className="font-script text-sm text-primary-pink -mt-1">
                          Kansas City
                        </span>
                      </div>
                    </div>
                    
                    {/* Mobile Navigation */}
                    <nav className="flex flex-col space-y-2">
                      {navigationItems.map((item) => (
                        <div key={item.label}>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 text-sm font-medium text-black hover:text-primary-pink transition-colors duration-200 uppercase tracking-wide"
                          >
                            {item.label}
                          </Link>
                          {item.children && (
                            <div className="ml-4 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="block px-3 py-1 text-sm text-gray-600 hover:text-primary-pink transition-colors duration-200"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>

                    {/* Mobile Actions */}
                    <div className="pt-4 border-t border-gray-200 space-y-2">
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/account">
                          <User className="h-4 w-4 mr-2" />
                          Account
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/cart">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Cart ({cartItems})
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}



