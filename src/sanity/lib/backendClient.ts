import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";
import { env } from "@/data/env/server";

export const backendClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: env.SANITY_API_TOKEN,
});
