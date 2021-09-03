import { Component, Input } from '@angular/core';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import {
  AorticNodesTypeEnum,
  HilarLobarNodesTypeEnum,
  InferiorMediastinalNodesTypeEnum,
  LymphNodeStationsTypeEnum,
  LymphNodesTypeEnum,
  MediastinumCalcificationTypeEnum,
  ParatrachealNodesTypeEnum
} from '@enums/thoraxCT/mediastinum';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-lymph-nodes',
  templateUrl: './lymph-nodes.component.html',
  styleUrls: ['./lymph-nodes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LymphNodesComponent {
  @Input() model: MediastinumFindingUiModel;
  @Input() isRECIST2CheckboxSelectable = true;

  lymphNodesTypeEnum = LymphNodesTypeEnum;
  lymphNodeStationsTypeEnum = LymphNodeStationsTypeEnum;
  locationTypeEnum = LocationTypeEnum;
  paratrachealNodesTypeEnum = ParatrachealNodesTypeEnum;
  aorticNodesTypeEnum = AorticNodesTypeEnum;
  inferiorMediastinalNodesTypeEnum = InferiorMediastinalNodesTypeEnum;
  hilarLobarNodesTypeEnum = HilarLobarNodesTypeEnum;
  mediastinumCalcificationTypeEnum = MediastinumCalcificationTypeEnum;

  isEnlargedLymphNodesCalcificationMaxDiameterProvided(): boolean {
    if (this.model.enlargedLymphNodesCalcificationMaxDiameterSADInMm) {
      return true;
    } else {
      this.model.isSuspect = false;
      this.model.isPreservedFattyHilum = false;
      return false;
    }
  }
}
