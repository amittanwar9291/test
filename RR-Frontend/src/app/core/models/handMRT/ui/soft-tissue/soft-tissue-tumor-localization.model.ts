import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class SoftTissueTumorLocalizationModel extends EnumBase {
  palmar: boolean;
  carpalTunnel: boolean;
  dorsal: boolean;
  subungual: boolean;
  radial: boolean;
  ulnar: boolean;
  constructor() {
    super();
    this.palmar = false;
    this.carpalTunnel = false;
    this.dorsal = false;
    this.subungual = false;
    this.radial = false;
    this.ulnar = false;
  }
}
