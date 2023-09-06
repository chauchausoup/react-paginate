import { useQuery } from '@apollo/client';

import { GET_SPELL, GET_SPELLS } from './queries'; // Import the GraphQL query

export const QUERY_GET_SPELLS = () => {
  const { loading, error, data } = useQuery(GET_SPELLS);

  return {
    loading,
    error,
    spells: data?.spells || [],
  };
};

export const QUERY_GET_SPELL = (spellIndex: string) => {
  const { loading, error, data } = useQuery(GET_SPELL, {
    variables: { spellIndex },
  });

  return {
    loading,
    error,
    spell: data?.spell || [],
  };
};
