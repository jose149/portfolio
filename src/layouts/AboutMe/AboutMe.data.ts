import type { AboutItem, AboutPrinciple } from "./AboutMe.types";

import {
  translations,
  type Locale,
  type TranslationDictionary,
} from "../../i18n/translations";

type AboutItemKey = keyof TranslationDictionary["about"]["items"];

type AboutPrincipleKey = keyof TranslationDictionary["about"]["principles"];

interface AboutItemData {
  number: string;
  translationKey: AboutItemKey;
}

const aboutItemsData: AboutItemData[] = [
  {
    number: "01",
    translationKey: "problems",
  },
  {
    number: "02",
    translationKey: "work",
  },
  {
    number: "03",
    translationKey: "beyondFrontend",
  },
  {
    number: "04",
    translationKey: "care",
  },
];

const aboutPrincipleKeys: AboutPrincipleKey[] = [
  "clarity",
  "craft",
  "ownership",
];

export function getAboutItems(locale: Locale): AboutItem[] {
  const itemTranslations = translations[locale].about.items;

  return aboutItemsData.map(({ number, translationKey }) => ({
    number,

    ...itemTranslations[translationKey],
  }));
}

export function getAboutPrinciples(locale: Locale): AboutPrinciple[] {
  const principleTranslations = translations[locale].about.principles;

  return aboutPrincipleKeys.map((translationKey) => ({
    ...principleTranslations[translationKey],
  }));
}
