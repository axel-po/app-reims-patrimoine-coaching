import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus("http://0.0.0.0:8055").with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  })
);

export default directus;
