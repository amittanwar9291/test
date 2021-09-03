import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AortaFindingUiModel } from '@models/angiographyMRT/ui/aorta/aorta-finding-ui.model';
import { AnomaliesTypeEnum } from '@enums/angiographyMRT/aorta/anomalies-type.enum';
import { DetailsCongenitalVascularRingsTypeEnum } from '@enums/angiographyMRT/aorta/details-congenital-vascular-rings-type.enum';
import { DetailsAorticArchKinkingTypeEnum } from '@enums/angiographyMRT/aorta/details-aortic-arch-kinking-type.enum';

@Component({
  selector: 'rr-aortenanomalien',
  templateUrl: './aortenanomalien.component.html',
  styleUrls: ['./aortenanomalien.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AortenanomalienComponent {
  @Input() model: AortaFindingUiModel;

  anomaliesTypeEnum = AnomaliesTypeEnum;
  detailsAorticArchKinkingTypeEnum = DetailsAorticArchKinkingTypeEnum;
  detailsCongenitalVascularRingsTypeEnum = DetailsCongenitalVascularRingsTypeEnum;
}
