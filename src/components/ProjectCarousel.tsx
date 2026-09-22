import React, { useState, useRef } from "react";

interface ProjectCarouselProps {
  images: string[];
  alt: string;
  link?: string;
}

function ProjectCarousel({ images, alt, link }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const hasLink = !!link && link !== "#";
  const image = (
    <img src={images[index]} className="zoom" alt={`${alt} ${index + 1}`} width="100%" />
  );

  return (
    <div className="carousel" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {hasLink ? (
        <a href={link} target="_blank" rel="noreferrer">{image}</a>
      ) : image}

      {count > 1 && (
        <>
          <button type="button" className="car-arrow car-prev" aria-label="Previous photo" onClick={() => go(-1)}>&#8249;</button>
          <button type="button" className="car-arrow car-next" aria-label="Next photo" onClick={() => go(1)}>&#8250;</button>
          <span className="car-count">{index + 1} / {count}</span>
          <div className="car-dots">
            {images.map((_, k) => (
              <button
                key={k}
                type="button"
                className={`car-dot${k === index ? " active" : ""}`}
                aria-label={`Go to photo ${k + 1}`}
                onClick={() => setIndex(k)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectCarousel;
