// src/i18n/i18n.ts

import {
  DEFAULT_LOCALE,
  localeConfig,
  translations,
  type Locale,
} from "./translations";

export const supportedLocales = Object.keys(localeConfig) as Locale[];

export function isLocale(value: string | undefined | null): value is Locale {
  return value !== undefined && value !== null && value in localeConfig;
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  return isLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE;
}

/**
 * Changes only the locale portion
 * while preserving the rest of the path.
 *
 * /en/             -> /es/
 * /en/projects/    -> /es/projects/
 */
export function getLocalizedPath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  return `/${segments.join("/")}/`;
}
