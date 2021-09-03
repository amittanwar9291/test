import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesDifferentialDiagnosisEnum } from '@enums/thoraxMRT/bones/mass/bones-differential-diagnosis.enum';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { AppConfig } from '../../../../../../app.config';

@Component({
  selector: 'rr-differential-diagnosis-tab',
  templateUrl: './differential-diagnosis-tab.component.html',
  styleUrls: ['./differential-diagnosis-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisTabComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  translationsSubscriptions: Subscription[] = [];
  differentialDiagnosisW036Options: DropdownGroupedModel[];
  differentialDiagnosisW037Options: DropdownGroupedModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  bonesDifferentialDiagnosisEnum = BonesDifferentialDiagnosisEnum;

  referencePicture = new ReferencePictureRRIds(
    'uni_07_001',
    'uni_07_002',
    'uni_07_003',
    'uni_07_004',
    'uni_07_005',
    'uni_07_006',
    'uni_07_007'
  );

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslationSubscriptions();
  }

  ngOnDestroy() {
    this.translationsSubscriptions.forEach(s => s.unsubscribe());
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.thoraxMRT.bones.fileUpload;
  }

  initTranslationSubscriptions() {
    this.translationsSubscriptions.push(
      this.translate.stream('thoraxMRT.bones.differentialDiagnosisW036.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisW036Options = out;
      })
    );
    this.translationsSubscriptions.push(
      this.translate.stream('thoraxMRT.bones.differentialDiagnosisW037.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisW037Options = out;
      })
    );
  }

  isDiagnosis1Selected() {
    return (
      this.model.differentialDiagnosis01 !== BonesDifferentialDiagnosisEnum.None ||
      this.model.characterizationOneDifferentialDiagnosis !== BonesDifferentialDiagnosisEnum.None
    );
  }

  onDiffDiagnosisSelectionChange() {
    this.model.isDiagnosisSuspected = false;
    this.model.isSubordinate = false;
  }
}
