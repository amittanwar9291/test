export class DicomTagKeyPair {
  keyword: string;
  hexCode: string;

  constructor(keyword: string, hexCode: string) {
    this.keyword = keyword;
    this.hexCode = hexCode;
  }
}
