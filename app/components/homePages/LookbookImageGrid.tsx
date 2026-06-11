// app/components/homePages/LookbookImageGrid.tsx
import React from "react";

interface LookbookImage {
  id: number;
  href: string;
  img: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

interface LookbookImageGridProps {
  threeImagesBlock1: LookbookImage[];
  singleImageBlock1: LookbookImage[];
  threeImagesBlock2: LookbookImage[];
  singleImageBlock2: LookbookImage[];
  twoImagesBlock: LookbookImage[];
  mobileTwoImagesBlock1: LookbookImage[];
  mobileFullImageBlock1: LookbookImage[];
  mobileTwoImagesBlock2: LookbookImage[];
  mobileTwoImagesBlock3: LookbookImage[];
  mobileFullImageBlock2: LookbookImage[];
  mobileTwoImagesBlock4: LookbookImage[];
}

const LookbookImageGrid: React.FC<LookbookImageGridProps> = ({
  threeImagesBlock1,
  singleImageBlock1,
  threeImagesBlock2,
  singleImageBlock2,
  twoImagesBlock,
  mobileTwoImagesBlock1,
  mobileFullImageBlock1,
  mobileTwoImagesBlock2,
  mobileTwoImagesBlock3,
  mobileFullImageBlock2,
  mobileTwoImagesBlock4
}) => {
  return (
    <>
      {/* Desktop Version */}
      <div className="desktop-blocks-section hide-mobile">
        {/* Three Images Block 1 */}
        <div className="three-images-block">
          {threeImagesBlock1.map((img) => (
            <a key={img.id} href={img.href} className="image-wrapper">
              <img 
                src={img.img} 
                width={img.width} 
                height={img.height} 
                alt={img.alt}
                loading="eager"
              />
            </a>
          ))}
        </div>

        {/* Single Image Block 1 */}
        <div className="single-image-block">
          {singleImageBlock1.map((img) => (
            <a key={img.id} href={img.href} className="image-wrapper">
              <img 
                src={img.img} 
                width={img.width} 
                height={img.height} 
                alt={img.alt}
                loading="eager"
              />
            </a>
          ))}
        </div>

        {/* Three Images Block 2 */}
        <div className="three-images-block">
          {threeImagesBlock2.map((img) => (
            <a key={img.id} href={img.href} className="image-wrapper">
              <img 
                src={img.img} 
                width={img.width} 
                height={img.height} 
                alt={img.alt}
                loading="eager"
              />
            </a>
          ))}
        </div>

        {/* Single Image Block 2 */}
        <div className="single-image-block">
          {singleImageBlock2.map((img) => (
            <a key={img.id} href={img.href} className="image-wrapper">
              <img 
                src={img.img} 
                width={img.width} 
                height={img.height} 
                alt={img.alt}
                loading="eager"
              />
            </a>
          ))}
        </div>

        {/* Two Images Block */}
        <div className="two-images-block">
          {twoImagesBlock.map((img) => (
            <a 
              key={img.id} 
              href={img.href} 
              className={`image-wrapper ${img.className || ""}`}
            >
              <img 
                src={img.img} 
                width={img.width} 
                height={img.height} 
                alt={img.alt}
                loading="eager"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="blocks-section hide-desktop">
        {/* Two Images Block 1 */}
        <div className="two-images-block">
          {mobileTwoImagesBlock1.map((img) => (
            <a key={img.id} href={img.href} className="image-wrapper">
              <img 
                src={img.img} 
                width={img.width} 
                height={img.height} 
                alt={img.alt}
                loading="eager"
              />
            </a>
          ))}
        </div>

        {/* Full Image Block 1 */}
        <div className="full-image-block">
          {mobileFullImageBlock1.map((img) => (
            <a key={img.id} href={img.href} className="image-wrapper">
              <img 
                src={img.img} 
                width={img.width} 
                height={img.height} 
                alt={img.alt}
                loading="eager"
              />
            </a>
          ))}
        </div>

        {/* Two Images Block 2 */}
        <div className="two-images-block">
          {mobileTwoImagesBlock2.map((img) => (
            <a key={img.id} href={img.href} className="image-wrapper">
              <img 
                src={img.img} 
                width={img.width} 
                height={img.height} 
                alt={img.alt}
                loading="eager"
              />
            </a>
          ))}
        </div>

        {/* Two Images Block 3 */}
        <div className="two-images-block">
          {mobileTwoImagesBlock3.map((img) => (
            <a key={img.id} href={img.href} className="image-wrapper">
              <img 
                src={img.img} 
                width={img.width} 
                height={img.height} 
                alt={img.alt}
                loading="eager"
              />
            </a>
          ))}
        </div>

        {/* Full Image Block 2 */}
        <div className="full-image-block">
          {mobileFullImageBlock2.map((img) => (
            <a key={img.id} href={img.href} className="image-wrapper">
              <img 
                src={img.img} 
                width={img.width} 
                height={img.height} 
                alt={img.alt}
                loading="eager"
              />
            </a>
          ))}
        </div>

        {/* Two Images Block 4 */}
        <div className="two-images-block">
          {mobileTwoImagesBlock4.map((img) => (
            <a key={img.id} href={img.href} className="image-wrapper">
              <img 
                src={img.img} 
                width={img.width} 
                height={img.height} 
                alt={img.alt}
                loading="eager"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default LookbookImageGrid;