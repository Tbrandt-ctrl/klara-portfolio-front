import { SingleMediaContent } from "@/types/queries/caseStudy";
import DefaultImage from "@/utils/DefaultImage";

import Image from "next/image";

const CaseStudyContentSingleMedia = ({
  element,
}: {
  element: SingleMediaContent;
}) => {
  const { media } = element;

  const url = `http://localhost:1337${media.data.attributes.url}`;
  const { height, width, alternativeText } = media.data.attributes;

  return (
    <div className="relative">
      <DefaultImage
        rounded
        height={height}
        width={width}
        alternativeText={alternativeText}
        url={url}
      />
    </div>
  );
};

export default CaseStudyContentSingleMedia;
