import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { SideTypeEnum } from '@enums/pelvisMRT/female-sex/side-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/differential-diagnosis-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;

  sideTypeEnum = SideTypeEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  isCM: boolean;

  constructor(private femaleSexHelperService: FemaleSexHelperService) {}

  ngOnInit() {
    this.subscriptions.push(this.femaleSexHelperService.isCM.subscribe(value => (this.isCM = value)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
