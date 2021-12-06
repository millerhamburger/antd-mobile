import { resolve } from 'path'

export default {
  mode: 'site',
  logo: '//img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg',
  title: 'Antd Mobile',
  hash: true,
  favicon:
    '//img.alicdn.com/imgextra/i3/O1CN01XtT3Tv1Wd1b5hNVKy_!!6000000002810-55-tps-360-360.svg',
  outputPath: './doc-site',
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
  ],
  themeConfig: {
    carrier: 'formily', // 设备状态栏左侧的文本内容
    hd: {
      rules: [
        // {mode: 'vw', options: [100, 750]}
      ],
    },
  },
  navs: {
    'zh-CN': [
      {
        title: '组件',
        path: '/zh-CN/components',
      },
      {
        title: '主站',
        path: 'https://formilyjs.org',
      },
      {
        title: 'GITHUB',
        path: 'https://github.com/formilyjs/antd-mobile',
      },
    ],
    'en-US': [
      {
        title: 'Components',
        path: '/components',
      },
      {
        title: 'Home Site',
        path: 'https://formilyjs.org',
      },
      {
        title: 'GITHUB',
        path: 'https://github.com/formilyjs/antd-mobile',
      },
    ],
  },
  links: [],
  styles: [
    `
    .__dumi-default-layout{
      padding-right: 58px!important;
    }
    .__dumi-default-navbar-logo{
      background-size: 140px!important;
      background-position: center left!important;
      background-repeat: no-repeat!important;
      padding-left: 150px!important;/*可根据title的宽度调整*/
      font-size: 18px!important;
    }
    .__dumi-default-navbar{
      padding: 0 28px !important;
    }
    .__dumi-default-layout-hero{
      background-image: url(//img.alicdn.com/imgextra/i4/O1CN01ZcvS4e26XMsdsCkf9_!!6000000007671-2-tps-6001-4001.png);
      background-size: cover;
      background-repeat: no-repeat;
      padding: 120px 0 !important;
    }
    .__dumi-default-layout-hero h1{
      color:#45124e !important;
      font-size:80px !important;
      padding-bottom: 30px !important;
    }
    .__dumi-default-dark-switch {
      display:none
    }
    nav a{
      text-decoration: none !important;
    }
    `,
  ],
}
