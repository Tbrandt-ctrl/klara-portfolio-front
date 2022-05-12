import { useRouter } from "next/router";

export const useLocale = (fr: any, en: any) => {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en" ? en : fr;

  return t;
};

export default useLocale;
