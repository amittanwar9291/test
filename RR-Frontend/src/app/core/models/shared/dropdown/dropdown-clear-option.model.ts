export class ClearOption {
  label: string;
  value: string | number;
  constructor(value: string | number) {
    this.label = '—';
    this.value = value;
  }
}
