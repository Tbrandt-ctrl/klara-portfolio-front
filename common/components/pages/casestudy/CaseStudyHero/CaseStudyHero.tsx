import { CaseStudyAttributes } from "@/types/queries/caseStudy";
import DefaultImage from "@/utils/DefaultImage";

const CaseStudyHero = ({ attributes }: { attributes: CaseStudyAttributes }) => {
  const { page_thumbnail, title } = attributes && attributes;
  console.log(attributes);

  const alternativeText =
    (page_thumbnail?.data && page_thumbnail.data.attributes.alternativeText) ||
    "";

  const url =
    (page_thumbnail?.data && page_thumbnail.data.attributes.url) || "";

  return (
    <div className="relative h-screen fccc px-0 md:px-10 gap-10">
      <div className="relative h-80 md:h-[55vh] w-full">
        {page_thumbnail && url && (
          <DefaultImage
            rounded
            url={url}
            alternativeText={alternativeText || ""}
          />
        )}
      </div>

      <div className="w-full px-5 md:px-36 fccc">
        {" "}
        <h1 className="text-center text-3xl font-bold text-main ">{title}</h1>
      </div>
    </div>
  );
};

export default CaseStudyHero;
