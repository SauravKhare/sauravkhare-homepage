"use client";

import { useState } from "react";
import Paragraph from "./Paragraph";

export default function Socials() {
  const [emailVisible, setEmailVisible] = useState(false);

  return (
    <div className="flex gap-24">
      <div className="">
        <Paragraph classname="mb-3 text-base text-white">Email</Paragraph>
        <Paragraph classname="mb-3 text-base text-white">Twitter</Paragraph>
        <Paragraph classname="mb-3 text-base text-white">Github</Paragraph>
      </div>
      <div className="">
        <Paragraph classname="mb-3 text-base font-normal font-inter text-gray-500">
          <span
            onClick={() => {
              setEmailVisible((prev) => !prev);
            }}
            className={`cursor-pointer ${
              emailVisible ? "blur-none" : "blur-sm"
            }`}
          >
            {emailVisible ? "saurav.erahk@gmail.com" : "No bots please!"}
          </span>
        </Paragraph>
        <Paragraph classname="mb-3 text-base font-normal font-inter text-gray-500">
          <a href="https://twitter.com/ErahkSaurav" className="duration-500 hover:text-yellow-400" target="_blank">
            @ErahkSaurav
          </a>
        </Paragraph>
        <Paragraph classname="mb-3 text-base font-normal font-inter text-gray-500">
          <a href="https://github.com/SauravKhare" className="duration-500 hover:text-yellow-400" target="_blank">
            SauravKhare
          </a>
        </Paragraph>
      </div>
    </div>
  );
}