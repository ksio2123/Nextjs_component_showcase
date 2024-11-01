// import { TestimonialCard } from "@/components/TestimonialCard";
import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/testimonal_card"> Testimonal Card</Link>
      </li>
      <li>
        <Link href="/blog_card"> Blog Card</Link>
      </li>
    </ul>
  );
}
