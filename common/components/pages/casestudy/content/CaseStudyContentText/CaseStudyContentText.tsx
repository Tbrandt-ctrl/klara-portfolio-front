import { useState, useEffect } from "react";

import { TextContent } from "@/types/queries/caseStudy";

import ReactMarkdown from "react-markdown";

import styles from "./CaseStudyContentText.module.scss";

const CaseStudyContentText = ({ element }: { element: TextContent }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <div className="">
      <h2 className="uppercase pb-6">{element.title}</h2>
      <div className={styles.content}>
        <ReactMarkdown children={element.content} />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default CaseStudyContentText;
