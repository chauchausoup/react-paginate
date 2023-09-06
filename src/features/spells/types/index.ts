import { BaseEntity } from '@/types';

export type Spell = {
  index: string;
  name: string;
  url: string;
} & BaseEntity;

export type SpellData = {
  name: string;
  desc: string;
  range: string;
  components: string[];
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  school: {
    name: string;
  };
};

export interface SpellCardItem {
  index: string;
  name: string;
}
