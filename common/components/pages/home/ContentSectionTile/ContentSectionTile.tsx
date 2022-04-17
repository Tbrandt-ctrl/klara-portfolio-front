import { Tile } from "@/types/pages/home/components/Content";

import Image from "next/image";

const ContentSectionTile = ({ tile }: { tile: Tile }) => {
  return (
    <div className="snap-start w-80 md:w-[40vw] flex flex-col gap-3 justify-start items-center">
      <div className="relative w-full flex justify-center items-center">
        <img src={tile.img.url} className="w-full h-auto" />
      </div>
      <div className="text-main flex flex-col gap-3">
        <h3 className="text-xl font-bold">{tile.title}</h3>
        <p className="">{tile.description}</p>
      </div>
    </div>
  );
};

export default ContentSectionTile;
