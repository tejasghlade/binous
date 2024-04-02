"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import SimpleProductSection from "./SimpleProductSection";
import { MoveRightIcon, Settings2Icon } from "lucide-react";
import Image from "next/image";
import { productList } from "@/constants";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0  mr-6">
        <span className="font-semibold text-3xl tracking-tight"> binous.</span>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
         
          <NavigationMenuItem >
            <NavigationMenuTrigger>Repair Services</NavigationMenuTrigger>
            <NavigationMenuContent    className="items-center ">
              <div className="w-[900px] flex gap-8 p-5 rounded-2xl">
                <div className="flex gap-5 flex-col">
                  <Image
                    src={"/assets/settings.png"}
                    width={50}
                    height={50}
                    alt={""}
                  />
                  <h1 className=" text-2xl">
                    What can we help you with today?
                  </h1>
                  <p className="text-sm text-gray-600">
                    We&apos;ll your broken tech fast-with or without a protection
                    plan
                  </p>
                  <Link
                    className="flex gap-2 text-purple-700 underline"
                    href="/products"
                    passHref
                  >
                    Get started
                    <MoveRightIcon className="fill-purple-700" />
                  </Link>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
                    {
                      // Add a grid item here
                      productList.slice(0, 5).map((product) => (
                        <div
                          key={product.id}
                          className="flex flex-col gap-2 bg-gray-50 hover:bg-gray-100 border-gray-200 rounded-2xl items-center text-center  p-5  border-2 "
                        >
                          <div>
                            <Image
                              width={70}
                              height={70}
                              src="/assets/products/product.png"
                              alt="Product Image"
                            />
                          </div>
                          <div>
                            <h2 className="font-bold hover:underline cursor-pointer">
                              {product.name}
                            </h2>
                            <p className="font-light text-gray-600">
                              {product.subtitle}
                            </p>
                          </div>
                        </div>
                      ))
                    }

                    <Link href={'/products'} className="flex flex-col justify-center items-center gap-2 bg-gray-50 hover:bg-gray-100 border-gray-200 rounded-2xl items-center text-center  p-5  border-2 ">
                      <div className="border-2 border-black rounded-full p-2">
                        <MoveRightIcon />
                      </div>
                      <h2>All repair options</h2>
                    </Link>

                    {/* Add more grid items here */}
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent    className="items-center ">
              <div className="w-[900px] flex gap-8 p-5 rounded-2xl">
                <div className="flex gap-5 flex-col">
                  <Image
                    src={"/assets/settings.png"}
                    width={50}
                    height={50}
                    alt={""}
                  />
                  <h1 className=" text-2xl">
                    What can we help you with today?
                  </h1>
                  <p className="text-sm text-gray-600">
                    We&apos;ll your broken tech fast-with or without a protection
                    plan
                  </p>
                  <Link
                    className="flex gap-2 text-purple-700 underline"
                    href="/products"
                    passHref
                  >
                    Get started
                    <MoveRightIcon className="fill-purple-700" />
                  </Link>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
                    {
                      // Add a grid item here
                      productList.slice(0, 5).map((product) => (
                        <div
                          key={product.id}
                          className="flex flex-col gap-2 bg-gray-50 hover:bg-gray-100 border-gray-200 rounded-2xl items-center text-center  p-5  border-2 "
                        >
                          <div>
                            <Image
                              width={70}
                              height={70}
                              src="/assets/products/product.png"
                              alt="Product Image"
                            />
                          </div>
                          <div>
                            <h2 className="font-bold hover:underline cursor-pointer">
                              {product.name}
                            </h2>
                            <p className="font-light text-gray-600">
                              {product.subtitle}
                            </p>
                          </div>
                        </div>
                      ))
                    }

                    <Link href={'/products'} className="flex flex-col justify-center items-center gap-2 bg-gray-50 hover:bg-gray-100 border-gray-200 rounded-2xl items-center text-center  p-5  border-2 ">
                      <div className="border-2 border-black rounded-full p-2">
                        <MoveRightIcon />
                      </div>
                      <h2>All repair options</h2>
                    </Link>

                    {/* Add more grid items here */}
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
        </NavigationMenuList>
      </NavigationMenu>
      <Link href={'contact'}>
        <Button  size={"lg"} className="rounded-full">
          Contact Us
        </Button>
      </Link>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
