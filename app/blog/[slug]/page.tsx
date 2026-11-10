import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog } from "@/lib/portal";
import BlogArticleClient from "./BlogArticleClient";
import FaqAccordion from "./FaqAccordion";
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

  // Convert **bold** and [link](url) markdown in HTML content
  const processedContent = (() => {
    let html = blog.content
      ?.replace(/\[([^\]]+)\]\s*\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([\s\S]+?)\*\*/g, "<strong>$1</strong>") ?? "";

    // Wrap the Conclusion section in a styled div
    html = html.replace(
      /(<h[23][^>]*>(?:<[^>]+>)*\s*Conclusion\s*(?:<\/[^>]+>)*<\/h[23]>)([\s\S]*)$/i,
      '<div class="conclusion">$1$2</div>'
    );

    return html;
  })();

  // Extract first paragraph for TOC intro + h2/h3 headings
  const firstPara = processedContent
    .match(/<p[^>]*>(.*?)<\/p>/i)?.[1]
    ?.replace(/<[^>]*>/g, "")
    .trim() ?? "";

  const headingItems: string[] =
    processedContent
      .match(/<h[23][^>]*>(.*?)<\/h[23]>/gi)
      ?.map((h) => h.replace(/<[^>]*>/g, "").trim())
      .filter(Boolean) ?? [];

  const tocEntries = [
    ...(firstPara ? [`${firstPara.substring(0, 50)}...`] : []),
    ...headingItems.map((h) => `${h.substring(0, 50)}...`),
    ...(blog.faqs && blog.faqs.length > 0 ? ["FAQs"] : []),
  ];

  const headings = tocEntries;

  return (
    <article className={styles.page}>
      {/* ── Hero header ── */}
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroBody}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span>{blog.category}</span>
            </nav>
            {blog.category && (
              <span className={styles.categoryBadge}>{blog.category}</span>
            )}
            <h1 className={styles.title}>{blog.title}</h1>
            <div className={styles.meta}>
              {blog.author && (
                <span className={styles.metaItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                  {blog.author}
                </span>
              )}
              {blog.date && (
                <span className={styles.metaItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                  {blog.date}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Full image ── */}
      {blog.image && (
        <div className="container">
          <div className={styles.heroImgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={blog.image} alt={blog.title} className={styles.heroImg} />
          </div>
        </div>
      )}

      {/* ── Content + TOC ── */}
      <div className={`container ${styles.contentSection}`}>
        {/* Table of Contents */}
        {headings.length > 0 && (
          <aside className={styles.toc}>
            <div className={styles.tocInner}>
              <h3 className={styles.tocTitle}>Table of Contents</h3>
              <nav className={styles.tocNav}>
                {headings.map((h, i) => (
                  <button key={i} className={styles.tocItem} type="button">{h}</button>
                ))}
              </nav>
              <Link href="/blog" className={`btn btn--primary btn--sm ${styles.tocBack}`}>
                Explore All Articles
              </Link>
            </div>
          </aside>
        )}

        {/* Article body */}
        <div className={styles.articleWrap}>
          <BlogArticleClient back={headings.length === 0}>
            {processedContent ? (
              <div className={styles.content} dangerouslySetInnerHTML={{ __html: processedContent }} />
            ) : blog.excerpt ? (
              <p className={styles.lead}>{blog.excerpt}</p>
            ) : null}
          </BlogArticleClient>

          {blog.faqs && blog.faqs.length > 0 && (
            <div className={styles.faqSection}>
              <h2 className={styles.faqTitle}>FAQs</h2>
              <FaqAccordion faqs={blog.faqs} />
            </div>
          )}

          <div className={styles.footerNav}>
            <Link href="/blog" className="btn btn--primary btn--sm">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
