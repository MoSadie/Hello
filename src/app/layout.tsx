import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import "./globals.css";
import { Atkinson_Hyperlegible } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@/theme";

const atkisonHyperlegible = Atkinson_Hyperlegible({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-atkinson-hyperlegible',
});

export const metadata: Metadata = {
  title: "MoSadie - Hello!",
  description: "A bunch of links to my online presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={atkisonHyperlegible.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
