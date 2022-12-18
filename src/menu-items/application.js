// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconUserCheck, IconCalendar, IconApps, IconUsers, IconFileText, IconChartLine } from '@tabler/icons';

// constant
const icons = {
  IconUserCheck,
  IconCalendar,
  IconApps,
  IconUsers,
  IconFileText,
  IconChartLine
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
  id: 'application',
  title: <FormattedMessage id="application" />,
  type: 'group',
  children: [
    {
      id: 'main',
      title: <FormattedMessage id="main" />,
      type: 'item',
      icon: icons.IconApps,
      url: '/app'
    },
    {
      id: 'teachers',
      title: <FormattedMessage id="teachers" />,
      type: 'item',
      icon: icons.IconUserCheck,
      url: '/app/teachers',
      breadcrumbs: true
    },
    {
      id: 'students',
      title: <FormattedMessage id="students" />,
      type: 'item',
      icon: icons.IconUsers,
      url: '/app/students',
      breadcrumbs: true
    },
    {
      id: 'test-applications',
      title: <FormattedMessage id="test-applications" />,
      type: 'item',
      icon: icons.IconFileText,
      url: '/app/test-applications',
      breadcrumbs: true
    },
    {
      id: 'results',
      title: <FormattedMessage id="results" />,
      type: 'item',
      icon: icons.IconChartLine,
      url: '/app/results',
      breadcrumbs: true
    },
    {
      id: 'calendar',
      title: <FormattedMessage id="calendar" />,
      type: 'item',
      url: '/app/calendar',
      icon: icons.IconCalendar,
      breadcrumbs: true
    }
  ]
};

export default application;
