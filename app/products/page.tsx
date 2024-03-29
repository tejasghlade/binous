import AboutHero from "@/components/AboutHero";
import { Separator } from "@/components/ui/separator";
import { productList } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
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
      {/* End Title */}
      <Separator className="my-4" />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
        <div className="grid col-span-3 grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4">
          {productList.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-2 bg-gray-50 hover:bg-gray-100 border-gray-200 rounded-2xl items-center text-center p-5 border-2"
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
                <Link
                  href={`products/${product?.id}`}
                  className="font-bold hover:underline cursor-pointer"
                >
                  {product.name}
                </Link>
                <p className="font-light text-gray-600">{product.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2 border-2 p-5 rounded-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
          aperiam ducimus adipisci, quisquam odit quas? Dolorem veniam saepe
          nemo, impedit earum iste optio voluptatem sint alias temporibus
          tenetur, amet sit enim porro inventore voluptates a nostrum quisquam
          consequatur odio. Asperiores sequi eum nam suscipit velit neque
          corrupti itaque doloribus dolore, ex corporis praesentium cupiditate,
          optio maxime. Fuga veniam itaque non mollitia in reprehenderit ex vero
          ipsum sit, facilis totam eos officia quas! Quam quaerat tenetur magnam
          maxime, repudiandae assumenda itaque natus a neque architecto fuga,
          eius ullam? Veritatis deleniti consequatur est totam laboriosam optio
          accusamus quod voluptas. Iusto a quam dolorum veritatis pariatur totam
          obcaecati facilis quas officia laborum eos rerum ipsum alias
          asperiores illo, cupiditate voluptatem quibusdam tempore, ea quidem
          mollitia cumque quo? Iure rem fugiat rerum enim id animi officiis ex
          nam! Excepturi commodi asperiores officia facilis ipsum dolor tenetur
          fugit magni ad id cupiditate nobis aspernatur beatae amet, omnis nihil
          exercitationem doloribus voluptas ducimus aliquam veritatis?
          Repudiandae incidunt deserunt culpa est, nemo alias dolorum sapiente
          harum consequuntur reiciendis fuga perspiciatis unde ducimus veniam at
          dolor vitae earum odit cupiditate provident quos esse expedita.
          Corporis quo repudiandae nulla sint est? Et reprehenderit nulla
          suscipit facere, expedita eius illo?
        </div>

        {/* Add more grid items here */}
      </div>
    </div>
  );
};

export default page;
