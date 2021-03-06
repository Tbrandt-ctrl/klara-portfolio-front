import {
  CaseStudyAttributes,
  PostCards,
  TextContent,
  CarouselContent,
  SingleMediaContent,
  CaseStudyButtonContent,
} from "@/types/queries/caseStudy";

import CaseStudyContentText from "@/components/pages/casestudy/content/CaseStudyContentText";
import CaseStudyContentPostCards from "@/components/pages/casestudy/content/CaseStudyContentPostCards";
import CaseStudyContentCarousel from "../CaseStudyContentCarousel";
import CaseStudyContentSingleMedia from "../CaseStudyContentSingleMedia";
import CaseStudyContentButton from "../CaseStudyContentButton";

const CaseStudyContentSection = ({
  attributes,
}: {
  attributes: CaseStudyAttributes;
}) => {
  const { content } = attributes;
  return (
    <section className="flex flex-col gap-24 py-14 w-full">
      {content &&
        content.map(
          (
            element:
              | TextContent
              | PostCards
              | CarouselContent
              | SingleMediaContent
              | CaseStudyButtonContent,
            index: number
          ) => {
            if (element) {
              switch (element.__typename) {
                case "ComponentButtonButtonLink":
                  return (
                    element && (
                      <CaseStudyContentButton
                        key={index}
                        element={element as CaseStudyButtonContent}
                      />
                    )
                  );

                case "ComponentImageSingleMedia":
                  return (
                    element && (
                      <CaseStudyContentSingleMedia
                        key={index}
                        element={element as SingleMediaContent}
                      />
                    )
                  );

                case "ComponentTextParagrah":
                  return (
                    element && (
                      <CaseStudyContentText
                        key={index}
                        element={element as TextContent}
                      />
                    )
                  );
                case "ComponentCardsPostCards":
                  return (
                    element && (
                      <CaseStudyContentPostCards
                        key={index}
                        element={element as PostCards}
                      />
                    )
                  );
                case "ComponentImageCarousel":
                  return (
                    element && (
                      <CaseStudyContentCarousel
                        key={index}
                        element={element as CarouselContent}
                      />
                    )
                  );
                default:
                  <div key={index}></div>;
              }
            }
          }
        )}
    </section>
  );
};

export default CaseStudyContentSection;
