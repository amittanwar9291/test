import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';
import {
  LocalizationAneurysmaTypeEnum,
  ArterialTerritoryTypeEnum,
  SideTypeEnum,
  SubarachnoidHemorrhageTypeEnum
} from '@enums/headMRT/vessels';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ArteriesSegmentsLocalizerModel } from '@models/shared/angiography/localizers/arteries-segments-localizer.model';
import { nameof } from 'ts-simple-nameof/index';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { compact } from 'lodash';
import { VesselsHelperService } from '../vessels-helper.service';
import { SubarachnoidHemorrhageLocalizationTypeEnum } from '@enums/headMRT/vessels/aneurysm/subarachnoid-hemorrhage-localization-type.enum';
import { AppConfig } from 'app/app.config';
import { CarotidArteryUiModel } from '@models/shared/angiography/localizers/carotid-artery-ui-model';

@Component({
  selector: 'rr-aneurysm',
  templateUrl: './aneurysm.component.html',
  styleUrls: ['./aneurysm.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AneurysmComponent implements OnInit, OnDestroy {
  @Input() model: VesselsFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  w014Form: DropdownModel[];
  w015AlignmentAneurysmRadome: DropdownModel[];
  w016Differentialdiagnose: DropdownModel[];
  w016DifferentialdiagnoseForBA: DropdownModel[];
  subscriptions: Subscription[] = [];
  arteriesSegmentsLocalizerModel = ArteriesSegmentsLocalizerModel;
  localizationAneurysmaTypeEnum = LocalizationAneurysmaTypeEnum;
  subarachnoidHemorrhageTypeEnum = SubarachnoidHemorrhageTypeEnum;
  subarachnoidHemorrhageLocalizationTypeEnum = SubarachnoidHemorrhageLocalizationTypeEnum;
  localizationTypeEnum = ArterialTerritoryTypeEnum;
  sideTypeEnum = SideTypeEnum;

  constructor(
    private translate: TranslateService,
    private vesselHelperService: VesselsHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.initTranslations();
    if (compact(Object.values(this.model.affectedSegmentsOrVesselsLocation)).length > 0) {
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.affectedSegmentsOrVesselsLocation));
    }
  }

  openLargeLocalizer(model: 'arteriesSegments' | 'arotidArtery') {
    this.vesselHelperService.largeLocalizerOpen.next(model);
  }

  resetLocalizer() {
    this.model.affectedSegmentsOrVesselsLocation = new ArteriesSegmentsLocalizerModel();
    this.model.segmentsBouthillierLocations = new CarotidArteryUiModel();
  }

  resetInput() {
    if (!this.model.extensionAneurysm) {
      this.model.secondPlane = null;
      this.model.thirdPlane = null;
    } else if (!this.model.secondPlane) {
      this.model.thirdPlane = null;
    }
  }

  closeError() {
    this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.affectedSegmentsOrVesselsLocation));
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('headMRT.vessels.w014Form').subscribe((out: DropdownModel[]) => {
        this.w014Form = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('headMRT.vessels.w015AlignmentAneurysmRadome').subscribe((out: DropdownModel[]) => {
        this.w015AlignmentAneurysmRadome = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('headMRT.vessels.w016Differentialdiagnose').subscribe((out: DropdownModel[]) => {
        this.w016Differentialdiagnose = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('headMRT.vessels.w016DifferentialdiagnoseForBA').subscribe((out: DropdownModel[]) => {
        this.w016DifferentialdiagnoseForBA = out;
      })
    );
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.headMRT.vessels.fileUpload;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
