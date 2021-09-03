import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ARCOClassificationTypeEnum,
  AvescularDifferentialDiagnosisTypeEnum,
  CorticalBoneTypeEnum,
  SideTypeEnum
} from '@enums/hipMRT/bones';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { values } from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-avascular-femoral-head-necrosis',
  templateUrl: './avascular-femoral-head-necrosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AvascularFemoralHeadNecrosisComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  sideType = SideTypeEnum;
  corticalBoneType = CorticalBoneTypeEnum;
  arcoClassificationType = ARCOClassificationTypeEnum;
  avescularDifferentialDiagnosisType = AvescularDifferentialDiagnosisTypeEnum;

  avescularDifferentialDiagnosisTypeSub: Subscription;
  avescularDifferentialDiagnosisTypeOptions: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.avescularDifferentialDiagnosisTypeOptions = [];
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.avescularDifferentialDiagnosisTypeSub = this.translate
      .stream('hipMRT.bones.avescularDifferentialDiagnosisTypeOptions.options')
      .subscribe((out: DropdownModel[]) => (this.avescularDifferentialDiagnosisTypeOptions = values(out)));
  }

  ngOnDestroy(): void {
    this.avescularDifferentialDiagnosisTypeSub.unsubscribe();
  }

  resetIsSecondary(): void {
    this.model.isSecondary = false;
  }
}
