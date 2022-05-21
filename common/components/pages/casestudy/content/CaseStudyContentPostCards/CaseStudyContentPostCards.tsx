import { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";

import { PostCards } from "@/types/queries/caseStudy";
import DefaultImage from "@/utils/DefaultImage";

const CaseStudyContentPostCards = ({ element }: { element: PostCards }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const post_cards = element.PostCard;

  return mounted && post_cards.length > 0 ? (
    <div className="flex flex-col md:flex-row  justify-center items-center md:items-start  gap-10">
      {post_cards.length > 0 &&
        post_cards.map((post_card, index) => {
          const url = post_card.icon
            ? `http://localhost:1337${post_card.icon.data.attributes.url}`
            : "";
          const { height, width, alternativeText } =
            post_card.icon.data.attributes;

          return (
            <div
              key={index}
              className="w-72  h-auto flex flex-col justify-start items-center gap-4 px-4 py-10 bg-gray-100 border border-none  rounded-xl"
            >
              {post_card.icon && (
                <div className="h-16 w-16 relative ">
                  <DefaultImage
                    url={url}
                    alternativeText={alternativeText}
                    fill
                  />
                </div>
              )}
              <span className="text-center font-bold">{post_card.title}</span>
              <div className="text-center">
                <ReactMarkdown>{post_card.description}</ReactMarkdown>
              </div>
            </div>
          );
        })}
    </div>
  ) : (
    <div></div>
  );
};

export default CaseStudyContentPostCards;
