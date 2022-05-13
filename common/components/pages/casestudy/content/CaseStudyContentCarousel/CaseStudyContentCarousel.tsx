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
    <div className="relative w-full h-auto flex flex-col justify-center items-center gap-6 ">
      <div className="relative flex justify-center items-center h-[60vh] w-full ">
        <Image src={current_url} layout="fill" objectFit="cover" />
      </div>
      <div className="frcc gap-6 w-full lg:px-44">
        {carousel_images.data.map((image, index) => (
          <ImageSlide
            image={image}
            current={current}
            setCurrent={setCurrent}
            index={index}
            length={carousel_images.data.length}
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
  length,
}: {
  image: ImageData;
  current: number;
  index: number;
  length: number;
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
      className={`relative flex justify-center items-center h-24 w-[${Math.round(
        100 / length
      )}%] hover:cursor-pointer ${active && "border border-red-500"} `}
    >
      <Image src={url} layout="fill" objectFit="cover" />
    </div>
  );
};
