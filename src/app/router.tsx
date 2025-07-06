// src/app/router.tsx
import TerminalDetailsPage from '@/pages/TerminalDetailsPage/TerminalDetailsPage';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// If you do not have alias '@' configured, use a relative path like below:
const TerminalPage = lazy(() => import('@/pages/TerminalPage/TerminalPage'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <TerminalPage />,
  },
  {
    path: '*',
    element: <></>,
  },
  {
    path: '/terminal/:id',
    element: <TerminalDetailsPage />,
  },
];
