import { IModel } from '@interfaces/model.interface';
import { Guid } from './shared/guid/guid';

export class ModelBase implements IModel {
  id: string;

  constructor() {
    this.id = Guid.createEmpty();
  }
}
