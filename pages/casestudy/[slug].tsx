import { GetStaticProps, GetStaticPaths } from "next";

import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "lib/caseStudiesQueries";

import { CaseStudy } from "@/types/queries/caseStudy";
import { ParsedUrlQuery } from "querystring";

import CaseStudyHero from "@/components/pages/casestudy/CaseStudyHero";
import CaseStudyAttributesSection from "@/components/pages/casestudy/CaseStudyAttributesSection";
import CaseStudyContentSection from "@/components/pages/casestudy/content/CaseStudyContentSection";

const CaseStudy = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  const { attributes } = caseStudy;

  return attributes ? (
    <>
      <main className="w-full">
        <CaseStudyHero attributes={attributes} />
        <div className="w-full md:px-36 lg:px-44 xl:px-64">
          <CaseStudyAttributesSection attributes={attributes} />
          <CaseStudyContentSection attributes={attributes} />
        </div>
      </main>
    </>
  ) : (
    <></>
  );
};

export default CaseStudy;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCaseStudySlugs();

  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  slug?: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params: Params = context.params!;
  const locale: string = context.locale!;

  const caseStudy =
    params.slug && (await getCaseStudyBySlug(params.slug, locale));

  return { props: { caseStudy } };
};
