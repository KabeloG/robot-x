import { Suspense } from 'react';
import { Fira_Code } from 'next/font/google';
import cn from 'classnames';
import { QueryClientProvider } from '@/app/shared/query-client-provider';
import { ThemeProvider } from '@/app/shared/theme-provider';
import WagmiConfig from '@/app/shared/wagmi-config';
import ModalsContainer from '@/components/modal-views/container';
import DrawersContainer from '@/components/drawer-views/container';

// base css file
import 'overlayscrollbars/overlayscrollbars.css';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/assets/css/scrollbar.css';
import '@/assets/css/globals.css';
import '@/assets/css/range-slider.css';

const fira_code = Fira_Code({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'RobotX | NFT Platform',
  description: 'RobotX | NFT Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={cn('light', fira_code.className)}>
      <head>
        {/* maximum-scale 1 meta tag need to prevent ios input focus auto zooming */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
      </head>
      <body>
        <QueryClientProvider>
          <ThemeProvider>
            <WagmiConfig>
              <Suspense fallback={null}>
                <ModalsContainer />
                <DrawersContainer />
              </Suspense>
              {children}
            </WagmiConfig>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
