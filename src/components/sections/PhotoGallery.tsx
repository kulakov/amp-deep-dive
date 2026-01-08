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
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";

const galleryImages = [
  gallery1, gallery2, gallery3, gallery4,
  gallery5, gallery6, gallery7, gallery8,
  gallery9, gallery10, gallery11, gallery12,
  gallery13, gallery14, gallery15, gallery16,
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
            }, index * 80);
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

  // Desktop scattered positions for 16 images in 4 rows
  const desktopPositions = [
    // Row 1
    { rotate: -5, top: "0%", left: "0%", size: "w-40", z: 2 },
    { rotate: 4, top: "2%", left: "18%", size: "w-44", z: 3 },
    { rotate: -3, top: "0%", left: "38%", size: "w-36", z: 1 },
    { rotate: 6, top: "3%", left: "56%", size: "w-40", z: 2 },
    // Row 2
    { rotate: -7, top: "22%", left: "4%", size: "w-38", z: 4 },
    { rotate: 3, top: "24%", left: "22%", size: "w-44", z: 5 },
    { rotate: -4, top: "20%", left: "44%", size: "w-36", z: 3 },
    { rotate: 5, top: "23%", left: "62%", size: "w-40", z: 4 },
    // Row 3
    { rotate: -6, top: "44%", left: "2%", size: "w-42", z: 2 },
    { rotate: 4, top: "46%", left: "20%", size: "w-38", z: 3 },
    { rotate: -3, top: "42%", left: "40%", size: "w-44", z: 1 },
    { rotate: 7, top: "45%", left: "60%", size: "w-36", z: 2 },
    // Row 4
    { rotate: -4, top: "66%", left: "6%", size: "w-40", z: 4 },
    { rotate: 5, top: "68%", left: "24%", size: "w-36", z: 5 },
    { rotate: -6, top: "64%", left: "42%", size: "w-42", z: 3 },
    { rotate: 3, top: "67%", left: "58%", size: "w-40", z: 4 },
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
        className="hidden md:block relative h-[700px] max-w-5xl mx-auto"
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
              <div className="aspect-square overflow-hidden group-hover:aspect-auto group-hover:overflow-visible">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:object-contain group-hover:h-auto transition-all duration-500"
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
