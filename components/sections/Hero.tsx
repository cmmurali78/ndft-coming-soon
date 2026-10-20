"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { CtaLink, HeroContent } from "@/lib/types";
import styles from "./Hero.module.css";

const RING_RADIUS = 101;
const RING_COLUMNS = [0, 155, 310, 465];
const RING_ROWS = [0, 130, 260, 390];

function Rings({ x, y }: { x: number; y: number }) {
  const size = { w: RING_COLUMNS[3] + RING_RADIUS * 2 + 2, h: RING_ROWS[3] + RING_RADIUS * 2 + 2 };
  return (
    <svg
      className={styles.rings}
      style={{ left: `${((x - RING_RADIUS) / 1440) * 100}%`, top: y - RING_RADIUS }}
      width={size.w}
      height={size.h}
      viewBox={`0 0 ${size.w} ${size.h}`}
      aria-hidden="true"
    >
      {RING_ROWS.flatMap((ry) =>
        RING_COLUMNS.map((rx) => (
          <circle key={`${rx}-${ry}`} cx={rx + RING_RADIUS + 1} cy={ry + RING_RADIUS + 1} r={RING_RADIUS} />
        )),
      )}
    </svg>
  );
}

interface HeroProps extends HeroContent {
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  /** Home hero uses a pink highlight on purple; stream heroes use dark purple on the stream colour. */
  variant?: "home" | "stream";
  /** Number of pager dots to show when there is only one slide. */
  dotCount?: number;
}

export default function Hero({
  slides,
  image,
  rings,
  primaryCta,
  secondaryCta,
  variant = "stream",
  dotCount = 5,
}: HeroProps) {
  const [active, setActive] = useState(0);
  const isSlider = slides.length > 1;

  useEffect(() => {
    if (!isSlider) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [isSlider, slides.length, active]);

  const slide = slides[active];

  return (
    <section className={`${styles.hero} ${styles[variant]}`} aria-roledescription={isSlider ? "carousel" : undefined}>
      <div className={styles.banner}>
        <div className={styles.stage}>
          <Rings x={rings.x} y={rings.y} />
          <div
            className={`${styles.media} ${image.anchor === "right" ? styles.mediaRight : ""}`}
            style={
              image.anchor === "right"
                ? undefined
                : { left: `${(image.left / 1440) * 100}%`, top: image.top, width: `${(image.width / 1440) * 100}%` }
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.intrinsic[0]}
              height={image.intrinsic[1]}
              sizes="(max-width: 767px) 80vw, 640px"
              preload
            />
          </div>
        </div>

        <div className={`container ${styles.content}`}>
          <div key={active} className={styles.text} style={slide.offset !== undefined ? ({ "--offset": `${slide.offset}px` } as React.CSSProperties) : undefined}>
            <h1 className={styles.title}>
              {slide.title.map((line) => (
                <span key={line}>{line} </span>
              ))}
              {slide.highlight.map((line) => (
                <span key={line} className={styles.highlight}>
                  {line}{" "}
                </span>
              ))}
            </h1>
            <p className={styles.description} style={{ maxWidth: slide.descriptionWidth, fontSize: slide.descriptionSize }}>
              {slide.description}
            </p>
            <div className={styles.actions}>
              <a href={primaryCta.href} className="btn btn--white">
                {primaryCta.label}
              </a>
              <a href={secondaryCta.href} className="btn btn--outline-light">
                {secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>

      {isSlider ? (
        <div className={styles.dots} role="tablist" aria-label="Hero slides">
          {slides.map((s, i) => (
            <button
              key={s.title.join(" ")}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show slide ${i + 1}`}
              className={i === active ? styles.dotActive : styles.dot}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      ) : (
        <div className={styles.dots} aria-hidden="true">
          {Array.from({ length: dotCount }, (_, i) => (
            <span key={i} className={i === 0 ? styles.dotActive : styles.dot} />
          ))}
        </div>
      )}
    </section>
  );
}
