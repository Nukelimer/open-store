import Image from "next/image";
import React, { useRef } from "react";
import { BiCart, BiSearch } from "react-icons/bi";

interface Props {
  cartNumber: number;
  searchCategory: boolean;
  setSearchCategory: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

function NavBar({
  cartNumber,
  searchCategory,
  setSearchCategory,
  searchQuery,
  setSearchQuery,
}: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="">
      <nav className=" flex justify-between py-6 px-4 bg-secondary fixed z-20 w-screen max-w-[1400px] ">
        <div className="h-fit self-center  w-fit">
          <Image
            src={"/images/navigation.png"}
            alt="image"
            width={20}
            height={20}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </div>
        <div className="h-fit w-fit">
          <Image
            src={"/images/logo.png"}
            alt="image"
            width={80}
            height={20}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </div>
        <div className=" flex  self-center gap-4 h-fit">
          <BiSearch
            size={40}
            onClick={() => {
              setSearchCategory(!searchCategory);
              setTimeout(() => {
                inputRef.current?.focus();
              }, 100);
            }}
          />
          <div className=" flex justify-center">
            <p
              className={` text-center absolute md:right-auto lg:right-auto   ${
                cartNumber > 11 ? "ml-[7px] " : "ml-[7px]"
              } bottom-12`}>
              {cartNumber}
            </p>
            <BiCart size={40} />
          </div>
        </div>
      </nav>
      {searchCategory && (
        <div className="z-50 flex justify-end items-end lg:right-auto w-screen top-20 fixed text-xl max-w-[1400px] ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col w-1/4 bg-white  py-4 px-4 ">
            <label htmlFor="search" className="text-center text-nowrap">
              Search Product
            </label>
            <input
              className="border rounded p-3 border-black"
              id="search"
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default NavBar;
