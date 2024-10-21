"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Image from "next/image";
import styles from "./page.module.css";

function HomeContent() {
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale") || "sr"; // Default to "sr" if locale is not set

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-envy to-cameo">
      <div className={`${styles.container} text-background text-center w-2/3`}>
        <div
          className={`${styles.extra} flex justify-between items-center mb-6`}
        >
          <Image
            src="/favicon/QueerWhite@300x.png"
            alt="Queer Montenegro logo"
            width={1202}
            height={413}
            className={styles.image}
          />
          <LanguageSwitcher
            containerClassName={styles["switcher-container"]}
            buttonClassName={styles["switcher-button"]}
          />
        </div>
        <h1 className={`${styles.head} text-7xl font-bold uppercase`}>
          {locale === "sr"
            ? "Gradimo nešto mnogo dobro!"
            : "We're Building Something Bold!"}
        </h1>
        <p className={`${styles.paragraph} mt-6 mb-4 text-3xl`}>
          {locale === "sr"
            ? "Naš vebsajt je u procesu izrade! Dok radimo na nečemu izvanrednom, znajte da je Kvir Montenegro i dalje tu i bori se za ljubav, jednakost i ljudska prava."
            : "Our digital home is getting a fabulous makeover! While we’re busy working on something amazing, know that Queer Montenegro is still here, fighting for love, equality, and human rights."}
        </p>
        <p className={`${styles.paragraph} text-3xl`}>
          {locale === "sr"
            ? "Ostanite sa nama, jer uskoro stiže novi prostor koji će osnažiti, inspirisati i podržati LGBTIQ+ zajednicu. U međuvremenu, nastavite da budete hrabri i autentični – vraćamo se uskoro! "
            : "Stay tuned for a space that will uplift, empower, and inspire our LGBTIQ+ community. In the meantime, keep being unapologetically you—we’ll be back soon!"}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div
          className={`${styles.loading} flex items-center justify-center h-screen bg-gradient-to-r from-envy to-cameo`}
        >
          <p className={styles.paragraph}>Loading...</p>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
