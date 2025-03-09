"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";

// Import images
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/12.jpg";
import img8 from "./images/13.jpg";
import img11 from "./images/img11.jpeg";
import img12 from "./images/img12.jpeg";

export default function PhotoGallery() {
  // Use string | StaticImageData for proper TypeScript handling
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null);


  const images: (string | StaticImageData)[] = [img1, img2, img3, img4, img5, img6, img7, img8, img11, img12];

  // Close modal when pressing "Escape" key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div id="photo-gallery" className="w-full py-14 bg-gradient-to-b from-[#ecf4fb] to-[#e0f0ff] h-auto overflow-hidden">
      <h2 className="text-3xl ml-4 text-blue-600 font-bold md:ml-[6.25rem]">My Gallery</h2>

      {/* Image Modal - Opens when an image is clicked */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-[90%] max-h-[90vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Display selected image */}
              <img
                src={typeof selectedImage === "string" ? selectedImage : selectedImage.src}
                alt="Selected gallery image"
                className="w-auto h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Close button */}
              <motion.button
                className="absolute top-4 right-4 bg-white/20 p-3 rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
              >
                <X className="text-white" size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Grid */}
      <div className="w-[90%] mx-auto mt-10 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-md bg-white p-2 h-full aspect-square relative group"
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <img
                src={typeof image === "string" ? image : image.src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 cursor-pointer"
                onClick={() => setSelectedImage(image)} // Click to open modal
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedImage(image);
                  }
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
              >
                <p className="text-white font-medium text-center px-2 py-1 rounded bg-black/30 backdrop-blur-sm">
                  Click to view
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
