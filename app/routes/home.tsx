import { Button, useLabels } from "@tehik-ee/tedi-react/tedi";
import type { Route } from "./+types/home";
import { useTranslation } from "react-i18next";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const { getLabel } = useLabels();

  return (
    <main className="grow p-3 flex flex-col gap-3">
      <h1>{getLabel('header.login')}</h1>
      <div>
        <Button onClick={() => i18n.changeLanguage(i18n.language === "et" ? "en" : "et")}>
          {t('Change language to')} {i18n.language === "et" ? "ENG" : "EST"}
        </Button>
        <div>
          {t('Welcome to React')}
        </div>
      </div>
    </main>
  )
}
