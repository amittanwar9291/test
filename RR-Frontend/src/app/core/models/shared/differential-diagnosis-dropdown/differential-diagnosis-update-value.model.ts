export class DiagnosisUpdateValue {
  value: string;
  isUserUpdate: boolean;
  constructor(value: string, isUserUpdate: boolean) {
    this.value = value;
    this.isUserUpdate = isUserUpdate;
  }
}
