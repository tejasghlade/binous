import AboutFeature from "@/components/AboutFeature";
import AboutFeatureImage from "@/components/AboutFeatureImage";
import AboutHero from "@/components/AboutHero";
import React from "react";

const page = () => {
  return (
    <>
      <header className="relative h-[500px] flex items-center justify-center h-screen  overflow-hidden">
        <div className="relative z-30 p-5 text-6xl w-2/3 text-center text-white  bg-opacity-50 rounded-xl">
          We Don't just fix your tech
          <br /> we fix your health
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full   max-w-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>

      <div className="text-center w-full px-80 bg-white flex flex-col gap-5 my-24">
        <h3 className="text-5xl font-semibold">
          Solutions for the way you live
        </h3>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolor
          obcaecati dolorem odio eum, cumque tempore totam praesentium alias
          quos at accusamus accusantium dolore consequatur temporibus, voluptate
          dolorum quasi? Soluta sunt dicta cum beatae optio hic quos. Atque,
          quia expedita.
        </p>
      </div>

      <header className="relative h-[500px] flex items-center justify-center h-screen  overflow-hidden">
        <div className="relative z-30 p-10  w-2/3 bg-white text-center text-white  bg-opacity-50 rounded-xl">
          <h3 className="text-5xl font-semibold">
            Solutions for the way you live
          </h3>
          <p className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolor
            obcaecati dolorem odio eum, cumque tempore totam praesentium alias
            quos at accusamus accusantium dolore consequatur temporibus,
            voluptate dolorum quasi? Soluta sunt dicta cum beatae optio hic
            quos. Atque, quia expedita.
          </p>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full   max-w-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
      </header>

      <div className="text-center w-full px-80 bg-white flex flex-col gap-5 my-24">
        <h3 className="text-5xl font-semibold">
          Solutions for the way you live
        </h3>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolor
          obcaecati dolorem odio eum, cumque tempore totam praesentium alias
          quos at accusamus accusantium dolore consequatur temporibus, voluptate
          dolorum quasi? Soluta sunt dicta cum beatae optio hic quos. Atque,
          quia expedita.
        </p>
      </div>
      

    
    </>
  );
};

export default page;
