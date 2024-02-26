import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import { PATH_AUTH, ADMIN_PAGES, PATH_PAGE } from './path';

// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: PATH_PAGE.landingPage,
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: PATH_PAGE.CourseDetails, element: <CourseDetail /> },
      ],
    },
  ]);
}

// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const CourseDetail = Loadable(lazy(() => import('../pages/courseDetails')));
