import { useIndexedDB, SpellDatabase } from '../useIndexDB'; // Adjust the import path as needed

describe('useIndexedDB', () => {
  let db: SpellDatabase;

  beforeEach(() => {
    db = useIndexedDB();
  });

  it('should return an instance of SpellDatabase', () => {
    expect(db).toBeInstanceOf(SpellDatabase);
  });

  it('should have a table named "items"', () => {
    expect(db.tables.some((table) => table.name === 'items')).toBe(true);
  });
});
