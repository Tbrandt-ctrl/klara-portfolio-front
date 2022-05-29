import client from "apollo-client";

import CASESTUDIES_FILTERED_QUERY from "@/queries/caseStudies_filtered";

import { CaseStudySlug } from "@/types/queries/caseStudy";
import CASESTUDIES_SLUG_QUERY from "@/queries/caseStudies_slug";
import CASESTUDY_FILTER_QUERY from "@/queries/caseStudies";
import ASSET_QUERY from "@/queries/asset";

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

export async function getAssetByName(name: string) {
  const { data } = await client.query({
    query: ASSET_QUERY,
    variables: { name: name },
  });

  let asset = data.asset.data.attributes.File[0];

  return asset;
}

export async function getFilteredCaseStudies(locale: string, limit: number) {
  const { data } = await client.query({
    query: CASESTUDIES_FILTERED_QUERY,
    variables: { locale, limit },
  });

  let caseStudies = data.caseStudies.data || [];

  return caseStudies;
}
