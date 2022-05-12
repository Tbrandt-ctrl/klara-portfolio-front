import { useEffect, useState } from "react";

import { CarouselContent, ImageData } from "@/types/queries/caseStudy";

import Image from "next/image";

const CaseStudyContentCarousel = ({
  element,
}: {
  element: CarouselContent;
}) => {
  const [current, setCurrent] = useState(0);

  const { carousel_images } = element;

  const current_image = carousel_images.data[current];
  const current_url = `http://localhost:1337${current_image.attributes.url}`;

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-6 ">
      <div className="flex justify-center items-center h-auto w-auto ">
        <Image
          src={current_url}
          height={current_image.attributes.height}
          width={current_image.attributes.width}
        />
      </div>
      <div className="frcc gap-6">
        {carousel_images.data.map((image, index) => (
          <ImageSlide
            image={image}
            current={current}
            setCurrent={setCurrent}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyContentCarousel;

const ImageSlide = ({
  image,
  current,
  index,
  setCurrent,
}: {
  image: ImageData;
  current: number;
  index: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [active, setActive] = useState(current === index);

  useEffect(() => {
    setActive(current === index);
  }, [current]);

  const url = `http://localhost:1337${image.attributes.url}`;
  return (
    <div
      onClick={() => setCurrent(index)}
      className={`relative flex justify-center items-center h-24 w-44 hover:cursor-pointer ${
        active && "border border-red-500"
      } `}
    >
      <Image src={url} layout="fill" objectFit="cover" />
    </div>
  );
};
