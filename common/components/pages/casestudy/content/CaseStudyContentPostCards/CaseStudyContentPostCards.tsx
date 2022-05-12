import { useState, useEffect } from "react";
import Image from "next/image";

import ReactMarkdown from "react-markdown";

import { PostCards } from "@/types/queries/caseStudy";

const CaseStudyContentPostCards = ({ element }: { element: PostCards }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const post_cards = element.PostCard;

  return mounted ? (
    <div className="flex flex-row justify-center items-start  gap-20">
      {post_cards.map((post_card, index) => {
        const url = `http://localhost:1337${post_card.icon.data.attributes.url}`;
        const { height, width } = post_card.icon.data.attributes;
        console.log(post_card.icon.data.attributes.height);

        return (
          <div
            key={index}
            className="w-72  h-auto flex flex-col justify-start items-center gap-4 px-4 py-10 bg-gray-100 border border-none  rounded-xl"
          >
            <div className="h-16 w-16 relative ">
              <Image
                src={url}
                height={height}
                width={width}
                layout="fill"
                objectFit="contain"
              />
            </div>
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
