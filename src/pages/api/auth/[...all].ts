export const prerender = false;

import type { APIRoute } from "astro";
import { auth } from "../../../lib/auth"; // path to your auth file

export const GET: APIRoute = ({ request }) => {
  return auth.handler(request);
};

export const POST: APIRoute = ({ request }) => {
  return auth.handler(request);
};
