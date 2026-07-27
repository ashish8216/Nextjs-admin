import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Next.js AdminLTE Dashboard",
  icons: {
    icon: [
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className="hold-transition sidebar-mini layout-fixed">
        {children}

        {/* jQuery */}
        <Script src="admin/plugins/jquery/jquery.min.js" strategy="beforeInteractive" />

        {/* Bootstrap */}
        <Script src="admin/plugins/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />

        {/* AdminLTE */}
        <Script src="admin/dist/js/adminlte.min.js" strategy="afterInteractive" />

        {/* Demo */}
        <Script src="admin/dist/js/demo.js" strategy="afterInteractive" />

      </body>
    </html>
  );
}