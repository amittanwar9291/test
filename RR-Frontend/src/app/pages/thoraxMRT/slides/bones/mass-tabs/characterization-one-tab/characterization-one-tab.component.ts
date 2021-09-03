import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { ThoraxMRTBonesFindingTypeEnum } from '@enums/thoraxMRT/bones/thorax-mrt-bones-finding-type.enum';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HistologyKnownTypeEnum } from '@enums/thoraxMRT/bones/histology-known-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { MarginTypeEnum } from '@enums/thoraxMRT/bones/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/thoraxMRT/bones/homogeneity-type.enum';
import { CorticalBoneEnum } from '@enums/thoraxMRT/bones/mass/cortical-bone.enum';
import { MassShapeTypeEnum } from '@enums/thoraxMRT/bones/mass/mass-shape-type.enum';
import { MatrixTypeEnum } from '@enums/thoraxMRT/bones/mass/matrix-type.enum';
import { BonesHelperService, ThoraxMRTBonesSpineLocalizerConfig } from '../../bones-helper.service';
import { compact } from 'lodash';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { DiscGeneralLocationModel } from '@models/shared/spine/localizers/disc-general-location.model';

@Component({
  selector: 'rr-characterization-one-tab',
  templateUrl: './characterization-one-tab.component.html',
  styleUrls: ['./characterization-one-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneTabComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  subscriptions: Subscription[] = [];
  differentialDiagnosisW036Options: DropdownGroupedModel[];

  findingTypeEnum = ThoraxMRTBonesFindingTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  histologyKnownTypeEnum = HistologyKnownTypeEnum;
  locationTypeEnum = LocationTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  corticalBoneEnum = CorticalBoneEnum;
  massShapeTypeEnum = MassShapeTypeEnum;
  matrixTypeEnum = MatrixTypeEnum;
  spineSelectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;

  constructor(
    private translate: TranslateService,
    private bonesHelperService: BonesHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.initSubscriptions();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  initSubscriptions() {
    this.subscriptions.push(
      this.translate.stream('thoraxMRT.bones.differentialDiagnosisW036.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisW036Options = out;
      })
    );
    this.subscriptions.push(
      this.bonesHelperService.ribsLocalizerConfig.subscribe(() => {
        if (compact(Object.values(this.model.ribLocalization)).length > 0) {
          this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.ribLocalization));
        }
      })
    );
    this.subscriptions.push(
      this.bonesHelperService.spineLocalizerConfig.subscribe(() => {
        if (this.isSpineLocalizationSelected()) {
          this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocalization));
        } else {
          this.model.vertebralBodyLocalization = new DiscGeneralLocationModel();
        }
      })
    );
  }

  isFinding(findingTypes: ThoraxMRTBonesFindingTypeEnum[]): boolean {
    return findingTypes.includes(this.model.findingType);
  }

  isSpinalMass() {
    return this.isFinding([this.findingTypeEnum.SpinalMass]);
  }

  isSpineLocalizationSelected(): boolean {
    return compact(Object.values(this.model.spineLocalization)).length > 0;
  }

  onExtensionSizeChange() {
    this.model.extensionSecondPlane = null;
    this.model.extensionThirdPlane = null;
  }

  onExtensionSecondPlaneChange() {
    this.model.extensionThirdPlane = null;
  }

  onDiffDiagnosisSelectionChange() {
    this.model.isDiagnosisSuspected = false;
    this.model.isSubordinate = false;
  }

  openLargeRibsLocalizer() {
    this.bonesHelperService.ribsLocalizerConfig.next({ isSingleSelect: true, descriptionRrid: 'tho_m_070116' });
  }

  openLargeSpineLocalizer() {
    this.bonesHelperService.spineLocalizerConfig.next(
      new ThoraxMRTBonesSpineLocalizerConfig(
        SpineLocationLogicTypeEnum.OneVertebre,
        SpineSelectionAccessibilityModeEnum.C3toL5,
        'thoraxMRT.bones.selectVertebralBodySingleSelection.value'
      )
    );
  }
}
