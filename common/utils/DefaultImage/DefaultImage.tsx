import Image from "next/image";

const DefaultImage = ({
  height,
  width,
  url,
  alternativeText,
  rounded,
  fill,
}: {
  height?: number;
  width?: number;
  url: string;
  alternativeText?: string;
  rounded?: boolean;
  fill?: boolean;
}) => {
  return height && width ? (
    <Image
      src={url}
      alt={alternativeText}
      height={height}
      width={width}
      className={`${rounded && "border rounded-lg"}`}
    />
  ) : (
    <Image
      src={url}
      alt={alternativeText}
      className={`${rounded && "border rounded-lg"}`}
      layout="fill"
      objectPosition="center"
      objectFit={fill ? "fill" : "contain"}
    />
  );
};

export default DefaultImage;
