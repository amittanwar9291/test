import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CortexFindingUiModel } from '@models/headMRT/ui/cortex/cortex-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { ClassificationFazekasTypeEnum, CortexDifferentialDiagnosisTypeEnum } from '@enums/headMRT/cortex/common';
import { ClassificationWHOTypeEnum } from '@enums/headMRT/cortex/focal';
import { CortexFindingTypeEnum } from '@enums/headMRT/cortex';
import { ClassificationAdamsTypeEnum } from '@enums/headMRT/cortex/diffuse';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent implements OnInit {
  @Input() model: CortexFindingUiModel;
  @Input() whoCondition: string[];
  @Input() classificationFazekasOptions: DropdownModel[];
  @Input() differentialDiagnosisOptions01: DropdownGroupedModel[];
  @Input() classificationWhoOptions: DropdownModel[];
  @Input() classificationAdamsOptions: DropdownModel[];
  @Input() differentialDiagnosisOptions0203: DropdownGroupedModel[];

  subscriptions: Subscription[] = [];
  whoConditionArray = [];

  differentialDiagnosisEnum = CortexDifferentialDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  findingEnum = CortexFindingTypeEnum;

  ngOnInit() {
    this.whoConditionArray = this.whoCondition;
  }

  resetDifferentialDiagnosisDependantModel03(): void {
    this.model.classificationWHO3 = ClassificationWHOTypeEnum.None;
    this.model.classificationFazekas3 = ClassificationFazekasTypeEnum.None;
    this.model.classificationAdams3 = ClassificationAdamsTypeEnum.None;
  }

  resetDifferentialDiagnosisDependantModel02(): void {
    this.model.isSubordinate = false;
    this.model.classificationFazekas2 = ClassificationFazekasTypeEnum.None;
    this.model.classificationWHO2 = ClassificationWHOTypeEnum.None;
    this.model.classificationAdams2 = ClassificationAdamsTypeEnum.None;
    this.resetDifferentialDiagnosisDependantModel03();
  }

  resetDifferentialDiagnosisDependantModel01(): void {
    this.model.isSuspicionOf = false;
    this.model.classificationWHO1 = ClassificationWHOTypeEnum.None;
    this.model.classificationFazekas1 = ClassificationFazekasTypeEnum.None;
    this.model.classificationAdams1 = ClassificationAdamsTypeEnum.None;
    this.resetDifferentialDiagnosisDependantModel02();
  }

  whoConditionFunction = param => this.whoConditionArray.includes(param);

  rrIdConditionDifferentialDiagnosisType3() {
    return this.model.findingType === CortexFindingTypeEnum.Focal ? 'hea_m_060439' : 'hea_m_060473';
  }

  rrIdConditionDifferentialDiagnosisType2() {
    return this.model.findingType === CortexFindingTypeEnum.Focal ? 'hea_m_060341' : 'hea_m_060377';
  }

  differentialDiagnosisValue(): DropdownGroupedModel[] {
    if (this.model.findingType === CortexFindingTypeEnum.Focal) {
      return this.differentialDiagnosisOptions0203;
    }
    if (this.model.findingType === CortexFindingTypeEnum.Diffuse) {
      return this.differentialDiagnosisOptions01;
    }
  }
}
