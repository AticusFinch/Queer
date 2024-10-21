import { usePathname, useSearchParams } from "next/navigation";

import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = ({ containerClassName, optionClassName }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale") || "sr"; // Default to "sr" if locale is not set

  const locales = ["sr", "en"];

  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("locale", newLocale);
    const newUrl = `${pathname}?${newSearchParams.toString()}`;
    window.location.href = newUrl;
  };

  return (
    <select
      onChange={changeLanguage}
      defaultValue={locale}
      className={`${styles.container} ${containerClassName}`}
    >
      {locales.map((loc) => (
        <option
          key={loc}
          value={loc}
          className={`${styles.option} ${optionClassName}`}
        >
          {loc}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
