import BlogCard from "@/app/components/BlogCard";
import img from "/public/spacejoy-YqFz7UMm8qE-unsplash.jpg";
import BlogCardPageStyle from "@/app/blog_card/blog_card.module.css";

const { page } = BlogCardPageStyle;

export default function BlogCardPage() {
  return (
    <div className={page}>
      <BlogCard
        img={img}
        badges={["Interior"]}
        title="Top 5 Living Room Inspirations"
        text="Curated vibrants colors for your living, make it pop & calm in the same time."
      />
    </div>
  );
}
