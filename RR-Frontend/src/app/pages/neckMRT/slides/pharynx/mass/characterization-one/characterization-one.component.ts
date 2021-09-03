import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PharynxFindingUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AppConfig } from 'app/app.config';
import { DifferentialDiagnosisTypeEnum, ProvenHistologyTypeEnum } from '@enums/neckMRT/pharynx';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { PharynxPresetHttpService } from '@services/neckMRT/http/pharynx/pharynx-preset-http.service';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: PharynxPresetHttpService
    }
  ]
})
export class CharacterizationOneComponent {
  @Input() model: PharynxFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownGroupedModel[];
  @Input() orientationAxialOptions: DropdownModel[];

  differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  provenHistologyType = ProvenHistologyTypeEnum;
  descriptionType = DescriptionTypeEnum;

  constructor(public translateService: TranslateService) {}

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.neckMRT.pharynx.fileUpload;
  }

  resetDifferentialDiagnosisDependantModel(): void {
    this.model.isProvenHistology = false;
    this.model.provenHistologyType = ProvenHistologyTypeEnum.None;
    this.model.isSuspicionOf = false;
    this.model.differentialDiagnosis2 = DifferentialDiagnosisTypeEnum.None;
    this.model.isSubordinate = false;
  }
}
