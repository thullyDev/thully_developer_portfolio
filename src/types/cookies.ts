import type { AstroCookies } from "astro";

export type SetCookie = {
  name: string;
  value: string;
  expireDays: number;
  cookies: AstroCookies;
};
