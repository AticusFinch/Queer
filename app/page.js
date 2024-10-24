"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";

function HomeContent() {
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale") || "sr"; // Default to "sr" if locale is not set

  return (
    <div
      className={`${styles["main-container"]} flex items-center justify-center h-screen bg-gradient-to-r from-envy to-cameo`}
    >
      <div className={`${styles.container} text-background text-center w-2/3`}>
        <div
          className={`${styles.extra} flex justify-between items-center mb-6`}
        >
          <motion.div
            initial={{ y: "-100vh", rotate: 280 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1.5 }}
            className={styles.logo}
          >
            <Image
              src="/favicon/QueerWhite@300x.png"
              alt="Queer Montenegro logo"
              width={1202}
              height={413}
              className={styles.image}
            />
          </motion.div>
          <motion.div
            initial={{ x: "100vh" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.4 }}
          >
            <LanguageSwitcher
              containerClassName={styles["switcher-container"]}
              buttonClassName={styles["switcher-button"]}
            />
          </motion.div>
        </div>
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.4 }}
          className={`${styles.head} text-7xl font-bold uppercase`}
        >
          {locale === "sr"
            ? "Gradimo nešto mnogo dobro!"
            : "We're Building Something Bold!"}
        </motion.h1>
        <motion.p
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.7 }}
          className={`${styles.paragraph} mt-6 mb-4 text-3xl`}
        >
          {locale === "sr"
            ? "Naš vebsajt je u procesu izrade! Dok radimo na nečemu izvanrednom, znajte da je Kvir Montenegro i dalje tu i bori se za ljubav, jednakost i ljudska prava."
            : "Our digital home is getting a fabulous makeover! While we’re busy working on something amazing, know that Queer Montenegro is still here, fighting for love, equality, and human rights."}
        </motion.p>
        <motion.p
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.9 }}
          className={`${styles.paragraph} text-3xl`}
        >
          {locale === "sr"
            ? "Ostanite sa nama, jer uskoro stiže novi prostor koji će osnažiti, inspirisati i podržati LGBTIQ+ zajednicu. U međuvremenu, nastavite da budete hrabri i autentični – vraćamo se uskoro! "
            : "Stay tuned for a space that will uplift, empower, and inspire our LGBTIQ+ community. In the meantime, keep being unapologetically you—we’ll be back soon!"}
        </motion.p>
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
