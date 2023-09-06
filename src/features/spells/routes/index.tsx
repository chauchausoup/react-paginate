import { Navigate, Route, Routes } from 'react-router-dom';

import { SpellsLayout } from './SpellsLayout';

export const SpellsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<SpellsLayout />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
