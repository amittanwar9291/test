import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { TranslateService } from '@ngx-translate/core';
import { MeningesDiagnosisType } from '@enums/headCT/meninges/meninges-diagnosis-type.enum';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

@Component({
  selector: 'rr-mass-differential-diagnosis',
  templateUrl: './mass-differential-diagnosis.component.html',
  styleUrls: ['./mass-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassDifferentialDiagnosisComponent implements OnDestroy {
  @Input() model: MeningesFindingUiModel;
  w020: DropdownGroupedModel[];
  w021: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];

  descriptionTypeEnum = DescriptionTypeEnum;
  meningesDiagnosisType = MeningesDiagnosisType;

  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.meninges.fileUpload;

  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_05_001',
    'uni_05_002',
    'uni_05_003',
    'uni_05_004',
    'uni_05_005',
    'uni_05_006',
    'uni_05_007'
  );

  constructor(private translate: TranslateService) {
    this.subscriptions.push(
      translate.stream('headCT.meninges.w020.options').subscribe((out: DropdownGroupedModel[]) => (this.w020 = out)),
      translate.stream('headCT.meninges.w021.options').subscribe((out: DropdownGroupedModel[]) => (this.w021 = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  clearDifferentialDiagnosis1DependentFields() {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  clearDifferentialDiagnosis2DependentFields() {
    this.model.isSubordinate = false;
  }
}
