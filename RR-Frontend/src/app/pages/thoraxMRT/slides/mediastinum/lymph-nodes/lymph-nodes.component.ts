import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import {
  AorticNodesTypeEnum,
  HilarLobarNodesTypeEnum,
  InferiorMediastinalNodesTypeEnum,
  LymphNodeStationsTypeEnum,
  LymphNodesTypeEnum,
  MediastinumCalcificationTypeEnum,
  SuperiorMediastinalNodesTypeEnum
} from '@enums/thoraxMRT/mediastinum';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';

@Component({
  selector: 'rr-lymph-nodes',
  templateUrl: './lymph-nodes.component.html',
  styleUrls: ['./lymph-nodes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LymphNodesComponent {
  @Input() model: MediastinumFindingUiModel;

  locationTypeEnum = LocationTypeEnum;
  lymphNodesTypeEnum = LymphNodesTypeEnum;
  lymphNodeStationsTypeEnum = LymphNodeStationsTypeEnum;
  superiorMediastinalNodesTypeEnum = SuperiorMediastinalNodesTypeEnum;
  aorticNodesTypeEnum = AorticNodesTypeEnum;
  inferiorMediastinalNodesTypeEnum = InferiorMediastinalNodesTypeEnum;
  hilarLobarNodesTypeEnum = HilarLobarNodesTypeEnum;
  mediastinumCalcificationTypeEnum = MediastinumCalcificationTypeEnum;
}
