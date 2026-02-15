import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  // 1. Initialize from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // 2. Apply theme to <html> tag whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. Simple toggle function
  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "night" : "light"));
  };

  return (
    <button 
      onClick={handleToggle} 
      className="btn btn-ghost btn-circle"
      type="button"
    >
      {/* If theme is light, show Moon (to switch to night) */}
      {/* If theme is night, show Sun (to switch to light) */}
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-info" />
      ) : (
        <Sun className="w-5 h-5 text-warning" />
      )}
    </button>
  );
};

export default ThemeSwitcher;