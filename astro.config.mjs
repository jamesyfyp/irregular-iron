import { defineConfig } from "astro/config";
import aws from "astro-sst/lambda";
import react from "@astrojs/react";
import prefetch from '@astrojs/prefetch';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: aws(),
  integrations: [react(), tailwind(), prefetch()]
});