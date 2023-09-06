import { currentSpellsUtils, Item } from '../spellsUtils'; // Replace with the actual path to your utility file

describe('currentSpellsUtils', () => {
  const spells: Item[] = [
    {
      name: 'Spell 1',
      index: 'spell_index',
    },
  ];

  it('should return the correct currentSpellItems and pageCount', () => {
    // Arrange
    const itemsPerPage = 1;
    const currentPage = 0;

    // Act
    const result = currentSpellsUtils(spells, itemsPerPage, currentPage);

    // Assert
    expect(result.currentSpellItems).toEqual([spells[0]]);
    expect(result.pageCount).toBe(1);
  });

  it('should handle empty spells array', () => {
    // Arrange
    const emptySpells: Item[] = [];
    const itemsPerPage = 5;
    const currentPage = 0;

    // Act
    const result = currentSpellsUtils(emptySpells, itemsPerPage, currentPage);

    // Assert
    expect(result.currentSpellItems).toEqual([]);
    expect(result.pageCount).toBe(0);
  });

  it('should handle currentPage out of bounds', () => {
    // Arrange
    const itemsPerPage = 2;
    const currentPage = 10; // currentPage is out of bounds

    // Act
    const result = currentSpellsUtils(spells, itemsPerPage, currentPage);

    // Assert
    expect(result.currentSpellItems).toEqual([]);
    expect(result.pageCount).toBe(1); // Only one page because there's only one spell in this test
  });
});
