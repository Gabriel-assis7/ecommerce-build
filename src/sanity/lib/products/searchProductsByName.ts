import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function searchProductsByName(searchParam: string) {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
        *[
            _type == "product"
            && name match $searchParam
        ] | order(name asc)
    `);

  try {
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}*`,
      },
    });

    return products.data || [];
  } catch (error: unknown) {
    const errorMsg =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error searching for product", errorMsg);
    return [];
  }
}
