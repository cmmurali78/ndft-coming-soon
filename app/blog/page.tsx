import type { Metadata } from "next";
import { getBlogs } from "@/lib/portal";
import BlogIndex from "./BlogIndex";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog | Naturals ADFT",
  description:
    "Insights, stories and updates from Naturals ADFT — Academy of Design, Fashion & Technology. Design thinking, creative careers, and what's next in fashion, interiors and digital media.",
};

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <div className={styles.page}>
      <div className="container">
        <BlogIndex posts={posts} />
      </div>
    </div>
  );
}
