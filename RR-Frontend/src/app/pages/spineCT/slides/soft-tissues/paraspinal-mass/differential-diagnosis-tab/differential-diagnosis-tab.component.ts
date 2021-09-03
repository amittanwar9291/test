import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissuesFindingUiModel } from '@models/spineCT';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SoftTissuesHelperService, SpineCTSoftTissuesLargeLocalizerConfig } from '../../soft-tissues-helper.service';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissuesDiagnosisTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/soft-tissues-diagnosis-type.enum';
import { AppConfig } from '../../../../../../app.config';
import { compact } from 'lodash';

@Component({
  selector: 'rr-differential-diagnosis-tab',
  templateUrl: './differential-diagnosis-tab.component.html',
  styleUrls: ['./differential-diagnosis-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisTabComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissuesFindingUiModel;

  subscriptions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;

  w030DifferentialDiagnose1: DropdownGroupedModel[];
  w031DifferentialDiagnose2: DropdownGroupedModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  softTissuesDiagnosisTypeEnum = SoftTissuesDiagnosisTypeEnum;

  constructor(
    private spineCtHelperService: SpineCtHelperService,
    private translate: TranslateService,
    private softTissuesHelperService: SoftTissuesHelperService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
    );
    this.subscriptions.push(
      this.translate
        .stream('spineCT.softTissues.w030DifferentialDiagnose1.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w030DifferentialDiagnose1 = out))
    );
    this.subscriptions.push(
      this.translate
        .stream('spineCT.softTissues.w031DifferentialDiagnose2.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w031DifferentialDiagnose2 = out))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  isSingleChoiceOnTabOneLocalizer(): boolean {
    return compact(Object.values(this.model.spineLocation)).length === 1;
  }

  openSpineLocalizer(): void {
    this.softTissuesHelperService.largeLocalizerOpenedConfig.next(
      new SpineCTSoftTissuesLargeLocalizerConfig('standard', this.model.moreThanOneLesionSpineLocation)
    );
  }

  onDifferentialDiagnosis01Change(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  onDifferentialDiagnosis02Change(): void {
    this.model.isSubordinate = false;
  }

  clearLocalizer() {
    if (!this.model.isMoreThanOneLesion) {
      this.model.moreThanOneLesionSpineLocation = new SpineLocation();
    }
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.spineCT.softTissues.fileUpload;
  }
}
