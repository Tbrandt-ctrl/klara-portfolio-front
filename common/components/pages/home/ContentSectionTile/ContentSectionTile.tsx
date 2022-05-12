import { CaseStudyHome } from "@/types/queries/caseStudy";
import Link from "next/link";
import Image from "next/image";

const ContentSectionTile = ({ caseStudy }: { caseStudy: CaseStudyHome }) => {
  const image = caseStudy.attributes.thumbnail.data.attributes;

  const url = `http://localhost:1337${image.url}`;

  return (
    <Link href={`/casestudy/${caseStudy.attributes.slug}`}>
      <a>
        <div className="snap-start w-80 md:w-[40vw] flex flex-col gap-10 ">
          <div className="relative w-full flex justify-center items-center">
            <Image
              src={url}
              height={image.height}
              width={image.width}
              className="w-full h-auto"
            />
          </div>
          <div className="text-main flex flex-col gap-3">
            <h3 className="text-2xl font-bold">{caseStudy.attributes.title}</h3>
            <p className="">{caseStudy.attributes.short_description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ContentSectionTile;
