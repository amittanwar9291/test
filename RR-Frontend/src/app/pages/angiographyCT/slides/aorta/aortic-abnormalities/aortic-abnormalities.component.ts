import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AnomaliesTypeEnum } from '@enums/angiographyCT/aorta/aortic-abnormalities/anomalies-type.enum';
import { DetailsAorticArchKinkingPseudocoarctationTypeEnum } from '@enums/angiographyCT/aorta/aortic-abnormalities/details-aorti-arch-kinking-pseudocoarctation-type.enum';
import { DetailsCongenitalVascularRingsTypeEnum } from '@enums/angiographyCT/aorta/aortic-abnormalities/details-congenital-vascular-rings-type.enum';
import { AortaFindingUiModel } from '@models/angiographyCT/ui/aorta/aorta-finding-ui.model';

@Component({
  selector: 'rr-aortic-abnormalities',
  templateUrl: './aortic-abnormalities.component.html',
  styleUrls: ['./aortic-abnormalities.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AorticAbnormalitiesComponent {
  @Input() model: AortaFindingUiModel;

  anomaliesTypeEnum = AnomaliesTypeEnum;
  detailsAorticArchKinkingPseudocoarctationTypeEnum = DetailsAorticArchKinkingPseudocoarctationTypeEnum;
  detailsCongenitalVascularRingsTypeEnum = DetailsCongenitalVascularRingsTypeEnum;

  constructor() {}
}
