import { useEffect, useState } from "react";

import { CarouselContent } from "@/types/queries/caseStudy";
import { ImageData } from "@/types/queries/default";

import Image from "next/image";
import DefaultImage from "@/utils/DefaultImage";

const CaseStudyContentCarousel = ({
  element,
}: {
  element: CarouselContent;
}) => {
  const [current, setCurrent] = useState(0);

  const { carousel_images } = element;

  const current_image = carousel_images.data[current];

  const current_url = (current_image && current_image.attributes.url) || "";
  const current_alternativeText = current_image.attributes.alternativeText;

  return (
    <div className="relative w-full h-auto flex flex-col justify-center items-center gap-6 ">
      <div className="relative flex justify-center items-center h-[60vh] w-full ">
        <DefaultImage
          url={current_url}
          rounded
          alternativeText={current_alternativeText}
        />
      </div>
      <div className="frcc gap-6 w-full  xl:px-36">
        {carousel_images.data.map((image, index) => (
          <ImageSlide
            key={index}
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

  const url = image?.attributes.url || "";

  const { alternativeText } = image.attributes;

  return length ? (
    <div
      onClick={() => setCurrent(index)}
      className={`relative flex justify-center items-center h-24 w-56 hover:cursor-pointer ${
        active && "border border-red-500  rounded-lg"
      } `}
    >
      <DefaultImage url={url} alternativeText={alternativeText} rounded />
    </div>
  ) : (
    <div></div>
  );
};
