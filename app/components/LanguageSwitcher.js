import { usePathname, useSearchParams } from "next/navigation";

import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = ({ containerClassName, buttonClassName }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale") || "sr"; // Default to "sr" if locale is not set

  const locales = [
    { value: "sr", label: "MNE" },
    { value: "en", label: "ENG" },
  ];

  const changeLanguage = (newLocale) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("locale", newLocale);
    const newUrl = `${pathname}?${newSearchParams.toString()}`;
    window.location.href = newUrl; // Navigate to the new URL with the updated locale
  };

  return (
    <div className={`${styles.container} ${containerClassName}`}>
      {locales.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => changeLanguage(value)}
          className={`${styles.button} ${buttonClassName} ${
            locale === value ? styles.active : ""
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
