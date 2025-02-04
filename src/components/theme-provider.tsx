import { ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <NextThemeProvider defaultTheme="light" attribute="class" enableSystem>{children}</NextThemeProvider>;
};
