import { PropsWithChildren } from 'react';
import 'styles/main.css';
import { Analytics } from '@vercel/analytics/react';

import Head from 'next/head';

export default async function RootLayout({


  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      <Head>
        <title>
          Mage UI
        </title>
      </Head>
      <Analytics />
      <body>
        <div>
            <main
              id="skip"
              className="relative min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
            >
              {children}
            </main>
        </div>
      </body>
    </html>
  );
}

export const dynamic = 'force-dynamic'