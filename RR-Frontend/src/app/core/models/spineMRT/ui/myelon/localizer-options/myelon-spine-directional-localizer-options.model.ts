export class MyelonSpineDirectionalLocalizerOptions {
  localizationDescription: string;
  isDiscs: boolean;

  constructor(localizationDescription: string, isDiscs: boolean = false) {
    this.localizationDescription = localizationDescription;
    this.isDiscs = isDiscs;
  }
}
