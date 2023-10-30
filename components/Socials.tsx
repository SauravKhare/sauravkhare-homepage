"use client";

import { useState } from "react";
import Paragraph from "./Paragraph";
import { Connect } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export default function Socials() {
  const [emailVisible, setEmailVisible] = useState(false);

  return (
    <div className="flex gap-5 align-middle flex-wrap">
      {Connect.map((item) => (
        <Link key={item.name} href={item.value}>
          <Image src={item.image} width={28} height={28} alt={item.name} />
        </Link>
      ))}
      <Paragraph classname="mb-3 text-base font-normal font-inter text-gray-500">
        <span
          onClick={() => {
            setEmailVisible((prev) => !prev);
          }}
          className={`cursor-pointer ${emailVisible ? "blur-none" : "blur-sm"}`}
        >
          {emailVisible ? "saurav.erahk@gmail.com" : "No bots please!"}
        </span>
      </Paragraph>
    </div>
  );
}
