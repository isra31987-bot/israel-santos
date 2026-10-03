import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, LOCALE_COOKIE } from "@/i18n/config";

// Asegura cookie de idioma en la primera visita (español por defecto).
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (!request.cookies.get(LOCALE_COOKIE)) {
    response.cookies.set(LOCALE_COOKIE, defaultLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
