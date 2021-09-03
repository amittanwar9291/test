export class ProstataTranslationsModel {
  transitionZoneTZ: string;
  transitionZoneTZIndexLesion: string;
  peripheralZonePZ: string;
  transitionZonePZIndexLesion: string;
  centralZoneCZ: string;

  constructor() {
    this.transitionZoneTZ = 'Lesion TZ';
    this.transitionZoneTZIndexLesion = 'Lesion TZ Index lesion';
    this.peripheralZonePZ = 'Lesion PZ';
    this.transitionZonePZIndexLesion = 'Lesion PZ Index lesion';
    this.centralZoneCZ = 'Lesion CZ';
  }
}
