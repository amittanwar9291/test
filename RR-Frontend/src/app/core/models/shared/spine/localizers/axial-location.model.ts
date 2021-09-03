import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class AxialLocation extends EnumBase {
  prevertebral: boolean;
  paraVertebralLeft: boolean;
  dorsalLeft: boolean;
  subcutaneous: boolean;
  dorsalRight: boolean;
  paraVertebralRight: boolean;

  constructor() {
    super();
    this.prevertebral = false;
    this.paraVertebralLeft = false;
    this.dorsalLeft = false;
    this.subcutaneous = false;
    this.dorsalRight = false;
    this.paraVertebralRight = false;
  }
}
