import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';
import { CharacterizationThrombusTypeEnum, GradingOcclusionTypeEnum } from '@enums/headMRT/vessels';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from 'app/app.config';
import { UploaderNgWrapperComponent } from '@controls/uploader-ng-wrapper/uploader-ng-wrapper.component';
import { compact } from 'lodash';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { VesselsHelperService } from '../vessels-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-cerebral-venous-thrombosis',
  templateUrl: './cerebral-venous-thrombosis.component.html',
  styleUrls: ['./cerebral-venous-thrombosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CerebralVenousThrombosisComponent implements OnInit, OnDestroy {
  @Input() model: VesselsFindingUiModel;
  @Input() activeTabIndex: number;
  @Input() isCMYes: boolean;
  @ViewChild(UploaderNgWrapperComponent) fileUploader: UploaderNgWrapperComponent;

  subscriptions: Subscription[] = [];
  gradingOcclusionTypeEnum = GradingOcclusionTypeEnum;
  characterizationThrombusTypeEnum = CharacterizationThrombusTypeEnum;
  w013Differentialdiagnose: DropdownModel[];

  constructor(
    private translate: TranslateService,
    private vesselHelperService: VesselsHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('headMRT.vessels.w013Differentialdiagnose').subscribe((out: DropdownModel[]) => {
        this.w013Differentialdiagnose = out;
      })
    );
    if (compact(Object.values(this.model.cerebralVenousThrombosisLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.cerebralVenousThrombosisLocations));
    }
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.headMRT.vessels.fileUpload;
  }

  openLargeLocalizer(model: 'cerebralVenousThrombosis') {
    this.vesselHelperService.largeLocalizerOpen.next(model);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
