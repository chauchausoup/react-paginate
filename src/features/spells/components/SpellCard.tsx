// import _ from 'lodash';
import { Link } from 'react-router-dom';

import { QUERY_GET_SPELL } from '../apollo/querySpells';
import { SpellCardItem } from '../types';

import { CardDialog } from './CardDialog';

export function SpellCard({ item }: { item: SpellCardItem }): JSX.Element {
  const { loading, error, spell } = QUERY_GET_SPELL(item.index);

  if (error) return <>{Error}</>;

  return (
    <div>
      {loading ? (
        <div className="text-xs">Loading spell item...</div>
      ) : (
        <CardDialog
          triggerButton={
            <Link to={''}>
              <div className="w-100 ">{item.name}</div>
            </Link>
          }
          cancelButtonText="Close"
          data={spell}
        />
      )}
    </div>
  );
}
