import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class FigoClassification extends EnumBase {
  submucousPedunculated: boolean;
  submucousLessThan50: boolean;
  submucous50OrMore: boolean;
  intramuralMyomaWithContact: boolean;
  intramuralMyoma: boolean;
  subserousMyoma50OrMore: boolean;
  subserousMyomaLessThan50: boolean;
  subserousPedunculatedMyoma: boolean;
  other: boolean; // other

  constructor() {
    super();
    this.submucousPedunculated = false;
    this.submucousLessThan50 = false;
    this.submucous50OrMore = false;
    this.intramuralMyomaWithContact = false;
    this.intramuralMyoma = false;
    this.subserousMyoma50OrMore = false;
    this.subserousMyomaLessThan50 = false;
    this.subserousPedunculatedMyoma = false;
    this.other = false;
  }
}
