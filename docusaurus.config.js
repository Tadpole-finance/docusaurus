module.exports = {
  title: 'Tadpole Finance Docs',
  tagline: 'Everything you need to know about Tadpole Finance.',
  url: 'https://docs.tadpole.finance',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-tadpole.ico',
  organizationName: 'tadpole-finance', // Usually your GitHub org/user name.
  projectName: 'tadpole-protocol', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Tadpole Finance Docs',
        src: 'img/docs-logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/exchanges',
          label: 'Exchanges',
          position: 'left',
        },
        {
          href: 'https://app.tadpole.finance/',
          label: 'App',
          position: 'left',
        },
        {
          href: 'https://t.me/TadpoleFinance',
          label: 'Telegram Group',
          position: 'right',
        },
        {
          href: 'https://www.coingecko.com/en/coins/tadpole-finance',
          label: 'CoinGecko',
          position: 'right',
        },
        {
          href: 'https://github.com/Tadpole-finance',
          label: 'GitHub',
          position: 'right',
        },
        {
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: 'docs/',
            },
            {
              label: 'TAD Token',
              to: 'docs/tad-token',
            },
            {
              label: 'Exchanges',
              to: 'docs/exchanges',
            },
            {
              label: 'Addresses',
              to: 'docs/contract-addresses',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram Channel',
              href: 'https://t.me/TadpoleFinanceChannel',
            },
            {
              label: 'Telegram Group',
              href: 'https://t.me/TadpoleFinance',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/TadpoleFinance',
            },
            {
              label: 'Medium',
              href: 'https://tadpolefinance.medium.com',
            },
          ],
        },
        {
          title: 'Exchanges',
          items: [
            {
              label: 'Uniswap',
              to: 'https://uniswap.tadpole.finance/',
            },
            {
              label: 'Bithumb Global',
              href: 'https://www.bithumb.pro/en-us/exchange/professional?q=TAD-USDT',
            },
            {
              label: 'Coinsbit',
              href: 'https://coinsbit.io/trade/TAD_USDT',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'App',
              to: 'https://app.tadpole.finance/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tadpole-finance',
            },
            {
              label: 'Coingecko',
              to: 'https://www.coingecko.com/en/coins/tadpole-finance',
            },
            {
              label: 'CoinMarketCap',
              to: 'https://www.coinmarketcap.com/currencies/tadpole-finance',
            },
          ],
        },
      ],
      copyright: `<br />Copyright © ${new Date().getFullYear()} Tadpole Finance`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
