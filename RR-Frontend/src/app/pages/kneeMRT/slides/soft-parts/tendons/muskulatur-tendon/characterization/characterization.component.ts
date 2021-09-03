import { Component, Input } from '@angular/core';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { ClassificationMunichConsensusTypeEnum, IntramuscularHaematomaTypeEnum, OsseousAvulsionTypeEnum } from '@enums/kneeMRT/soft-parts';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-characterization',
  templateUrl: './characterization.component.html',
  styleUrls: ['./characterization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationComponent {
  @Input() model: SoftPartsFindingUiModel;

  intramuscularHaematomaTypeEnum: typeof IntramuscularHaematomaTypeEnum;
  classificationMunichConsensusTypeEnum: typeof ClassificationMunichConsensusTypeEnum;
  osseousAvulsionTypeEnum: typeof OsseousAvulsionTypeEnum;

  constructor() {
    this.intramuscularHaematomaTypeEnum = IntramuscularHaematomaTypeEnum;
    this.classificationMunichConsensusTypeEnum = ClassificationMunichConsensusTypeEnum;
    this.osseousAvulsionTypeEnum = OsseousAvulsionTypeEnum;
  }

  resetSliders() {
    this.model.t1w = 0;
    this.model.t2w = 0;
  }
}
