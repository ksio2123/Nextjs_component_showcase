import { StaticImageData } from "next/image";
import BlogCardClassNames from "@/app/components/BlogCard.module.css";
import Link from "next/link";
import Image from "next/image";

const {
  wrapper,
  image,
  content,
  badge: badgeClass,
  badges: badgesClass,
  title: titleClass,
  text: textClass,
  read_more,
} = BlogCardClassNames;

type BlogCardProps = {
  img: StaticImageData;
  badges: string[];
  title: string;
  text: string;
};

export default function BlogCard({ img, badges, title, text }: BlogCardProps) {
  return (
    <div className={wrapper}>
      <Image className={image} src={img} alt="" width={380} height={288} />
      <div className={content}>
        <div className={badgesClass}>
          {badges.map((badge, key) => (
            <span className={badgeClass} key={key}>
              {badge}
            </span>
          ))}
        </div>
        <span className={titleClass}> {title}</span>
        <span className={textClass}> {text} </span>
        <Link href="/" className={read_more}>
          Read more &gt;
        </Link>
      </div>
    </div>
  );
}
