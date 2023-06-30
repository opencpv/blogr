import { createClient } from "next-sanity";

interface imageConfigProps {
  dataset: string;
  projectId: string | undefined;
  apiVersion: string;
  useCdn: boolean;
}
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

// This is to fetch data by making a query to the backend in sanity studio
export const sanityClient = createClient(config);

// This will parse the source we get back from the query and give us the image url
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
