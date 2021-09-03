import { DiagnosisDescriptionUiModel } from './diagnosis-description-ui.model';

export class DiagnosisDescriptionGroupedUiModel {
  label: string;
  items: DiagnosisDescriptionUiModel[];

  constructor(label: string, items: DiagnosisDescriptionUiModel[]) {
    this.label = label;
    this.items = items;
  }
}
