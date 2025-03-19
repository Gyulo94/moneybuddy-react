import { useTheme } from "@/components/ui/theme-provider";
import logoDark from "../../../../public/images/logo_dark.png";
import logoLight from "../../../../public/images/logo_light.png";

import { useEffect, useState } from "react";

export default function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // console.log("theme", theme === "dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative max-w-40 max-h-14">
      <a href="/">
        <img src={theme === "dark" ? logoDark : logoLight} alt="logo" />
      </a>
    </div>
  );
}
