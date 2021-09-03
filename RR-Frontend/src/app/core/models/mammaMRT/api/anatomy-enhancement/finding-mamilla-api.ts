import { ModelBase } from '@models/model-base';

export class FindingMamillaApi extends ModelBase {
  isRetraction: boolean;
  isInvasion: boolean;

  constructor() {
    super();

    this.isRetraction = false;
    this.isInvasion = false;
  }
}
