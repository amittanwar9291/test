export class TranslationBitsConfig {
  orientationTypeBits: { [key: string]: string };
  sequenceTypeBits: { [key: string]: string };

  constructor() {
    this.orientationTypeBits = null;
    this.sequenceTypeBits = null;
  }
}
