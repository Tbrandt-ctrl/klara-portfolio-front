import { CaseStudyAttributes } from "@/types/queries/caseStudy";
import DefaultImage from "@/utils/DefaultImage";

const CaseStudyHero = ({ attributes }: { attributes: CaseStudyAttributes }) => {
  const { thumbnail, title } = attributes && attributes;

  const alternativeText =
    (thumbnail.data && thumbnail.data.attributes.alternativeText) || "";

  const url = (thumbnail.data && thumbnail.data.attributes.url) || "";

  return (
    <div className="relative h-screen fccc p-40 gap-10">
      <div className="relative h-[80vh] w-[80vw]">
        {thumbnail && url && (
          <DefaultImage
            rounded
            url={url}
            alternativeText={alternativeText || ""}
          />
        )}
      </div>

      <h1 className="text-3xl font-bold text-main ">{title}</h1>
    </div>
  );
};

export default CaseStudyHero;
