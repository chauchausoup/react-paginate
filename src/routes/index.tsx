import { useRoutes } from 'react-router-dom';

import { SpellsRoutes } from '@/features/spells';

export const AppRoutes = () => {
  const commonRoutes = [{ path: '//*', element: <SpellsRoutes /> }];

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
