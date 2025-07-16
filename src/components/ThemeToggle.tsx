"use client"
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <button onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}>
      {/* {currentTheme === "dark" ? "🌞" : "🌙"} */}
      {currentTheme === "dark" ? <Image src='/icons/moon.svg' alt="moon-svg" height={18} width={18} className="invert" /> : <Sun className="w-5 h-5" />}
    </button>
  );
};
