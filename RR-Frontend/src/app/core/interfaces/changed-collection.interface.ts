import { IDeletable } from '@interfaces/deletable.interface';

export interface IUpdatedCollection<T extends IDeletable> {
  collection: T[];
  hasUpdated: boolean;
}
