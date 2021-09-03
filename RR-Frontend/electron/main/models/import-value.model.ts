export class ImportValue {
  importValueIdentifier: string;
  value: any;

  constructor(importValueIdentifier: string, value: any) {
    this.importValueIdentifier = importValueIdentifier;
    this.value = value;
  }
}
