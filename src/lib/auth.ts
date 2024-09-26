import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: {
    provider: "sqlite", // or "mysql", "postgresql"
    url: ".astro/content.db", // path to your database or connection string
  },
  emailAndPassword: {
    enabled: true,
  },
});
