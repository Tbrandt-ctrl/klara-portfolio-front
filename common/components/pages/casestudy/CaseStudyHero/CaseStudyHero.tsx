import { CaseStudyAttributes } from "@/types/queries/caseStudy";

import Image from "next/image";

const CaseStudyHero = ({ attributes }: { attributes: CaseStudyAttributes }) => {
  const { thumbnail } = attributes;
  const url = `http://localhost:1337${thumbnail.data.attributes.url}`;

  const { height, width } = thumbnail.data.attributes;

  return (
    <div className="h-screen fccc p-40">
      <Image src={url} height={height} width={width} />
    </div>
  );
};

export default CaseStudyHero;
