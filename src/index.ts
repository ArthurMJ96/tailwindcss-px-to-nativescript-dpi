import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import { replacePxWithDpi } from "./utils";

export default plugin.withOptions(
  (options) => {
    return function ({ addBase, addComponents, addUtilities, theme }) {
      // Plugin functionality can be added here if needed in the future
    };
  },
  (options) => {
    return {
      theme: replacePxWithDpi(defaultTheme) as typeof defaultTheme,
    };
  }
);
