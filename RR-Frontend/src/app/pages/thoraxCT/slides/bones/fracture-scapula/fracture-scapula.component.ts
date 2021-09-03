import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { ScapulaFractureTypeEnum } from '@enums/thoraxCT/bones/scapula-fracture-type.enum';
import { ProcessTypeEnum } from '@enums/thoraxCT/bones/process-type.enum';
import { BodyTypeEnum } from '@enums/thoraxCT/bones/body-type.enum';
import { GlenoidFossaTypeEnum } from '@enums/thoraxCT/bones/glenoid-fossa-type.enum';
import { NotFurtherDefinedClassificationTypeEnum } from '@enums/thoraxCT/bones/not-further-defined-classification-type.enum';

@Component({
  selector: 'rr-fracture-scapula',
  templateUrl: './fracture-scapula.component.html',
  styleUrls: ['./fracture-scapula.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureScapulaComponent {
  locationType = LocationTypeEnum;
  scapulaFractureType = ScapulaFractureTypeEnum;
  processType = ProcessTypeEnum;
  bodyType = BodyTypeEnum;
  glenoidFossaType = GlenoidFossaTypeEnum;
  notFurtherDefinedClassificationType = NotFurtherDefinedClassificationTypeEnum;

  @Input() model: BonesFindingUiModel;
}
