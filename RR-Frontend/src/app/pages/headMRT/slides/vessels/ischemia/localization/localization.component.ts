import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';
import {
  ArterialTerritoryTypeEnum,
  DetailsTypeEnum,
  FormTypeEnum,
  VascularTerritoryTypeEnum,
  WhiteMatterTypeEnum
} from '@enums/headMRT/vessels';
import { ArterialTerritoriesLocalizerModel } from '@models/headMRT/ui/arterial-territories-localizer.model';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { compact } from 'lodash';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { VesselsHelperService } from '../../vessels-helper.service';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent implements OnInit, OnDestroy {
  @Input() model: VesselsFindingUiModel;

  subscriptions: Subscription[] = [];
  formDropdown: DropdownModel[];
  whiteMatterDropdown: DropdownModel[];
  arterialTerritoryEnum = ArterialTerritoryTypeEnum;
  formTypeEnum = FormTypeEnum;
  vascularTerritoryTypeEnum = VascularTerritoryTypeEnum;
  detailsTypeEnum = DetailsTypeEnum;
  whiteMatterDropdownEnum = WhiteMatterTypeEnum;

  drainageAreasValidation = [
    nameof<VesselsFindingUiModel>(m => m.isSphenoparietalSinusRight),
    nameof<VesselsFindingUiModel>(m => m.isSphenoparietalSinusLeft),
    nameof<VesselsFindingUiModel>(m => m.isVeinOfLabbeRight),
    nameof<VesselsFindingUiModel>(m => m.isVeinOfLabbeLeft),
    nameof<VesselsFindingUiModel>(m => m.isInternalCerebralVeins),
    nameof<VesselsFindingUiModel>(m => m.isCorticalVeins)
  ];

  constructor(
    private translate: TranslateService,
    private vesselHelperService: VesselsHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit() {
    this.initTranslations();
    if (compact(Object.values(this.model.vascularTerritoryLocations)).length !== 0) {
      this.closeError();
    }
  }

  openLargeLocalizer(model: 'arterialTerritories' | 'basalGanglia' | 'arteriesSegments' | 'cortex') {
    this.vesselHelperService.largeLocalizerOpen.next(model);
  }

  resetLocalizer() {
    this.model.vascularTerritoryLocations = new ArterialTerritoriesLocalizerModel();
  }

  resetFormTypeDropdown() {
    this.model.vascularTerritoryType = this.vascularTerritoryTypeEnum.None;
    this.resetLocalizer();
    this.resetVascularTerritoryType();
    this.closeError();
  }

  closeError() {
    this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.vascularTerritoryLocations));
  }

  resetVascularTerritoryType() {
    this.model.vascularTerritoryType = VascularTerritoryTypeEnum.None;
    this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.vascularTerritoryType));
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('headMRT.vessels.formDropdownW066').subscribe((out: DropdownModel[]) => {
        this.formDropdown = out;
      }),
      this.translate.stream('headMRT.vessels.whiteMatterDropdownW067').subscribe((out: DropdownModel[]) => {
        this.whiteMatterDropdown = out;
      })
    );
  }

  col4TitleCondition(): boolean {
    if (
      this.model.cortexLocations.parietalLobeRight ||
      this.model.cortexLocations.parietalLobeLeft ||
      this.model.cortexLocations.occipitalLobeRight ||
      this.model.cortexLocations.occipitalLobeLeft ||
      this.model.cortexLocations.temporalLobeRight ||
      this.model.cortexLocations.temporalLobeLeft ||
      this.model.cortexLocations.cerebellum
    ) {
      return false;
    } else {
      return true;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
