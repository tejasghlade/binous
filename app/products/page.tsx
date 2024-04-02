"use client";

import AboutHero from "@/components/AboutHero";
import { Separator } from "@/components/ui/separator";
import { productList } from "@/constants";
import { Calendar, Check, Contact2Icon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Products = () => {
  const [active, setActive] = useState(productList[0].id);

  return (
    <div className="mx-32 py-10 lg:py-14">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          What can we fix for you today?
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          No Matter the device, we can fix it for you. our experts can help get
          you back up and running in no time. Learn more about our extensive
          repair services below
        </p>
      </div>

      <Separator className="my-4" />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
        <div className="grid col-span-3 grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4">
          {productList.map((product) => (
            <div
              key={product.id}
              className={`flex flex-col gap-2 cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-200 rounded-2xl items-center text-center p-5 border-2 ${
                active === product.id ? "border-gray-600 " : ""
              }`}
              onClick={() => setActive(product?.id)}
            >
              <div>
                {active}
                {product?.id}
                <Image
                  width={100}
                  height={100}
                  src="/assets/products/product.png"
                  alt="Product Image"
                />
              </div>
              <div>
                <h1 className="font-bold hover:underline cursor-pointer">
                  {product.name}
                </h1>
                <p className="font-light text-gray-600">{product.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2 border-2 p-5 rounded-2xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">Summary</h1>
            <div className="flex gap-5 items-center ">
              <Image
                className="bg-gray-200 p-3 rounded-3xl"
                src="/assets/products/product.png"
                width={200}
                height={200}
                alt="Product Image"
              />
              <div className="flex flex-col">
                <h3 className="font-bold">Device repair</h3>
                <p>Fast , affordable , reliable</p>
              </div>
            </div>
          </div>
          <Separator className="my-4" />

          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">Product Detail</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates similique cupiditate amet voluptas, illum, voluptatum
              ullam nulla, aspernatur repellendus porro aliquid reprehenderit
              numquam temporibus possimus soluta ipsum quidem debitis modi eius
            </p>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">Visit Detail</h1>
            <div className="flex  gap-3">
              <div className="flex gap-2 items-center ">
                <span className="p-3 rounded-full bg-gray-100">
                  <MapPin size={18} />
                </span>
                <p className="text-sm">Store Location</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="p-3 rounded-full bg-gray-100">
                  <Calendar size={15} />
                </span>
                <p className="text-sm">Date and time</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="p-3 rounded-full bg-gray-100">
                  <Contact2Icon size={15} />
                </span>
                <p className="text-sm">Contact details</p>
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">About our repairs</h1>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <Check size={15} /> 1-year warranty
              </div>
              <div className="flex gap-2 items-center">
                <Check size={15} /> Feat turnaround
              </div>
              <div className="flex gap-2 items-center">
                <Check size={15} /> Feee diagnostics
              </div>
              <div className="flex gap-2 items-center">
                <Check size={15} /> Price match gurantee
              </div>
            </div>
          </div>
        </div>

        {/* Add more grid items here */}
      </div>
    </div>
  );
};

export default Products;
