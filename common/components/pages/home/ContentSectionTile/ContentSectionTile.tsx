import { CaseStudyHome } from "@/types/queries/caseStudy";

const ContentSectionTile = ({ caseStudy }: { caseStudy: CaseStudyHome }) => {
  const image = caseStudy.attributes.thumbnail.data.attributes;

  const url = `http://localhost:1337${image.url}`;

  return (
    <div className="snap-start w-80 md:w-[40vw] flex flex-col gap-10 ">
      <div className="relative w-full flex justify-center items-center">
        <img src={url} className="w-full h-auto" />
      </div>
      <div className="text-main flex flex-col gap-3">
        <h3 className="text-2xl font-bold">{caseStudy.attributes.title}</h3>
        <p className="">{caseStudy.attributes.short_description}</p>
      </div>
    </div>
  );
};

export default ContentSectionTile;
