import { Tile } from "@/types/pages/home/components/Content";

import ContentSectionTile from "../ContentSectionTile";

const ContentSection = () => {
  const content: Tile[] = [
    {
      img: {
        url: "./images/drop.jpg",
        alt: "drop",
      },
      link: "",
      title: "Retaining blood donors to make donation Again.",
      description:
        "Design Sprint, UX research and App conception for Établissement Francais du Sang.",
    },
    {
      img: {
        url: "./images/drop.jpg",
        alt: "drop",
      },
      link: "",
      title: "Retaining blood donors to make donation Again.",
      description:
        "Design Sprint, UX research and App conception for Établissement Francais du Sang.",
    },
    {
      img: {
        url: "./images/drop.jpg",
        alt: "drop",
      },
      link: "",
      title: "Retaining blood donors to make donation Again.",
      description:
        "Design Sprint, UX research and App conception for Établissement Francais du Sang.",
    },
  ];

  return (
    <section className="min-h-[100vh] ">
      <div className="flex flex-col gap-14  pb-20 flex-wrap md:flex-row snap-y justify-center items-center">
        {content.map((tile) => {
          return <ContentSectionTile tile={tile} />;
        })}
      </div>
    </section>
  );
};

export default ContentSection;
