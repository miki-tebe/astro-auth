import { defineAction, ActionError } from "astro:actions";
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
      const res = await client.signUp.email(
        { email, password, name },
        {
          onError(context) {
            console.log(context);
            throw new ActionError({
              code: "BAD_REQUEST",
              message: context.error.message,
            });
          },
        }
      );
    },
  }),
  signInUser: defineAction({
    accept: "form",
    input: z.object({
      email: z.string(),
      password: z.string(),
    }),
    handler: async ({ email, password }) => {
      const res = await client.signIn.email(
        { email, password },
        {
          onError(context) {
            console.log(context);
            throw new ActionError({
              code: "BAD_REQUEST",
              message: context.error.message,
            });
          },
        }
      );
    },
  }),
};
