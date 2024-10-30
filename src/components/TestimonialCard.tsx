"use client";

import Image from "next/image";

import {
  wrapper,
  header,
  img_container,
  img,
  name_container,
  name as name_style,
  tag as tag_style,
  text as text_style,
} from "@/components/TestimonalCard.module.css";

type TestimonialCardProp = {
  img_url: string;
  name: string;
  tag: string;
  text: string;
};

export function TestimonialCard({
  img_url,
  name,
  tag,
  text,
}: TestimonialCardProp) {
  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={img_container}>
          <Image
            className={img}
            src={img_url}
            alt={name}
            width={48}
            height={48}
          />
        </div>
        <div className={name_container}>
          <span className={name_style}>{name}</span>
          <span className={tag_style}>{`@${tag}`}</span>
        </div>
      </div>
      <div className={text_style}>{text}</div>
    </div>
  );
}