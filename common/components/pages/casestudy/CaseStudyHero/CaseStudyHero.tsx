import { CaseStudyAttributes } from "@/types/queries/caseStudy";
import DefaultImage from "@/utils/DefaultImage";

const CaseStudyHero = ({ attributes }: { attributes: CaseStudyAttributes }) => {
  const { thumbnail } = attributes;
  const url = `http://localhost:1337${thumbnail.data.attributes.url}`;

  const { alternativeText } = thumbnail.data.attributes;

  return (
    <div className="relative h-screen fccc p-40">
      <div className="relative h-[80vh] w-[80vw]">
        <DefaultImage rounded url={url} alternativeText={alternativeText} />
      </div>
    </div>
  );
};

export default CaseStudyHero;
