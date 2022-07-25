import { useIntl } from 'umi';
// import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const intl = useIntl();
  // const defaultMessage = intl.formatMessage({
  //   id: 'app.copyright.produced',
  //   defaultMessage: '比益特科技(技术部焦工)',
  // });
  const defaultMessage1 = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '比益特科技(技术部焦工)出品',
  });
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage1}`}
      // links={[
      //   {
      //     key: 'Ant Design Pro',
      //     title: 'Ant Design Pro',
      //     href: 'https://pro.ant.design',
      //     blankTarget: true,
      //   },
      //   {
      //     key: 'github',
      //     title: <GithubOutlined />,
      //     href: 'https://github.com/ant-design/ant-design-pro',
      //     blankTarget: true,
      //   },
      //   {
      //     key: 'Ant Design',
      //     title: 'Ant Design',
      //     href: 'https://ant.design',
      //     blankTarget: true,
      //   },
      // ]}
    />
  );
};

export default Footer;
