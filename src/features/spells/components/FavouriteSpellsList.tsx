import { XCircleIcon } from '@heroicons/react/solid';

import { Button } from '@/components/Elements';
import { useFavouriteSpells } from '@/hooks/useFavouriteSpells';

function FavouriteSpellsList() {
  const { favouriteSpells, removeFavouriteSpell } = useFavouriteSpells();

  if (!favouriteSpells) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Favorite Spells</h2>
      <ul>
        {favouriteSpells.map((spell) => (
          <li key={spell.index} className="flex justify-between items-center  border-gray-300 py-1">
            <span className="">{spell.name}</span>
            <Button
              variant="transparent"
              size="xs"
              onClick={() => removeFavouriteSpell(spell.index)}
            >
              <XCircleIcon className="h-6 w-6 text-red-700" aria-hidden="true" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavouriteSpellsList;
