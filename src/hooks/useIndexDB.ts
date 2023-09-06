import Dexie from 'dexie';

export interface FavouriteSpellItem {
  id?: number;
  name: string;
  index: string;
}

export class SpellDatabase extends Dexie {
  items: Dexie.Table<FavouriteSpellItem, string>;

  constructor() {
    super('SpellDatabase');
    this.version(1).stores({
      items: 'index',
    });
    this.items = this.table('items');
  }
}

const db = new SpellDatabase();

export function useIndexedDB() {
  return db;
}
