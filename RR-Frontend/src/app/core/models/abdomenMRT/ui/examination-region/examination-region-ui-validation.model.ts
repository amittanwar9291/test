import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { ExaminationRegionUiModel } from '@models/abdomenMRT/ui/examination-region/examination-region-ui.model';

export const ExaminationRegionValidationModel: IValidationModel = {
  elements: [
    {
      modelName: [
        nameof<ExaminationRegionUiModel>(m => m.isMRIAbdomen),
        nameof<ExaminationRegionUiModel>(m => m.isMRIUpperAbdomen),
        nameof<ExaminationRegionUiModel>(m => m.isMRILiver),
        nameof<ExaminationRegionUiModel>(m => m.isMRIPancreas),
        nameof<ExaminationRegionUiModel>(m => m.isMRCP),
        nameof<ExaminationRegionUiModel>(m => m.isMRISellink),
        nameof<ExaminationRegionUiModel>(m => m.isMRIKidneys),
        nameof<ExaminationRegionUiModel>(m => m.isMRIAdrenalGlands),
        nameof<ExaminationRegionUiModel>(m => m.isMRIRetroperitoneum)
      ]
    }
  ]
};
