import { CaseStudyAttributes } from "@/types/queries/caseStudy";

const CaseStudyAttributesSection = ({
  attributes,
}: {
  attributes: CaseStudyAttributes;
}) => {
  const { AttributeCards } = attributes;

  return (
    <section className="flex flex-row justify-between items-center  border-solid border-y-2 py-8 px-6">
      {AttributeCards &&
        AttributeCards.map((attributeCard, index) => {
          return (
            <div className="text-center fccc text-xl gap-4" key={index}>
              <span className="font-bold">{attributeCard.title}</span>
              <span>{attributeCard.value}</span>
            </div>
          );
        })}
    </section>
  );
};

export default CaseStudyAttributesSection;
