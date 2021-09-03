import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { HistologyKnownTypeEnum, MassOsteolysisDifferentialDiagnosisTypeEnum } from '@enums/hipMRT/bones/';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { values } from 'lodash';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-localization-expansion',
  templateUrl: './localization-expansion.component.html',
  styleUrls: ['../mass-osteolysis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationExpansionComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  @Output() emitLocalizer = new EventEmitter();

  massOsteolysisDifferentialDiagnosisTypesSub: Subscription;
  massOsteolysisDifferentialDiagnosisTypeOptions: DropdownModel[];

  descriptionType = DescriptionTypeEnum;
  histologyKnownType = HistologyKnownTypeEnum;
  mainDiagnosisType = MassOsteolysisDifferentialDiagnosisTypeEnum;

  constructor(private translate: TranslateService) {
    this.massOsteolysisDifferentialDiagnosisTypeOptions = [];
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.massOsteolysisDifferentialDiagnosisTypesSub = this.translate
      .stream('hipMRT.bones.massOsteolysisDifferentialDiagnosisType.options')
      .subscribe((out: DropdownModel[]) => (this.massOsteolysisDifferentialDiagnosisTypeOptions = values(out)));
  }

  ngOnDestroy(): void {
    this.massOsteolysisDifferentialDiagnosisTypesSub.unsubscribe();
  }

  resetHistoryKnownBlock(): void {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
  }

  resetDifferentialDiagnosis(): void {
    this.model.differentialDiagnosis2 = MassOsteolysisDifferentialDiagnosisTypeEnum.None;
    this.model.isSecondary = false;
    this.model.differentialDiagnosis3 = MassOsteolysisDifferentialDiagnosisTypeEnum.None;
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit();
  }

  resetRelevantSequesterValues(): void {
    if (this.model.expansionSizeInMm === null) {
      this.model.expansionSecondSizeInMm = null;
      this.model.expansionThirdSizeInMm = null;
    } else if (this.model.expansionSecondSizeInMm === null) {
      this.model.expansionThirdSizeInMm = null;
    }
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.hipMRT.bones.fileUpload;
  }
}
