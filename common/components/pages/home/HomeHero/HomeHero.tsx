import fr from "@/locales/pages/home/fr";
import en from "@/locales/pages/home/en";

import useLocale from "lib/useLocale";

const HomeHero = () => {
  const t = useLocale(fr, en);

  const { hero } = t;

  return (
    <section className="flex flex-col justify-center items-center h-[80vh] gap-6">
      <h1 className="text-center text-5xl font-bold text-main">
        {hero.title_1} <span className="text-2xl">{hero.title_2}</span>
      </h1>
      <p className="text-center text-2xl max-w-xl">{hero.description}</p>
    </section>
  );
};

export default HomeHero;
