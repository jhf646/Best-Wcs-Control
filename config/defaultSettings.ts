import { Settings as LayoutSettings } from '@ant-design/pro-layout';
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  // navTheme: 'light',
  // // 拂晓蓝
  // primaryColor: '#1890ff',
  // layout: 'mix',
  // contentWidth: 'Fluid',
  // fixedHeader: false,
  // fixSiderbar: true,
  // colorWeak: false,
  // title: 'Best Wcs Control',
  // pwa: false,
  // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  // iconfontUrl: '',

  navTheme: 'realDark',
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  pwa: false,
  title: 'Best Wcs Control',
  logo: '/logo.svg',
  headerHeight: 48,
  splitMenus: true,
};

export default Settings;
