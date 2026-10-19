import type {
  AboutItem,
  AboutPrinciple,
  AboutStatement,
} from "./AboutMe.types";

export const aboutStatement: AboutStatement = {
  title:
    "I turn complex product problems into clear, maintainable experiences.",

  text: "I like understanding why we build something before deciding how to build it.",
};

export const aboutItems: AboutItem[] = [
  {
    number: "01",
    title: "Problems I enjoy solving",
    text: "Complex products. Clear experiences.",
  },
  {
    number: "02",
    title: "How I work",
    text: "Close to Product, Design and Engineering.",
  },
  {
    number: "03",
    title: "Beyond frontend",
    text: "Product thinking, APIs and systems.",
  },
  {
    number: "04",
    title: "What I care about",
    text: "Quality, simplicity and real impact.",
  },
];

export const aboutPrinciples: AboutPrinciple[] = [
  {
    title: "Clarity",
    text: "Understand before building.",
  },
  {
    title: "Craft",
    text: "Details matter.",
  },
  {
    title: "Ownership",
    text: "Care about the outcome.",
  },
];
