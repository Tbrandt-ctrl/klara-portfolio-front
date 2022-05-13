import { CaseStudyAttributes } from "@/types/queries/caseStudy";

import Image from "next/image";

const CaseStudyHero = ({ attributes }: { attributes: CaseStudyAttributes }) => {
  const { thumbnail } = attributes;
  const url = `http://localhost:1337${thumbnail.data.attributes.url}`;

  const { height, width } = thumbnail.data.attributes;

  return (
    <div className="relative h-screen fccc p-40">
      <div className="relative h-[80vh] w-[80vw]">
        <Image
          src={url}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="border rounded-lg"
        />
      </div>
    </div>
  );
};

export default CaseStudyHero;
