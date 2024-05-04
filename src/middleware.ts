import createMiddleware from 'next-intl/middleware';
import { LANGUAGE_EN, LANGUAGE_ES } from "./configuration/language";

export default createMiddleware({
    // A list of all locales that are supported
    locales: [LANGUAGE_EN, LANGUAGE_ES],

    // Used when no locale matches
    defaultLocale: LANGUAGE_ES
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', `/(es|en)/:path*`]
};