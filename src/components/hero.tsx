import { ArrowDown } from "lucide-react";
import React from "react";

export const Hero = () => {
  return (
    <div className="my-44 flex w-full flex-col items-center selection:bg-[#67E8F9]">
      <h1 className="max-w-3xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-20 font-bold tracking-tight text-transparent selection:text-neutral-700">
        Unleash the power of intuitive finance
      </h1>
      <p className="mx-auto my-5 max-w-3xl text-center text-xl leading-relaxed tracking-normal text-gray-400 selection:text-neutral-600">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.{" "}
        <br />
        Simple. Intuitive. And never boring.
      </p>
      <div className="mt-7 flex flex-col items-center justify-center">
        <button className="group relative cursor-pointer overflow-hidden rounded-full border border-neutral-700 bg-black px-4 py-2 text-sm text-neutral-400 transition-all duration-400 hover:text-neutral-300">
          <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-[#4cb2bf] to-transparent transition-all duration-200 group-hover:top-0"></div>
          Join the waitlist
        </button>
        <button className="flex items-center flex-col mt-8 text-neutral-400 text-sm">
          Learn more
          <ArrowDown className="text-sm mt-2" width={18} height={18} />
        </button>
      </div>
    </div>
  );
};
