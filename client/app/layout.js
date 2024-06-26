import Head from 'next/head';
import { Quicksand } from 'next/font/google';
import CustomThemeProvider from '@/providers/CustomThemeProvider';
import StoreProvider from '@/providers/StoreProvider';
import SnackbarProviderContext from '@/providers/SnackbarProviderContext';

import '../styles/globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Students Guide',
  description: 'Enhance the educational experience for students, teachers, and administrators with a comprehensive solution. Explore features like classroom management, job finding, and personalized course recommendations based on YouTube content.',
  url: 'https://students-guide.vercel.app/',
  image: 'https://uos-students-guide.s3.us-east-2.amazonaws.com/default.png',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:alt" content={metadata.title} />
        <meta property="og:site_name" content={metadata.title} />
      </Head>
      <html lang='en'>
        <body className={`${quicksand.className} overflow-y-hidden`}>
          <StoreProvider>
            <CustomThemeProvider>
              <SnackbarProviderContext>{children}</SnackbarProviderContext>
            </CustomThemeProvider>
          </StoreProvider>
        </body>
      </html>
    </>
  );
}