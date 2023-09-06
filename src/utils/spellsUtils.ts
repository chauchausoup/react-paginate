//for the sake of understandability we are not minifying our utility code here
export interface Item {
  index: string;
  name: string;
}

export const currentSpellsUtils = (spells: Item[], itemsPerPage: number, currentPage: number) => {
  const pageCount: number = Math.ceil(spells.length / itemsPerPage);
  const startIndex: number = currentPage * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentSpellItems = spells.slice(startIndex, endIndex);
  return { currentSpellItems, pageCount };
};
