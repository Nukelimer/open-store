import Image from "next/image";
import React from "react";

function NavBar() {
  return (
    <nav className=" flex items-stretch justify-between   py-6 px-4 w-full bg-secondary ">
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
        <Image
          src={"/images/searchImg.png"}
          alt="image"
          width={20}
          height={20}
          style={{
            width: "auto",
            height: "auto",
          }}
        />{" "}
        <Image
          src={"/images/cart.png"}
          alt="image"
          width={20}
          height={20}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>
    </nav>
  );
}

export default NavBar;
