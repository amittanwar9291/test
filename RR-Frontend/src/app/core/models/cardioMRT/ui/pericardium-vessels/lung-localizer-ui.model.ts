import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class LungLocalizerUiModel extends EnumBase {
  upperLobe: boolean;
  middleLobe: boolean;
  lowerLobeRight: boolean;
  upperLobeLeft: boolean;
  lowerLobeLeft: boolean;

  constructor() {
    super();

    this.upperLobe = false;
    this.middleLobe = false;
    this.lowerLobeRight = false;
    this.upperLobeLeft = false;
    this.lowerLobeLeft = false;
  }
}
