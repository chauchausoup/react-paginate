import { ContentLayout } from '@/components/ContentLayout';

import FavouriteSpellsList from '../components/FavouriteSpellsList';
import PaginatedList from '../components/PaginatedList';

export const SpellsLayout = () => {
  return (
    <ContentLayout title="Spells List">
      <div className="mt-4">
        <div className="md:grid md:grid-cols-8">
          <div className="md:col-span-6">
            <PaginatedList itemsPerPage={22} />
          </div>
          <div className="md:col-span-2">
            <FavouriteSpellsList />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};
