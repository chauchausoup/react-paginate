import { useLiveQuery } from 'dexie-react-hooks';

import { useIndexedDB } from '@/hooks/useIndexDB';

interface FavouriteSpell {
  name: string;
  index: string;
}

export function useFavouriteSpells() {
  const db = useIndexedDB();

  const favouriteSpells: FavouriteSpell[] | undefined = useLiveQuery(() => db.items.toArray(), []);

  const removeFavouriteSpell = async (spellIndex: string) => {
    await db.items.delete(spellIndex);
  };

  return { favouriteSpells, removeFavouriteSpell };
}
