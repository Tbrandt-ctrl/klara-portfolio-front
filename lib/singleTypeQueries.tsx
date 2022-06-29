import ASSET_QUERY from "@/queries/asset";
import client from "apollo-client";

export async function getAssetByName(name: string) {
  const { data, loading, error } = await client.query({
    query: ASSET_QUERY,
    variables: { name: name },
  });

  const response = { data, loading, error };

  // let asset = data.asset.data.attributes.File[0];

  return response;
}
