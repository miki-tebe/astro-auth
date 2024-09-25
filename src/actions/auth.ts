import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { client } from "../lib/auth-client";

export const auth = {
  signUpUser: defineAction({
    accept: "form",
    input: z.object({
      email: z.string(),
      password: z.string(),
      name: z.string(),
    }),
    handler: async ({ email, password, name }) => {
      console.log(email, password, name);
      try {
        const res = await client.signUp.email({ email, password, name });
        console.log(res);
        return res;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  }),
  signInUser: defineAction({
    accept: "form",
    input: z.object({
      email: z.string(),
      password: z.string(),
    }),
    handler: async ({ email, password }) => {
      try {
        const res = await client.signIn.email({ email, password });
        console.log(res);
        return res;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  }),
};
