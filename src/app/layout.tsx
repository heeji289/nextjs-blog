import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { CiDark } from 'react-icons/ci';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const navigationData = [
  {
    path: '/posts',
    pathName: 'Post',
  },
  {
    path: '/about',
    pathName: 'About',
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${inter.className} px-6`}>
        <header className='container max-w-screen-sm mx-auto pb-6 pt-12 flex justify-between'>
          <nav className='flex gap-2'>
            <Link href={'/'} className='flex gap-1 items-center'>
              <Image
                src={'/icons/smile.png'}
                alt='logo image'
                width={22}
                height={22}
              />
              <span>Home</span>
            </Link>

            <ul className='flex gap-2'>
              {navigationData.map((data) => (
                <li key={data.path}>
                  <Link href={data.path}>{data.pathName}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <CiDark size={24} />
        </header>

        <section className='max-w-screen-sm mx-auto'>{children}</section>
      </body>
    </html>
  );
}
