import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.literal(["test", "development", "production"]),
  },
  client: {},
  shared: {
    NEXT_PUBLIC_APP_NAME: z.string().min(3),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  },
  emptyStringAsUndefined: true,
});
