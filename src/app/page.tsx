"use client";
import { Card } from "@/components/card";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const handleChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Card />
      <button
        className="absolute top-0 right-0 z-50 outline-none p-4"
        onClick={handleChange}
      >
        {theme === "dark" ? (
          <SunIcon width={15} height={15} />
        ) : (
          <MoonIcon width={15} height={15} />
        )}
      </button>
    </div>
  );
}
