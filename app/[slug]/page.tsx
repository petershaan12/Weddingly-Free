"use client";

import { useEffect, useState } from "react";
import ScreenStart from "../components/ScreenStart";
import MainContent from "../components/MainContent";

type ParamsProps = {
  params: { slug: string };
};

export default function Home({ params: { slug } }: ParamsProps) {
  const [showContent, setShowContent] = useState(false);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (slug.startsWith("to%3A")) {
      const extractedName = decodeURIComponent(slug.slice(5)).replace(
        /%20/g,
        " "
      );
      //   console.log("extractedName", extractedName);
      setName(extractedName);
    }

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 7000);

    return () => clearTimeout(contentTimer);
  }, [slug]);

  //   console.log("slug", slug);
  //   console.log("name", name);

  return (
    <div className="h-screen">
      <ScreenStart />
      {showContent && <MainContent name={name} />} {/* Tampilkan MainContent */}
    </div>
  );
}