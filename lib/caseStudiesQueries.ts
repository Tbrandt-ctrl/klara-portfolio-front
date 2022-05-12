import client from "apollo-client";

import CASESTUDIES_HOME_QUERY from "@/queries/caseStudies_home";

import { CaseStudySlug } from "@/types/queries/caseStudy";
import CASESTUDIES_SLUG_QUERY from "@/queries/caseStudies_slug";
import CASESTUDY_FILTER_QUERY from "@/queries/caseStudies";

export async function getAllCaseStudySlugs() {
  const { data } = await client.query({
    query: CASESTUDIES_SLUG_QUERY,
  });

  let caseStudies = data.caseStudies.data || [];

  return caseStudies.map((caseStudySlug: CaseStudySlug) => {
    return {
      params: {
        slug: caseStudySlug.attributes.slug,
      },
      locale: caseStudySlug.attributes.locale,
    };
  });
}

export async function getCaseStudyBySlug(slug: string, locale: string) {
  const { data } = await client.query({
    query: CASESTUDY_FILTER_QUERY,
    variables: { slug, locale },
  });

  let caseStudy = data.caseStudies.data[0] || {};

  return caseStudy;
}

export async function getHomeCaseStudies(locale: string) {
  const { data } = await client.query({
    query: CASESTUDIES_HOME_QUERY,
    variables: { locale },
  });

  let caseStudies = data.caseStudies.data || [];

  return caseStudies;
}
