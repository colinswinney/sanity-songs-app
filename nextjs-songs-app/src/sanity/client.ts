import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "llxgttbw",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});