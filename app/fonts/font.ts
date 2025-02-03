import localFont from 'next/font/local';

export const eaalimFont = localFont({
  src: [
    {
      path: './subset-eaalim-font.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './subset-eaalim-font.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './subset-eaalim-font.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'block',
  variable: '--font-eaalim',
  preload: true
});
