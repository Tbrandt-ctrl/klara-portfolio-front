import { CaseStudyButtonContent } from "@/types/queries/caseStudy";

const CaseStudyContentButton = ({
  element,
}: {
  element: CaseStudyButtonContent;
}) => {
  return (
    <div className="w-full  fccc">
      <a href={element.link} target="_blank">
        <button className="button text-xl bg-main text-white px-8 py-2 border rounded-md">
          {element.content}
        </button>
      </a>
    </div>
  );
};

export default CaseStudyContentButton;
