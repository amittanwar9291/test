import { ClearOption } from '@models/shared/dropdown/dropdown-clear-option.model';

export class ClearGroupOption {
  label: string;
  items: [ClearOption];
  constructor(clearOption: ClearOption) {
    this.label = '—';
    this.items = [clearOption];
  }
}
