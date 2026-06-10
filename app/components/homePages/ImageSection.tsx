import React from "react";

type ImageSectionProps = {
  src: string;
  alt?: string;
};

const ImageSection: React.FC<ImageSectionProps> = ({ src, alt = "" }) => {
  return (
    <div className="Container">
      <div className="Rte">
        <p>
          <img src={src} alt={alt} />
        </p>
      </div>
    </div>
  );
};

export default ImageSection;