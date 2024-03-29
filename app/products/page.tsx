import AboutHero from "@/components/AboutHero";
import { productList } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" mx-32  py-10   lg:py-14">
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
      {/* End Title */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">
        {
          // Add a grid item here
          productList.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-2 bg-gray-50 hover:bg-gray-100 border-gray-200 rounded-2xl items-center text-center  p-5  border-2 "
            >
              <div>
                <Image
                  width={100}
                  height={100}
                  src="/assets/products/product.png"
                  alt="Product Image"
                />
              </div>
              <div>
                <Link href={`products/${product?.id}`} className="font-bold hover:underline cursor-pointer">
                  {product.name}
                </Link>
                <p className="font-light text-gray-600">{product.subtitle}</p>
              </div>
            </div>
          ))
        }

        {/* Add more grid items here */}
      </div>
    </div>
  );
};

export default page;
