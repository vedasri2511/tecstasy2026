import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import img1 from '@/assets/1.jpeg';
import img2 from '@/assets/2.png';
import img3 from '@/assets/3.png';
import img4 from '@/assets/4.png';
import img5 from '@/assets/5.png';
import img6 from '@/assets/6.png';
import img7 from '@/assets/7.png';
import img8 from '@/assets/8.png';
import img9 from '@/assets/9.png';

const Glimpse2K25 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  // Circle positions for 8 outer images
  const getImagePosition = (index: number) => {
    const angle = (index * 360) / 8;
    const radius = isMobile ? 120 : 200;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y, angle };
  };

  const closeModal = (e?: React.MouseEvent) => {
    if (e && e.target !== e.currentTarget) return;
    setSelectedImageIndex(null);
  };

  return (
    <section id="glimpse" className="relative py-24 md:py-32 px-4 min-h-screen flex items-center">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-glow-strong tracking-widest">2K25 GLIMPSE</h2>
          <p className="mt-3 text-muted-foreground">Moments from TECSTASY 2K25</p>
        </div>

        {/* Circular Image Container */}
        <div className="relative w-full flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-[600px] md:h-[600px] mx-auto">
            {/* Outer 8 Images in Circle */}
            {images.slice(0, 8).map((img, index) => {
              const { x, y } = getImagePosition(index);
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <div 
                    onClick={() => setSelectedImageIndex(index)}
                    className="relative w-20 h-20 md:w-32 md:h-32 rounded-lg overflow-hidden box-glow border border-border/60 transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`glimpse-${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}

            {/* Center Image (9th) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
              <div 
                onClick={() => setSelectedImageIndex(8)}
                className="relative w-24 h-24 md:w-40 md:h-40 rounded-lg overflow-hidden box-glow border border-border/60 transition-transform duration-300 group-hover:scale-105 cursor-pointer shadow-2xl"
              >
                <img
                  src={images[8]}
                  alt="glimpse-center"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-2xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={images[selectedImageIndex]}
              alt={`glimpse-${selectedImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg box-glow border border-border/60"
            />
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 p-2 bg-background/80 rounded-full border border-border/60 hover:bg-background transition-colors"
            >
              <X size={24} className="text-foreground" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Glimpse2K25;
