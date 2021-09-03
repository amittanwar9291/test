import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MassOsteolysisDifferentialDiagnosisTypeEnum } from '@enums/hipMRT/bones/';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { values } from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['../mass-osteolysis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  descriptionType = DescriptionTypeEnum;
  differentialDiagnosis2 = MassOsteolysisDifferentialDiagnosisTypeEnum;
  differentialDiagnosis3 = MassOsteolysisDifferentialDiagnosisTypeEnum;

  massOsteolysisDifferentialDiagnosisTypesSub: Subscription;
  massOsteolysisDifferentialDiagnosisTypesSub2: Subscription;
  massOsteolysisDifferentialDiagnosisTypeOptions: DropdownModel[];
  massOsteolysisDifferentialDiagnosisTypeOptions2: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.massOsteolysisDifferentialDiagnosisTypeOptions = [];
    this.massOsteolysisDifferentialDiagnosisTypeOptions2 = [];
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.massOsteolysisDifferentialDiagnosisTypesSub = this.translate
      .stream('hipMRT.bones.massOsteolysisDifferentialDiagnosisType.options')
      .subscribe((out: DropdownModel[]) => (this.massOsteolysisDifferentialDiagnosisTypeOptions = values(out)));

    this.massOsteolysisDifferentialDiagnosisTypesSub2 = this.translate
      .stream('hipMRT.bones.massOsteolysisDifferentialDiagnosisType2.options')
      .subscribe((out: DropdownModel[]) => (this.massOsteolysisDifferentialDiagnosisTypeOptions2 = values(out)));
  }
  ngOnDestroy(): void {
    this.massOsteolysisDifferentialDiagnosisTypesSub.unsubscribe();
    this.massOsteolysisDifferentialDiagnosisTypesSub2.unsubscribe();
  }

  resetDifferentialDiagnosis(level: number): void {
    if (level === 1) {
      this.model.isSuspected = false;
      this.model.differentialDiagnosis2 = MassOsteolysisDifferentialDiagnosisTypeEnum.None;
    }
    if (level === 1 || level === 2) {
      this.model.isSecondary = false;
      this.model.differentialDiagnosis3 = MassOsteolysisDifferentialDiagnosisTypeEnum.None;
    }
  }
}
