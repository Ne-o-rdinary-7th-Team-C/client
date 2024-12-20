import { Providers } from "~/src/providers";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Pretendard } from "~/src/shared/fonts/pretendard/Pretendard";
import { GlobalLayout } from "~/src/shared/ui/GlobalLayout";
import { cn } from "~/src/shared/ui/cn";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(Pretendard.className, " bg-gray-50")}>
        <GlobalLayout>
          <Providers>{children}</Providers>
        </GlobalLayout>
      </body>
    </html>
  );
}
