import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog } from "@/lib/portal";
import styles from "./page.module.css";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return { title: "Article not found | Naturals ADFT" };
  return {
    title: `${blog.metaTitle ?? blog.title} | Naturals ADFT`,
    description: blog.metaDescription ?? blog.excerpt ?? undefined,
  };
}

export default async function BlogArticlePage({ params }: Params) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();

  return (
    <article className={styles.page}>
      <div className={`container ${styles.head}`}>
        <Link href="/blog" className={styles.back}>
          ← All articles
        </Link>
        <p className={styles.category}>{blog.category}</p>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.byline}>
          {blog.author && <span>By {blog.author}</span>}
          {blog.author && blog.date && <span className={styles.dot} aria-hidden="true" />}
          {blog.date && <span>{blog.date}</span>}
        </p>
      </div>

      {blog.image && (
        <div className={`container ${styles.heroWrap}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={blog.image} alt={blog.title} className={styles.heroImg} />
        </div>
      )}

      <div className={`container ${styles.contentWrap}`}>
        {blog.content ? (
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: blog.content }} />
        ) : (
          blog.excerpt && <p className={styles.lead}>{blog.excerpt}</p>
        )}

        <div className={styles.footerNav}>
          <Link href="/blog" className={`btn btn--primary btn--sm ${styles.backBtn}`}>
            ← Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}
