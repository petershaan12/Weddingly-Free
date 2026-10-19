"use client";

import { use, useEffect, useState } from "react";
import ScreenStart from "../components/ScreenStart";
import MainContent from "../components/MainContent";

type ParamsProps = {
  params: Promise<{ slug: string }>;
};

export default function Home({ params }: ParamsProps) {
  const { slug } = use(params);
  const [showContent, setShowContent] = useState(false);
  const name = slug.startsWith("to%3A") ? decodeURIComponent(slug.slice(5)) : "";

  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 7000);

    return () => clearTimeout(contentTimer);
  }, [slug]);

  return (
    <div className="h-screen">
      <ScreenStart />
      {showContent && <MainContent name={name} />} {/* Tampilkan MainContent */}
    </div>
  );
}
