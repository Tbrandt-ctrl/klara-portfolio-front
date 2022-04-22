import { CaseStudyHome } from "@/types/queries/caseStudy";

import ContentSectionTile from "../ContentSectionTile";

const ContentSection = ({ caseStudies }: { caseStudies: CaseStudyHome[] }) => {
  console.log(caseStudies);

  return (
    <section className="min-h-[100vh] ">
      <div className="flex flex-col gap-14  pb-20 flex-wrap md:flex-row snap-y justify-center items-center">
        {caseStudies &&
          caseStudies.map((caseStudy: CaseStudyHome, index) => {
            return <ContentSectionTile caseStudy={caseStudy} key={index} />;
          })}
      </div>
    </section>
  );
};

export default ContentSection;
