import type { Metadata } from 'next';
import './globals.css';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import Header2 from '@/components/Header2';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'heeji.dev',
  description: '임희지의 개발 블로그. 프론트엔드 개발 관련 기록을 남깁니다.',
  metadataBase: new URL('https://heeji.dev'),
  alternates: {
    types: {
      'application/rss+xml': 'https://heeji.dev/rss.xml',
    },
  },
};

const mono = IBM_Plex_Mono({
  weight: '500',
  subsets: ['latin'],
});

const pretendardRegular = localFont({
  src: '../../public/fonts/Pretendard-Regular.ttf',
  display: 'swap',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ko'
      className={`${mono.className} ${pretendardRegular.className}`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `,
          }}
        />
      </head>
      <body className={`bg-background text-black antialiased dark:text-white`}>
        <section className='mx-auto max-w-3xl xl:mx-w-[50rem] xl:px-8'>
          <div className='box-border flex h-full flex-col justify-between'>
            <Header2 />
            <Separator className='dark:bg-primary' />
            <main className='pb-6 px-4'>{children}</main>
            <Footer />
          </div>
        </section>
      </body>
    </html>
  );
}
