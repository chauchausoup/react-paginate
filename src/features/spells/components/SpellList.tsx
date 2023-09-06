import { PlusCircleIcon } from '@heroicons/react/solid';

import { Button } from '@/components/Elements';
import { useSpellList } from '@/hooks/useSpellList';

import { SpellCardItem } from '../types';

import { SpellCard } from './SpellCard';

interface SpellListProps {
  currentSpellItems: SpellCardItem[];
}

function SpellList({ currentSpellItems }: SpellListProps) {
  const { addSpellFromList } = useSpellList();

  return (
    <div className="grid grid-cols-12 gap-1">
      {currentSpellItems.map((item) => (
        <div
          className="col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-6 m-1 flex items-center border rounded-lg p-1"
          key={item.index}
        >
          <SpellCard item={item} />
          <Button
            variant="transparent"
            size="xs"
            onClick={() => addSpellFromList({ name: item.name, index: item.index })}
          >
            <PlusCircleIcon className="h-6 w-6 text-blue-700" aria-hidden="true" />
          </Button>
        </div>
      ))}
    </div>
  );
}

export default SpellList;
