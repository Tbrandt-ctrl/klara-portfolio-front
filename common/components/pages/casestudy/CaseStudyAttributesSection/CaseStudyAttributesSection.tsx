import { CaseStudyAttributes } from "@/types/queries/caseStudy";

const CaseStudyAttributesSection = ({
  attributes,
}: {
  attributes: CaseStudyAttributes;
}) => {
  const { AttributeCards } = attributes;

  return (
    <section className="flex flex-col md:flex-row flex-wrap justify-between md:justify-center  items-center  border-solid border-y-2 py-8 gap-10 px-2">
      {AttributeCards &&
        AttributeCards.map((attributeCard, index) => {
          return (
            <div
              className="text-center h-full fccc items-center text-xl gap-2 max-w-content"
              key={index}
            >
              <span className="font-bold">{attributeCard.title}</span>
              <span>{attributeCard.value}</span>
            </div>
          );
        })}
    </section>
  );
};

export default CaseStudyAttributesSection;
