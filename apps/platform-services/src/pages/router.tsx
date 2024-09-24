import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './private-route/private-route';
import Root from './root/root';
import Dashboard from './dashboard/dashboard';
import { Namespaces } from '@platform-services-ui/i18n-utils';
import TeamAdmin from './team-admin/team-admin';

const router = createBrowserRouter(
  [
    {
      path: '',
      element: (
        <PrivateRoute>
          <Root />
        </PrivateRoute>
      ),
      handle: {
        crumb: () => ({ to: '', name: 'home', namespace: Namespaces.Common }),
      },
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'team-admin',
          index: true,
          element: <TeamAdmin />,
        },
      ],
    },
  ],
  {
    basename: '/platform-services',
  },
);

export default router;
