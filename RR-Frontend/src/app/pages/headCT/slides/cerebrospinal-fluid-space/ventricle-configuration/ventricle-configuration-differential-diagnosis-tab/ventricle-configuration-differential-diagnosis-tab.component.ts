import { Component, Input, OnDestroy } from '@angular/core';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { TranslateService } from '@ngx-translate/core';
import { CerebrospinalVentricleDiagnosisTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/cerebrospinal-ventricle-diagnosis-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-ventricle-configuration-differential-diagnosis-tab',
  templateUrl: './ventricle-configuration-differential-diagnosis-tab.component.html',
  styleUrls: ['./ventricle-configuration-differential-diagnosis-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VentricleConfigurationDifferentialDiagnosisTabComponent implements OnDestroy {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;
  w045: DropdownModel[];
  w045Subscription: Subscription;

  cerebrospinalVentricleDiagnosisTypeEnum = CerebrospinalVentricleDiagnosisTypeEnum;

  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.cerebrospinalFluidSpace.fileUpload;
  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_09_001',
    'uni_09_002',
    'uni_09_003',
    'uni_09_004',
    'uni_09_005',
    'uni_09_006',
    'uni_09_007'
  );

  constructor(private translate: TranslateService) {
    this.w045Subscription = translate
      .stream('headCT.cerebrospinalFluidSpace.w045.options')
      .subscribe((out: DropdownModel[]) => (this.w045 = out));
  }

  onVentricleDifferentialDiagnosis1TypeChange() {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  ngOnDestroy() {
    this.w045Subscription.unsubscribe();
  }
}
