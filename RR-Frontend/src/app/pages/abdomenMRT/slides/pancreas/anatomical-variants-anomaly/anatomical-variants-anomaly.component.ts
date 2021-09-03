import { AnatomicalVariantsAnomalyFindingTypeEnum } from '../../../../../core/enums/abdomenMRT/pancreas/norm-variant-anomaly/anatomical-variants-anomaly-finding-type.enum';
import { PancreasAnulareClassificationTypeEnum } from '../../../../../core/enums/abdomenMRT/pancreas/norm-variant-anomaly/pancreas-anulare-classification-type.enum';
import { PancreasDivisumClassificationTypeEnum } from '@enums/abdomenMRT/pancreas/norm-variant-anomaly/pancreas-divisum-classification-type.enum';
import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-norm-variant-anomaly',
  templateUrl: './anatomical-variants-anomaly.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnatomicalVariantsAnomalyComponent {
  @Input() model: PancreasFindingUiModel;

  pancreasDivisumClassificationType = PancreasDivisumClassificationTypeEnum;
  pancreasAnulareClassificationType = PancreasAnulareClassificationTypeEnum;
  anatomicalVariantsAnomalyFindingType = AnatomicalVariantsAnomalyFindingTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.pancreas.fileUpload;
  }
}
