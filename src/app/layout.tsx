// src/app/layout.tsx

import './globals.css';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Daima Mkenya Africa',
  description: 'Embrace the Spirit of Kenya with Daima Mkenya Africa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Other head elements */}
      </head>
      <body>
        {children}

        {/* Include external JS files */}
        <Script src="/js/main.js" strategy="beforeInteractive" />
        {/* Include other JS libraries as needed */}
      </body>
    </html>
  );
}
