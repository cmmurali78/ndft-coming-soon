"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { Calendar, Clock, ArrowRight, TrendingUp, ChevronDown } from "@/components/ui/icons";
import type { BlogListItem } from "@/lib/portal";
import styles from "./page.module.css";

const PER_PAGE = 6;

export default function BlogIndex({ posts }: { posts: BlogListItem[] }) {
  const [category, setCategory] = useState("All Categories");
  const [visible, setVisible] = useState(PER_PAGE);

  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category).filter(Boolean));
    return ["All Categories", ...Array.from(set)];
  }, [posts]);

  const trending = useMemo(
    () => [...posts].sort((a, b) => (b.views ?? 0) - (a.views ?? 0)).slice(0, 3),
    [posts]
  );

  const filtered = category === "All Categories" ? posts : posts.filter((p) => p.category === category);
  const hasMore = visible < filtered.length;

  return (
    <div className={styles.layout}>
      <div className={styles.main}>
        {/* Banner — same position as skillcert's featured post */}
        <div className={styles.bannerWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/banner.webp"
            alt="Ideas, Insights and Inspiration for the Creative Generation"
            className={styles.bannerImg}
          />
        </div>

        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.slice(0, visible).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardImg}>
                  {post.thumbnail ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.thumbnail} alt={post.title} loading="lazy" />
                  ) : (
                    <span className={styles.imgFallback} aria-hidden="true" />
                  )}
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cat}>{post.category}</span>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                  {post.date && (
                    <p className={styles.metaDate}>
                      <Calendar size={14} /> {post.date}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className={styles.noneInCat}>No articles in this category yet.</p>
        )}

        {hasMore && (
          <div className={styles.loadMoreWrap}>
            <button className={styles.loadMore} onClick={() => setVisible((v) => v + 3)} type="button">
              Load More Articles <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      <aside className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <div className={styles.selectWrap}>
            <select
              className={styles.select}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setVisible(PER_PAGE);
              }}
              aria-label="Filter by category"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className={styles.selectChevron} aria-hidden="true" />
          </div>

          {trending.length > 0 && (
            <div className={styles.trending}>
              <h3 className={styles.trendingHead}>
                <TrendingUp size={18} /> Trending
              </h3>
              <div className={styles.trendingList}>
                {trending.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.trendItem}>
                    <div className={styles.trendThumb}>
                      {post.thumbnail ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={post.thumbnail} alt={post.title} loading="lazy" />
                      ) : (
                        <span className={styles.imgFallback} aria-hidden="true" />
                      )}
                    </div>
                    <div className={styles.trendBody}>
                      <span className={styles.cat}>{post.category}</span>
                      <h4 className={styles.trendTitle}>{post.title}</h4>
                      {post.date && (
                        <p className={styles.metaDate}>
                          <Clock size={12} /> {post.date}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
