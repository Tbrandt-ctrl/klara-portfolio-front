import { SingleMediaContent } from "@/types/queries/caseStudy";

import Image from "next/image";

const CaseStudyContentSingleMedia = ({
  element,
}: {
  element: SingleMediaContent;
}) => {
  const { media } = element;

  const url = `http://localhost:1337${media.data.attributes.url}`;

  return (
    <div className="relative">
      <Image
        src={url}
        height={media.data.attributes.height}
        width={media.data.attributes.width}
      />
    </div>
  );
};

export default CaseStudyContentSingleMedia;
