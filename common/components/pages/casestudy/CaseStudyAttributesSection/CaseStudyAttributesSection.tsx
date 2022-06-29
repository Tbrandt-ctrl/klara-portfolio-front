import { CaseStudyAttributes } from "@/types/queries/caseStudy";

const CaseStudyAttributesSection = ({
  attributes,
}: {
  attributes: CaseStudyAttributes;
}) => {
  const { AttributeCards } = attributes;

  return (
    <section className="flex flex-row justify-center items-center  border-solid border-y-2 py-8 px-6 flex-wrap gap-4">
      {AttributeCards &&
        AttributeCards.map((attributeCard, index) => {
          return (
            <div
              className="text-center h-full fccc items-center text-xl gap-2 max-w-[20vw]"
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
