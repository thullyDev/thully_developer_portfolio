import type { SetCookie } from "../types/cookies";

export function setCookie({ name, value, expireDays, cookies }: SetCookie) {
  const expires = new Date();
  expires.setDate(expires.getDate() + expireDays);

  cookies.set(name, value, {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires,
  });
}
