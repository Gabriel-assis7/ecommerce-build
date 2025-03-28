import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().min(1),
    SANITY_API_TOKEN: z.string().min(1),
    SANITY_API_READ_TOKEN: z.string().min(1),
  },
  experimental__runtimeEnv: {
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
  },
});
