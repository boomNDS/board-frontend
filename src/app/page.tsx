"use client";
import { useState } from "react";
import CNavbar from "./components/CNavbar";
import CategoryDropdown from "./components/CategoryDropdown";
import CButton from "./components/CButton";
import { Icon } from '@iconify/react';


export default function Home() {
  const [postCategory, setPostCategory] = useState('Community');

  return (
    <main className="min-h-screen bg-grey-100">
      <CNavbar />
      <section className="w-full mt-[5rem]">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 justify-center items-end">
            <div className="flex items-center border-2 focus:border-green-100 border-green-100 max-w-[535px] w-full bg-transparent rounded">
              <Icon icon="mdi:magnify" width={20} height={20} className="ml-2 text-green-100" />
              <input
                type="text"
                placeholder="Search"
                className="input bg-transparent focus:outline-0 border-0 input-bordered w-full placeholder:text-base pl-2"
              />
            </div>
            <CategoryDropdown postCategory={postCategory} setPostCategory={setPostCategory} />
            <CButton textValue="Create" icon="mdi:plus" />
          </div>
        </div>
      </section>
    </main>
  );
}
