import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

export interface IPreferencesDropdownOptionsModel extends DropdownModel {
  value: string;
  label: string;
  isDeleteOption?: boolean;
}
