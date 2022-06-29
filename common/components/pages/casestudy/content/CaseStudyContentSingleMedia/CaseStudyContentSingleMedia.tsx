import { SingleMediaContent } from "@/types/queries/caseStudy";
import DefaultImage from "@/utils/DefaultImage";

const CaseStudyContentSingleMedia = ({
  element,
}: {
  element: SingleMediaContent;
}) => {
  const { media } = element;

  const url = media?.data.attributes.url || "";
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
