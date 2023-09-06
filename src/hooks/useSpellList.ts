import { useIndexedDB } from '@/hooks/useIndexDB';
import { useNotificationStore } from '@/stores/notifications';

export interface FavouriteSpellItem {
  id?: number;
  name: string;
  index: string;
}

export function useSpellList() {
  const db = useIndexedDB();
  const { addNotification } = useNotificationStore();

  async function addSpellFromList(item: FavouriteSpellItem) {
    try {
      await db.items.add(item);
      console.log('Spell added successfully');

      addNotification({
        type: 'success',
        title: `${item.name} added to Favourite list.`,
      });
    } catch (error) {
      console.error('Error adding spell:', error);

      addNotification({
        type: 'error',
        title: `${error}`,
      });
    }
  }

  return { addSpellFromList };
}
