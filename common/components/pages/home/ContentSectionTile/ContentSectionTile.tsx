import { Post } from "@/types/queries/posts";

import Image from "next/image";

const ContentSectionTile = ({ post }: { post: Post }) => {
  return (
    <div className="snap-start w-80 md:w-[40vw] flex flex-col gap-3 justify-start items-center">
      <div className="relative w-full flex justify-center items-center">
        <img src={post.img.url} className="w-full h-auto" />
      </div>
      <div className="text-main flex flex-col gap-3">
        <h3 className="text-xl font-bold">{post.attributes.title}</h3>
        <p className="">{post.attributes.description}</p>
      </div>
    </div>
  );
};

export default ContentSectionTile;
