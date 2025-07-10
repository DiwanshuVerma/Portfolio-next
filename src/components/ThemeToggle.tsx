"use client"
import { useTheme } from "next-themes";
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
      {currentTheme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};
