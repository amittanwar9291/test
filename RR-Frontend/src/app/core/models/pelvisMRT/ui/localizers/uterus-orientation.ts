import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class UterusOrientation extends EnumBase {
  submucousPedunculated: boolean;
  anteversion: boolean;
  anteversionAndAnteflexion: boolean;
  retroversion: boolean;
  retroversionAndRetroflexion: boolean;

  constructor() {
    super();
    this.submucousPedunculated = false;
    this.anteversion = false;
    this.anteversionAndAnteflexion = false;
    this.retroversion = false;
    this.retroversionAndRetroflexion = false;
  }
}
