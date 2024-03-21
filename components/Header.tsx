import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
    const commonClasses = "w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600";

    return (
      <div className="max-w-[85rem] py-10 rounded-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#bdc2c0]">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-4">
            <h1 className="block text-2xl font-serif leading-tight font-light text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Fast , reliable repairs at a fair price, for your favorite devices.
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
            Repairing medical equipment requires specialized knowledge and expertise. Our team of skilled technicians is dedicated to providing fast and reliable repairs for a wide range of medical devices. 
            </p>
            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <Button size={"lg"} className="rounded-full" >Start a repair</Button>
            </div>
          </div>
          <div className="lg:col-span-3 mt-10 lg:mt-0">
            <Image
              width={500}
              height={400}
              className="w-full rounded-xl"
              src="https://images.unsplash.com/photo-1666214280259-ab57309450b4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    );
};

export default Header;
