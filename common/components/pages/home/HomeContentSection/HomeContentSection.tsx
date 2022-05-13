import { CaseStudyHome } from "@/types/queries/caseStudy";

import HomeContentSectionTile from "../HomeContentSectionTile";

const HomeContentSection = ({
  caseStudies,
}: {
  caseStudies: CaseStudyHome[];
}) => {
  return (
    <section className=" pb-10 ">
      <div className="flex flex-col gap-14  flex-wrap md:flex-row snap-y justify-center items-center">
        {caseStudies &&
          caseStudies.map((caseStudy: CaseStudyHome, index) => {
            return <HomeContentSectionTile caseStudy={caseStudy} key={index} />;
          })}
      </div>
    </section>
  );
};

export default HomeContentSection;
