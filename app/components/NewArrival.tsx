"use client";

import { GoArrowRight } from "react-icons/go";
import StraightDivider from "./StraightDivider";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { product } from "../../utils/files";
import Spinner from "./Spinner";
import { BiCart } from "react-icons/bi";
import { toast } from "react-toastify";

interface Product {
  id: string;
  item: string;
  gender: string;
  src: string;
  price: number;
}
interface Props {
  setCartNumber: React.Dispatch<React.SetStateAction<number>>;
  cartNumber: number;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}
function NewArrival({
  setCartNumber,
  cartNumber,
  searchQuery,
  setSearchQuery,
}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [femaleCategory, setFemaleCategory] = useState(false);
  const [maleCategory, setMaleCategory] = useState(false);
  const [searchProducts, setSearchProducts] = useState<Product[]>([]);
  let number = 2;
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchProducts(filtered);
  }, [searchQuery, products]);

  useEffect(() => {
    setTimeout(() => {
      const initialProducts = [...product];
      setProducts(initialProducts);
      setLoading(false);
    }, 2000);
  }, []);

  const allFilterHandler = function () {
    setLoading(true);
    setTimeout(() => {
      setProducts(product);
      setLoading(false);
    }, 1000);
    setMaleCategory(false);
    setFemaleCategory(false);
  };

  const filteredProducts = useMemo(() => {
    return products;
  }, [products]);

  const showFemaleCategory = () => {
    setFemaleCategory(!femaleCategory);
    setMaleCategory(false);
  };

  const showMaleCategory = () => {
    setMaleCategory(!maleCategory);
    setFemaleCategory(false);
  };

  return (
    <section className=" bg-secondary flex flex-col items-center justify-center  pt-8 pb-4">
      <div className="">
        <h2 className=" font-semibold text-3xl ">New Arrival</h2>
        <StraightDivider />
      </div>

      <div className="flex h- w-full justify-around mt-6 mb-">
        <div className="">
          <p
            className=" hover:animate-pulse bg-black text-white hover:bg-slate-800 hover:text-white  py-2 px-12 rounded active:animate-pulse cursor-pointer"
            onClick={allFilterHandler}>
            All
          </p>{" "}
          {"" && (
            <div className="absoluvte top-full left-0 bg-white border rounded shadow-md py-4 px-6 w-full flex items-center flex-col">
              <p className="">Skirt</p>
              <p className="py-2">Polo</p>
              <p>Short</p>
              <p className="py-2">Top</p>

              <p>Gown</p>
            </div>
          )}
        </div>
        <div>
          <p
            className=" hover:animate-pulse  bg-black text-white hover:bg-slate-800 hover:text-white py-2 px-12 rounded active:animate-pulse cursor-pointer"
            onClick={showMaleCategory}>
            Male
          </p>

          {maleCategory && (
            <div className=" flex flex-col items-center justify-center">
              <p
                className=" hover:cursor-pointer py-2  w-full  text-center border"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const maleFilter = product.filter(
                      (product) => product.category == "handless"
                    );
                    setProducts(maleFilter);
                    setLoading(false);
                  }, 1000);
                  setMaleCategory(false);
                }}>
                Sleeveless
              </p>
              <p
                className="py-2 hover:cursor-pointer cursor-pointer w-full text-center border mt-1"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const maleFilter = product.filter(
                      (product) => product.category == "shortnicker"
                    );
                    setProducts(maleFilter);
                    setLoading(false);
                  }, 1000);
                  setMaleCategory(false);
                }}>
                Short
              </p>
              <p
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const maleFilter = product.filter(
                      (product) => product.category == "stripes-sleeve"
                    );
                    setProducts(maleFilter);
                    setLoading(false);
                  }, 1000);
                  setMaleCategory(false);
                }}
                className="py-2 hover:cursor-pointer cursor-pointer w-full text-center border mt-1">
                Stripe Sleeves
              </p>
              <p
                className="py-2 hover:cursor-pointer cursor-pointer w-full text-center border mt-1"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const femaleFilter = product.filter(
                      (product) => product.category == "trouser"
                    );
                    setProducts(femaleFilter);
                    setLoading(false);
                  }, 1000);
                  setMaleCategory(false);
                }}>
                Trousers
              </p>

              <p
                className="py-2 hover:cursor-pointer cursor-pointer w-full text-center border mt-1"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const femaleFilter = product.filter(
                      (product) => product.category == "sandal"
                    );
                    setProducts(femaleFilter);
                    setLoading(false);
                  }, 1000);
                  setMaleCategory(false);
                }}>
                Sandal
              </p>

              <p
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const maleFilter = product.filter(
                      (product) => product.category == "polo"
                    );
                    setProducts(maleFilter);
                    setLoading(false);
                  }, 1000);
                  setMaleCategory(false);
                }}
                className="py-2 hover:cursor-pointer cursor-pointer w-full text-center border mt-1">
                Polo
              </p>
            </div>
          )}
        </div>
        <div>
          <p
            className=" hover:animate-pulse  bg-black text-white hover:bg-slate-800 hover:text-white py-2 px-12 rounded active:animate-pulse cursor-pointer"
            onClick={showFemaleCategory}>
            Female
          </p>

          {femaleCategory && (
            <div className=" flex flex-col items-center justify-center">
              <p
                className=" hover:cursor-pointer py-2  w-full  text-center border"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const femaleFilter = product.filter(
                      (product) => product.category == "f-skirt"
                    );
                    setProducts(femaleFilter);
                    setLoading(false);
                  }, 1000);
                  setFemaleCategory(false);
                }}>
                Skirt
              </p>
              <p
                className="py-2 hover:cursor-pointer cursor-pointer w-full text-center border mt-1"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const femaleFilter = product.filter(
                      (product) => product.category == "f-polo"
                    );
                    setProducts(femaleFilter);
                    setLoading(false);
                  }, 1000);
                  setFemaleCategory(false);
                }}>
                Polo
              </p>
              <p
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const femaleFilter = product.filter(
                      (product) => product.category == "f-short"
                    );
                    setProducts(femaleFilter);
                    setLoading(false);
                  }, 1000);
                  setFemaleCategory(false);
                }}
                className="py-2 hover:cursor-pointer cursor-pointer w-full text-center border mt-1">
                Short
              </p>
              <p
                className="py-2 hover:cursor-pointer cursor-pointer w-full text-center border mt-1"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const femaleFilter = product.filter(
                      (product) => product.category == "f-top"
                    );
                    setProducts(femaleFilter);
                    setLoading(false);
                  }, 1000);
                  setFemaleCategory(false);
                }}>
                Top
              </p>

              <p
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const femaleFilter = product.filter(
                      (product) => product.category == "f-gown"
                    );
                    setProducts(femaleFilter);
                    setLoading(false);
                  }, 1000);
                  setFemaleCategory(false);
                }}
                className="py-2 hover:cursor-pointer cursor-pointer w-full text-center border mt-1">
                Gown
              </p>
            </div>
          )}
        </div>
      </div>

      {loading ? (
        <div className=" flex justify-center items-center col-span-full h-[200px] w-[200px]">
          <Spinner />
        </div>
      ) : searchQuery.length > 3 ? (
        <>
          <h2 className=" font-bold my-6">Search Result:</h2>
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {searchProducts.map((product) => (
              <>
                <div
                  className=" flex flex-col  p-4 shadow-md border border-neutral-700-600 rounded-sm "
                  key={product.id}>
                  <div
                    className=" flex self-end cursor-pointer"
                    onClick={() => {
                      setCartNumber((a) => a + 1);

                      toast.success(
                        `${cartNumber} ${
                          cartNumber  <= 1 ? "item" : "items"
                        } has been added.`,
                        {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          theme: "light",
                        }
                      );
                    }}>
                    <BiCart size={40} />
                  </div>
                  <Image
                    className="hover:opacity-50 hover:transition-all hover:delay-200"
                    width={200}
                    height={200}
                    alt="Product Image"
                    src={product.src}
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />
                  <div className=" flex justify-between  hover:opacity-50 hover:transition-all hover:delay-200 text-l font-semibold">
                    <p>{product.item}</p>
                    <p className="text-green-500">
                      {`₦${product.price.toLocaleString()}`}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      ) : (
        <div className=" pt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts?.map((item) => {
            return (
              <div
                className=" flex flex-col  p-4 shadow-md border border-neutral-700-600 rounded-sm "
                key={item.id}>
                <div
                  className=" flex self-end cursor-pointer"
                  onClick={() => {
                    setCartNumber(cartNumber + 1);

                    toast.success(
                      `${cartNumber} ${
                        cartNumber < 2 ? "item" : "items"
                      } has been added.`,
                      {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,

                        theme: "light",
                      }
                    );
                  }}>
                  <BiCart size={40} />
                </div>
                <Image
                  className="hover:opacity-50 hover:transition-all hover:delay-200"
                  width={200}
                  height={200}
                  alt="Product Image"
                  src={item.src}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
                <div className=" flex justify-between  hover:opacity-50 hover:transition-all hover:delay-200 text-l font-semibold">
                  <p>{item.item}</p>
                  <p className="text-green-500">
                    {`₦${item.price.toLocaleString()}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

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
