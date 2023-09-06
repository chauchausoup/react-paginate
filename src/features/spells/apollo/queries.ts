// queries.ts
import { gql } from '@apollo/client';

export const GET_SPELLS = gql`
  query GetSpells {
    spells {
      index
      name
    }
  }
`;

export const GET_SPELL = gql`
  query GetSpell($spellIndex: String!) {
    spell(index: $spellIndex) {
      name
      desc
      range
      components
      ritual
      duration
      concentration
      casting_time
      level
      school {
        name
      }
    }
  }
`;
