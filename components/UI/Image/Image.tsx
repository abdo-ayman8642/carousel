// components/LazyImage.tsx
import Image from "next/image";

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  ...rest
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy" // This enables lazy loading
    />
  );
};

export default LazyImage;
