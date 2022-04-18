import { Post } from "@/types/queries/posts";

import ContentSectionTile from "../ContentSectionTile";

const ContentSection = ({ posts }: Post[] | any) => {
  return (
    <section className="min-h-[100vh] ">
      <div className="flex flex-col gap-14  pb-20 flex-wrap md:flex-row snap-y justify-center items-center">
        {posts &&
          posts.map((post: Post) => {
            return <ContentSectionTile post={post} />;
          })}
      </div>
    </section>
  );
};

export default ContentSection;
