"use client";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  function changeHandler(change: boolean) {
    if (change) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div className="flex items-center gap-2">
      <Sun
        className={cn("size-5", theme === "dark" && "text-muted-foreground")}
      />
      <Switch onCheckedChange={changeHandler} checked={theme === "dark"} />
      <Moon
        className={cn("size-4", theme === "light" && "text-muted-foreground")}
      />
    </div>
  );
}
