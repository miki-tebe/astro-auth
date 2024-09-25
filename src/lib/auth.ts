import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: {
    provider: "sqlite", // or "mysql", "postgresql"
    url: ".astro/content.db", // change this to absolute path
  },
  emailAndPassword: {
    enabled: true,
  },
});
