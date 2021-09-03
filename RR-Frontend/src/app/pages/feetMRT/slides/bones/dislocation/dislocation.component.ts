import { Component, Input } from '@angular/core';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DislocationLocalizationTypeEnum } from '@enums/feetMRT/bones/dislocation/dislocation-localization-type.enum';
import { DislocationClassificationTypeEnum } from '@enums/feetMRT/bones/dislocation/dislocation-classification-type.enum';
import { DislocationClassificationSubTypeEnum } from '@enums/feetMRT/bones/dislocation/dislocation-classification-sub-type.enum';
import { DislocationClassificationDetailsTypeEnum } from '@enums/feetMRT/bones/dislocation/dislocation-classification-details-type.enum';
import { DislocationStageTypeEnum } from '@enums/feetMRT/bones/dislocation/dislocation-stage-type.enum';

@Component({
  selector: 'rr-dislocation',
  templateUrl: './dislocation.component.html',
  styleUrls: ['./dislocation.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DislocationComponent {
  @Input() model: BonesFindingUiModel;
  dislocationLocalizationType: typeof DislocationLocalizationTypeEnum;
  dislocationClassificationType: typeof DislocationClassificationTypeEnum;
  dislocationClassificationSubType: typeof DislocationClassificationSubTypeEnum;
  dislocationClassificationDetailsType: typeof DislocationClassificationDetailsTypeEnum;
  dislocationStageType: typeof DislocationStageTypeEnum;

  constructor() {
    this.dislocationLocalizationType = DislocationLocalizationTypeEnum;
    this.dislocationClassificationType = DislocationClassificationTypeEnum;
    this.dislocationClassificationSubType = DislocationClassificationSubTypeEnum;
    this.dislocationClassificationDetailsType = DislocationClassificationDetailsTypeEnum;
    this.dislocationStageType = DislocationStageTypeEnum;
  }
}
