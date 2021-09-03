import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DiscFindingUiModel } from '@models/spineCT';
import { ProtrusionExtrusionMigrationHelperService } from '../protrusion-extrusion-migration-helper.service';
import { DiscFindingTypeEnum } from '@enums/spineCT/disc/disc-finding-type.enum';
import { LevelCraniocaudalTypeEnum } from '@enums/spineCT/disc/level-craniocaudal-type.enum';

@Component({
  selector: 'rr-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class Tab2Component {
  @Input() model: DiscFindingUiModel;

  discFindingTypeEnum = DiscFindingTypeEnum;
  levelCraniocaudalTypeEnum = LevelCraniocaudalTypeEnum;

  constructor(public helperService: ProtrusionExtrusionMigrationHelperService) {}
}
