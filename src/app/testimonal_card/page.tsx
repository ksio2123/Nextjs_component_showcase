import { TestimonialCard } from "@/app/components/TestimonialCard";
import pagestyle from "@/app/testimonal_card/testimonal_card_page.module.css";
import profilePic from "/public/profile-thumbnail.png";

const { page } = pagestyle;
export default function TestimonalCardPage() {
  return (
    <div className={page}>
      <TestimonialCard
        name="Sarah Dole"
        tag="sarahdole"
        img_url={profilePic}
        text="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
      />
    </div>
  );
}
