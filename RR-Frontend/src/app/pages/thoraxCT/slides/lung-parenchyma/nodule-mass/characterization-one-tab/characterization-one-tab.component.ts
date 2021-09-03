import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HistologyKnownTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/histology-known-type.enum';
import { LungParenchymaLocalizationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-localization-type.enum';
import { LocalizationDetailsTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/localization-details-type.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { PerifissuralNodulusTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/perifissural-nodulus-type.enum';
import { LungParenchymaDensityTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-density-type.enum';
import { SubsolidTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/subsolid-type.enum';
import { HomogeneityTypeEnum } from '@enums/thoraxCT/common/homogeneity-type.enum';
import { LungParenchymaFindingTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-finding-type.enum';
import { AppConfig } from '../../../../../../app.config';
import { LungParenchymaCalcificationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-calcification-type.enum';
import { LungParenchymaHelperService, LungParenchymaLargeLocalizerConfig } from '../../lung-parenchyma-helper.service';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { LungsSegmentsModel } from '@models/thoraxCT/ui/thorax/lungs-segments.model';
import { MarginTypeEnum } from '@enums/thoraxCT/common/margin-type.enum';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

@Component({
  selector: 'rr-characterization-one-tab',
  templateUrl: './characterization-one-tab.component.html',
  styleUrls: ['./characterization-one-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneTabComponent implements OnInit, OnDestroy {
  @Input() model: LungParenchymaFindingUiModel;
  subscriptions: Subscription[] = [];

  ddW019: DropdownGroupedModel[];
  ddW021: DropdownModel[];
  ddW022: DropdownGroupedModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  histologyKnownTypeEnum = HistologyKnownTypeEnum;
  lungParenchymaLocalizationTypeEnum = LungParenchymaLocalizationTypeEnum;
  localizationDetailsTypeEnum = LocalizationDetailsTypeEnum;
  perifissuralNodulusTypeEnum = PerifissuralNodulusTypeEnum;
  lungParenchymaDensityTypeEnum = LungParenchymaDensityTypeEnum;
  subsolidTypeEnum = SubsolidTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  lungParenchymaFindingTypeEnum = LungParenchymaFindingTypeEnum;
  lungParenchymaCalcificationTypeEnum = LungParenchymaCalcificationTypeEnum;

  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_05_001',
    'uni_05_002',
    'uni_05_003',
    'uni_05_004',
    'uni_05_005',
    'uni_05_006',
    'uni_05_007'
  );

  constructor(
    private translate: TranslateService,
    private lungParenchymaHelperService: LungParenchymaHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungParenchyma.ddW019.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW019 = Object.values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungParenchyma.ddW021.options').subscribe((out: DropdownModel[]) => {
        this.ddW021 = Object.values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungParenchyma.ddW022.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW022 = Object.values(out);
      })
    );
    this.subscriptions.push(this.lungParenchymaHelperService.largeLocalizerOpen.subscribe(() => this.onLargeLocalizerClose()));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  clearIsSubordinated() {
    this.model.isSubordinated = false;
  }

  openLargeLocalizer(whichLocalizer: 'segments' | 'flaps', modelPropName: string) {
    this.lungParenchymaHelperService.largeLocalizerOpen.next(new LungParenchymaLargeLocalizerConfig(whichLocalizer, true, modelPropName));
  }

  clearLocalizer(whichLocalizer: 'segments' | 'flaps') {
    if (whichLocalizer === 'segments') {
      this.model.mainCharacteristicsLungsSegmentsLocation = new LungsSegmentsModel();
      this.checkLocalizersValue();
      this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsSegmentsLocation));
    }
    if (whichLocalizer === 'flaps') {
      this.model.mainCharacteristicsLungsFlapsLocation = new LungsFlapsModel();
      this.checkLocalizersValue();
      this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsFlapsLocation));
    }
  }

  private onLargeLocalizerClose() {
    this.checkLocalizersValue();
    this.checkLocalizersErrors();
  }

  private checkLocalizersValue() {
    if (
      !this.isRightSideOnFlapsOrSegmentsLocalizersSelected() &&
      this.model.localizationDetailsType === LocalizationDetailsTypeEnum.AtTheMinorOrHorizontalFissure
    ) {
      this.model.localizationDetailsType = LocalizationDetailsTypeEnum.None;
    }
  }

  isRightSideOnFlapsOrSegmentsLocalizersSelected(): boolean {
    return this.isRightSideOnFlapsLocalizerSelected() || this.isRightSideOnSegmentsLocalizerSelected();
  }

  isRightSideOnFlapsLocalizerSelected(): boolean {
    return (
      this.model.mainCharacteristicsLungsFlapsLocation.rightOL ||
      this.model.mainCharacteristicsLungsFlapsLocation.rightML ||
      this.model.mainCharacteristicsLungsFlapsLocation.rightUL
    );
  }

  isRightSideOnSegmentsLocalizerSelected(): boolean {
    const segmentsLocation = this.model.mainCharacteristicsLungsSegmentsLocation;
    return (
      segmentsLocation.rightS1 ||
      segmentsLocation.rightS2 ||
      segmentsLocation.rightS3 ||
      segmentsLocation.rightS4 ||
      segmentsLocation.rightS5 ||
      segmentsLocation.rightS6 ||
      segmentsLocation.rightS7 ||
      segmentsLocation.rightS8 ||
      segmentsLocation.rightS9 ||
      segmentsLocation.rightS10
    );
  }

  private checkLocalizersErrors() {
    if (this.enumMapper.mapToString(this.model.mainCharacteristicsLungsFlapsLocation) !== 'None') {
      this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsFlapsLocation));
    }
    if (this.enumMapper.mapToString(this.model.mainCharacteristicsLungsSegmentsLocation) !== 'None') {
      this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsSegmentsLocation));
    }
  }

  getDetailLocalisationExcludedOption(): string[] {
    return !this.isRightSideOnFlapsOrSegmentsLocalizersSelected() ? [LocalizationDetailsTypeEnum.AtTheMinorOrHorizontalFissure] : [];
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.thoraxCT.lungParenchyma.fileUpload;
  }
}
