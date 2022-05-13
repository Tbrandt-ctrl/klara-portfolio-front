import { CaseStudyHome } from "@/types/queries/caseStudy";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const HomeContentSectionTile = ({
  caseStudy,
}: {
  caseStudy: CaseStudyHome;
}) => {
  const image = caseStudy.attributes.thumbnail.data.attributes;

  const url = `http://localhost:1337${image.url}`;

  return (
    <Link href={`/casestudy/${caseStudy.attributes.slug}`}>
      <a>
        <div className="w-80 md:w-[40vw] h-auto flex flex-col gap-10 ">
          <div className="relative h-[30vh] lg:h-[60vh] w-full ">
            <Image
              className="border rounded-lg"
              src={url}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="text-main flex flex-col gap-3 ">
            <h3 className="text-2xl font-bold">{caseStudy.attributes.title}</h3>
            <ReactMarkdown
              className="text-lg"
              children={caseStudy.attributes.short_description}
            />
            <p></p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default HomeContentSectionTile;
