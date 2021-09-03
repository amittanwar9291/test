import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { ArterialTerritoryTypeEnum } from '@enums/headCT/vessels/ischemia/arterial-territory-type.enum';
import { nameof } from 'ts-simple-nameof';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ArterialSupplyAreaPatternTypeEnum } from '@enums/headCT/vessels/ischemia/arterial-supply-area-pattern-type.enum';
import { ArterialTerritoriesLocalizerModel } from '@models/headMRT/ui/arterial-territories-localizer.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { VascularTerritoryTypeEnum } from '@enums/headCT/vessels/ischemia/vascular-territory-type.enum';
import { DetailsTypeEnum } from '@enums/headCT/vessels/details-type.enum';
import { HeadCTVesselsLocalizersTypeEnum } from '@enums/headCT/vessels/headCT-vessels-localizers-type.enum';
import { VesselsHelperService } from '../../vessels-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Component({
  selector: 'rr-ischemia-localization-tab',
  templateUrl: './ischemia-localization-tab.component.html',
  styleUrls: ['./ischemia-localization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IschemiaLocalizationTabComponent implements OnInit, OnDestroy {
  @Input() model: VesselsFindingUiModel;
  w011: DropdownModel[];
  w012: DropdownModel[];
  subscriptions: Subscription[] = [];

  drainageAreasCheckboxesValidation = [
    nameof<VesselsFindingUiModel>(m => m.isCorticalVeins),
    nameof<VesselsFindingUiModel>(m => m.isInternalCerebralVeins),
    nameof<VesselsFindingUiModel>(m => m.isRightVeinOfLabbe),
    nameof<VesselsFindingUiModel>(m => m.isLeftVeinOfLabbe),
    nameof<VesselsFindingUiModel>(m => m.isRightSphenoparietalSinus),
    nameof<VesselsFindingUiModel>(m => m.isLeftSphenoparietalSinus)
  ].join(' ');

  arterialTerritoryTypeEnum = ArterialTerritoryTypeEnum;
  arterialSupplyAreaPatternTypeEnum = ArterialSupplyAreaPatternTypeEnum;
  vascularTerritoryTypeEnum = VascularTerritoryTypeEnum;
  detailsTypeEnum = DetailsTypeEnum;
  headCTVesselsLocalizersTypeEnum = HeadCTVesselsLocalizersTypeEnum;

  constructor(
    private translate: TranslateService,
    private validationHelperService: ValidationHelperService,
    private vesselsHelperService: VesselsHelperService,
    private enumMapper: EnumMapper
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('headCT.vessels.w011.options').subscribe((out: DropdownModel[]) => (this.w011 = out)),
      this.translate.stream('headCT.vessels.w012.options').subscribe((out: DropdownModel[]) => (this.w012 = out)),
      this.vesselsHelperService.openLocalizer.subscribe(() => this.onLargeLocalizerClose())
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  checkAndClearArterialTerritoryDependantFields() {
    const condition1 = this.model.arterialTerritoryType !== ArterialTerritoryTypeEnum.VenousVascularTerritories;
    const condition2 = this.model.arterialSupplyAreaPatternType !== ArterialSupplyAreaPatternTypeEnum.TypicalAreasOfInfarction;
    const condition3 = this.model.arterialSupplyAreaPatternType !== ArterialSupplyAreaPatternTypeEnum.RareTerritorialInfarcts;

    if (condition1 || condition2) {
      this.model.vascularTerritoryLocation = new ArterialTerritoriesLocalizerModel();
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.vascularTerritoryLocation));
    }
    if (condition3) {
      this.model.vascularTerritoryType = VascularTerritoryTypeEnum.None;
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.vascularTerritoryType));
    }
  }

  openLargeLocalizer(localizerType: HeadCTVesselsLocalizersTypeEnum) {
    this.vesselsHelperService.openLocalizer.next(localizerType);
  }

  isParietalLobe(): boolean {
    return this.model.cortexLocation.parietalLobeRight || this.model.cortexLocation.parietalLobeLeft;
  }

  isOccipitalLobe(): boolean {
    return this.model.cortexLocation.occipitalLobeRight || this.model.cortexLocation.occipitalLobeLeft;
  }

  isTemporalLobe(): boolean {
    return this.model.cortexLocation.temporalLobeRight || this.model.cortexLocation.temporalLobeLeft;
  }

  isCerebellum(): boolean {
    return this.model.cortexLocation.cerebellum;
  }

  isNoLocalizerSelection() {
    return !this.isParietalLobe() && !this.isOccipitalLobe() && !this.isTemporalLobe() && !this.isCerebellum();
  }

  private onLargeLocalizerClose() {
    // for vascularTerritoryLocation
    if (this.enumMapper.mapToString(this.model.vascularTerritoryLocation) !== 'None') {
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.vascularTerritoryLocation));
    }

    // for cortexLocation
    if (!this.isParietalLobe()) {
      this.model.isPraecuneus = false;
    }
    if (!this.isOccipitalLobe()) {
      this.model.isCuneus = false;
      this.model.isLingualGyrus = false;
    }
    if (!this.isTemporalLobe()) {
      this.model.isGyrusTemporalisTransversus = false;
      this.model.isLateralOccipitotemporalGyrus = false;
    }
    if (!this.isCerebellum()) {
      this.model.isParsIntermedia = false;
      this.model.isSuperiorCerebellarPeduncle = false;
      this.model.isMiddleCerebellarPeduncle = false;
      this.model.isInferiorCerebellarPeduncle = false;
    }
  }
}
