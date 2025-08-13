import React, { useState } from "react";

interface ZoomableFigureProps {
  src: string;
  alt: string;
  caption: string;
}

const ZoomableFigure: React.FC<ZoomableFigureProps> = ({ src, alt, caption }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <figure
        className="mx-auto my-6 w-96 text-center cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform"
        />
        <figcaption className="mt-2 text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      </figure>


      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-100 bg-opacity-0 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
        </div>
      )}
    </>
  );
};

export default ZoomableFigure;
