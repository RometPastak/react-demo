"use client";

import { LabelProvider, validateLabelRecord, validateLabelValues, type TediLanguage } from "@tehik-ee/tedi-react/tedi";
import { type ReactNode } from "react";
import "@tehik-ee/tedi-react/index.css";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

const CUSTOM_LABEL_RECORD = validateLabelRecord({
    "test1243": {
      en: (count: number) => count.toString(),
      et: (count: number) => count.toString(),
      ru: (count: number) => count.toString(),
    },
});

const CUSTOM_LABEL_VALUES = validateLabelValues({
  "test": "123",
  "test1243": "123",
  "test.label2": "test",
})

const customLabels = (t: TFunction) => validateLabelValues({
  "header.login": t("header.login"),
  "numberField.decrement": (count) => t("numberField.decrement", { value: count }),
  "testin": "213"
});

type CustomLabels = ReturnType<typeof customLabels>;

declare module '@tehik-ee/tedi-react/tedi' {
  interface TediLabels extends CustomLabels {}
}

export default function Providers({ children }: { children: ReactNode | ReactNode[] }) {
  const { t, i18n } = useTranslation();

  return (
    <LabelProvider locale={i18n.language as TediLanguage} labels={customLabels(t)}>
      {children}
    </LabelProvider>
  );
}