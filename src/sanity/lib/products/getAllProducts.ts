import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

export async function getAllProducts() {
  const ALL_PRODUCTS_QUERY = defineQuery(`
  *[
    _type == "product"
  ] | order(name asc)
    `);

  try {
    const products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
    });

    return products.data || [];
  } catch (error: unknown) {
    const errorMsg =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error fetching products:", errorMsg);
    return [];
  }
}
