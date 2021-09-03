export class DropdownModel {
  label: string;
  value: string;
  disabled?: boolean;
  constructor(label?: string, value?: string) {
    this.label = label;
    this.value = value;
    this.disabled = false;
  }
}
