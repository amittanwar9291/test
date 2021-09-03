import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { ConsolidationLocalizationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/consolidation-localization-type.enum';
import { GroundGlassOpacityTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/ground-glass-opacity-type.enum';
import { LocalizationAxialTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/localization-axial-type.enum';
import { MorphologyTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/morphology-type.enum';
import { WellDefinedTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/well-defined-type.num';
import { HomogeneityTypeEnum } from '@enums/thoraxCT/common/homogeneity-type.enum';
import { LungParenchymaHelperService, LungParenchymaLargeLocalizerConfig } from '../../lung-parenchyma-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';
import { LungsSegmentsModel } from '@models/thoraxCT/ui/thorax/lungs-segments.model';
import { LungParenchymaDiagnosisTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-diagnosis-type.enum';
import { MarginTypeEnum } from '@enums/thoraxCT/common/margin-type.enum';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';

@Component({
  selector: 'rr-consolidation-characterization-one-tab',
  templateUrl: './consolidation-characterization-one-tab.component.html',
  styleUrls: ['./consolidation-characterization-one-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ConsolidationCharacterizationOneTabComponent implements OnInit, OnDestroy {
  @Input() model: LungParenchymaFindingUiModel;
  subscriptions: Subscription[] = [];
  differentialDiagnosisW024: DropdownModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  consolidationLocalizationTypeEnum = ConsolidationLocalizationTypeEnum;
  groundGlassOpacityTypeEnum = GroundGlassOpacityTypeEnum;
  localizationAxialTypeEnum = LocalizationAxialTypeEnum;
  morphologyTypeEnum = MorphologyTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  wellDefinedTypeEnum = WellDefinedTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;

  constructor(
    private translate: TranslateService,
    private lungParenchymaHelperService: LungParenchymaHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungParenchyma.ddW024.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisW024 = Object.values(out);
      })
    );
    this.subscriptions.push(this.lungParenchymaHelperService.largeLocalizerOpen.subscribe(() => this.checkLocalizersErrors()));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  clearDifferentialDiagnosisCheckboxes() {
    this.model.isSubordinated = false;
    this.model.isSuspected = false;
  }

  openLargeLocalizer(whichLocalizer: 'segments' | 'flaps', modelPropName: string) {
    this.lungParenchymaHelperService.largeLocalizerOpen.next(new LungParenchymaLargeLocalizerConfig(whichLocalizer, false, modelPropName));
  }

  clearSegmentalLocalizer() {
    this.model.mainCharacteristicsLungsSegmentsLocation = new LungsSegmentsModel();
    this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsSegmentsLocation));
  }

  clearFlapsLocalizer() {
    this.model.mainCharacteristicsLungsFlapsLocation = new LungsFlapsModel();
    this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsFlapsLocation));
  }

  private checkLocalizersErrors() {
    if (this.enumMapper.mapToString(this.model?.mainCharacteristicsLungsFlapsLocation) !== 'None') {
      this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsFlapsLocation));
    }
    if (this.enumMapper.mapToString(this.model?.mainCharacteristicsLungsSegmentsLocation) !== 'None') {
      this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsSegmentsLocation));
    }
  }
}
