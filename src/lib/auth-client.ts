import { createAuthClient } from "better-auth/client";

export const client = createAuthClient({
  baseURL: "http://localhost:4321", // the base url of your auth server
});
