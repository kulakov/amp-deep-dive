import { useEffect, useRef, useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";

// Placeholder for future images - will be replaced when user uploads remaining 6
const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
];

const PhotoGallery = () => {
  const [visiblePhotos, setVisiblePhotos] = useState<number[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          galleryImages.forEach((_, index) => {
            setTimeout(() => {
              setVisiblePhotos((prev) => [...prev, index]);
            }, index * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Desktop scattered positions for 9 images (will be 16 later)
  const desktopPositions = [
    { rotate: -5, top: "0%", left: "0%", size: "w-44", z: 2 },
    { rotate: 4, top: "2%", left: "16%", size: "w-48", z: 3 },
    { rotate: -3, top: "0%", left: "34%", size: "w-40", z: 1 },
    { rotate: 6, top: "4%", left: "52%", size: "w-44", z: 2 },
    { rotate: -7, top: "0%", left: "70%", size: "w-40", z: 1 },
    { rotate: 3, top: "32%", left: "5%", size: "w-44", z: 4 },
    { rotate: -4, top: "35%", left: "25%", size: "w-48", z: 5 },
    { rotate: 5, top: "30%", left: "48%", size: "w-40", z: 3 },
    { rotate: -6, top: "34%", left: "68%", size: "w-44", z: 4 },
  ];

  return (
    <section className="py-24 px-6 border-b border-callout-border bg-background relative z-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-12">
        <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block mb-6">
          Атмосфера
        </span>
        <h2 className="text-2xl md:text-3xl font-display italic">
          Вот вам еще фоток, чтобы проникнуться
        </h2>
      </div>

      {/* Mobile horizontal scroll */}
      <div className="md:hidden overflow-x-auto overflow-y-visible pb-4 -mx-6 px-6 -mb-4">
        <div className="flex gap-4 pb-8" style={{ width: "max-content" }}>
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="w-36 flex-shrink-0 bg-white p-2 shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop scattered gallery */}
      <div
        ref={galleryRef}
        className="hidden md:block relative h-[500px] max-w-6xl mx-auto"
      >
        {galleryImages.map((img, i) => {
          const pos = desktopPositions[i];
          const isVisible = visiblePhotos.includes(i);
          return (
            <div
              key={i}
              className={`absolute ${pos.size} bg-white p-2 shadow-xl cursor-pointer transition-all duration-300 ease-out group
                ${isVisible ? "opacity-100" : "opacity-0 translate-y-8"}`}
              style={{
                transform: `rotate(${pos.rotate}deg)`,
                top: pos.top,
                left: pos.left,
                zIndex: pos.z,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(0deg) scale(1.5)`;
                e.currentTarget.style.zIndex = "100";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${pos.rotate}deg)`;
                e.currentTarget.style.zIndex = String(pos.z);
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PhotoGallery;
