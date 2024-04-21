"use client";
import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NewArrival from "./components/NewArrival";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const [cartNumber, setcartNumber] = useState(0);
  const [searchCategory, setSearchCategory] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="w-full">
      <NavBar
        cartNumber={cartNumber}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Hero />
      <NewArrival setCartNumber={setcartNumber} cartNumber={cartNumber} searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}/>

      <ToastContainer />
    </section>
  );
}
