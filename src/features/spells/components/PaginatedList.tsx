import { useQuery } from '@apollo/client';
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import { Spinner } from '@/components/Elements';
import { currentSpellsUtils } from '@/utils/spellsUtils';

import { GET_SPELLS } from '../apollo/queries';

import SpellList from './SpellList';

const icons = {
  rightArrow: <ArrowCircleRightIcon className="h-6 w-6 text-blue-700" aria-hidden="true" />,
  leftArrow: <ArrowCircleLeftIcon className="h-6 w-6 text-blue-700" aria-hidden="true" />,
};

function PaginatedList({ itemsPerPage }: { itemsPerPage: number }) {
  const { data, loading, error } = useQuery(GET_SPELLS);
  const [currentPage, setCurrentPage] = useState(0);

  if (loading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) return null;

  const { currentSpellItems, pageCount } = currentSpellsUtils(
    data?.spells || [],
    itemsPerPage,
    currentPage
  );

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <SpellList currentSpellItems={currentSpellItems} />
      <ReactPaginate
        breakLabel={<span className="text-gray-600">...</span>}
        nextLabel={<span className="text-blue-600 hover:text-blue-900">{icons.rightArrow}</span>}
        onPageChange={({ selected }) => handlePageChange(selected)}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel={<span className="text-blue-600 hover:text-blue-900">{icons.leftArrow}</span>}
        renderOnZeroPageCount={null}
        pageClassName="inline-block mx-1 p-1 rounded-full border border-gray-300 text-indigo-600 hover:text-indigo-900"
        containerClassName="flex justify-center items-center mt-4"
        activeClassName="bg-indigo-100 text-white"
      />
    </>
  );
}

export default PaginatedList;
