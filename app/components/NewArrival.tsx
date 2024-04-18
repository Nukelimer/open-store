"use client";

import { GoArrowRight } from "react-icons/go";
import StraightDivider from "./StraightDivider";

import Image from "next/image";
import { useEffect, useState } from "react";


import { product } from "../../utils/files";
import Spinner from "./Spinner";

interface Product {
  id: string;
  item: string;
  gender: string;
  src: string;
  price: number;
}
function NewArrival() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const initialProducts = [...product];
      setProducts(initialProducts);
    }, 9000);
  }, []);

  return (
    <section className=" bg-secondary flex flex-col items-center justify-center  pt-8 pb-4">
      <div className="">
        <h2 className=" font-semibold text-3xl ">New Arrival</h2>
        <StraightDivider />
      </div>

      <div className="flex  w-full justify-around mt-6">
        <p className=" hover:animate-pulse hover:bg-black hover:text-white border py-2 px-12 rounded active:animate-pulse cursor-pointer">
          All
        </p>{" "}
        <p className=" hover:animate-pulse hover:bg-black hover:text-white border py-2 px-12 rounded active:animate-pulse cursor-pointer">
          Footwear
        </p>
        <p className=" hover:animate-pulse hover:bg-black hover:text-white border py-2 px-12 rounded active:animate-pulse cursor-pointer">
          Clothes
        </p>
      </div>

      <div className=" pt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.length < 1 ? (
          <div className=" flex justify-center items-center col-span-full h-[200px] w-[200px]">
          <Spinner/>
          </div>
        ) : (
          products?.map((item) => {
            return (
              <div
                className=" flex flex-col  p-4 shadow-md border border-neutral-700-600 rounded-sm hover:opacity-50 hover:transition-all hover:delay-200"
                key={item.id}>
                <Image
                  width={200}
                  height={200}
                  alt="Product Image"
                  src={item.src}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
                <div className=" flex justify-between  text-xl font-semibold">
                  <p>{item.item}</p>
                  <p className="text-green-500">
                    {item.price.toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="mt-12">
        <div className=" flex gap-2 hover:animate-pulse hover:bg-black hover:text-white border py-2 px-12 rounded active:animate-pulse cursor-pointer">
          <p>Explore More</p>

          <GoArrowRight className="self-center" />
        </div>
      </div>
    </section>
  );
}

export default NewArrival;
