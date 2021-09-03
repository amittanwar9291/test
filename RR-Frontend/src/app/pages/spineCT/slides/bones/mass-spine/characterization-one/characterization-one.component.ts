import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/spineCT';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { Subscription } from 'rxjs';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { BonesLargeLocalizerConfig } from '@models/spineCT/ui/bones/bones-large-localizer-config.model';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { MarginTypeEnum } from '@enums/spineCT/bones/mass-spine/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/spineCT/bones/mass-spine/homogeneity-type-enum';
import { CortexTypeEnum } from '@enums/spineCT/bones/mass-spine/cortex-type.enum';
import { FormTypeEnum } from '@enums/spineCT/bones/mass-spine/form-type.enum';
import { MassSpineDensityTypeEnum } from '@enums/spineCT/bones/mass-spine/mass-spine-density-type.enum';
import { MatrixTypeEnum } from '@enums/spineCT/bones/mass-spine/matrix-type.enum';
import { compact } from 'lodash';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';
import { BonesHelperService } from '../../bones-helper.service';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  differentialDiagnosisW022: DropdownModel[];
  subscriptions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;

  descriptionType = DescriptionTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  cortexTypeEnum = CortexTypeEnum;
  formTypeEnum = FormTypeEnum;
  massSpineDensityTypeEnum = MassSpineDensityTypeEnum;
  matrixTypeEnum = MatrixTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;

  constructor(
    private translate: TranslateService,
    private spineHelperService: SpineCtHelperService,
    private bonesHelperService: BonesHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.initTranslations();
    this.subscriptions.push(
      this.spineHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v)),
      this.bonesHelperService.largeLocalizerConfig.subscribe(() => this.onLocalizerClosed())
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('spineCT.bones.W022.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisW022 = out;
      })
    );
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerConfig.next(
      new BonesLargeLocalizerConfig(
        this.model.spineLocation,
        SpineLocationLogicTypeEnum.OneVertebre,
        SpineSelectionAccessibilityModeEnum.C0toOsCoccygis,
        'spineCT.bones.localization.value',
        'spineCT.bones.pleaseSelectAVertebraSingleChoice.value'
      )
    );
  }

  onLocalizerClosed() {
    if (compact(Object.values(this.model.spineLocation)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocation));
    }
  }

  resetDependField() {
    if (this.model.expansionMaxDiameterInMm === null) {
      this.model.expansion2ndPlaneInMm = null;
      this.model.expansion3rdPlaneInMm = null;
    }
    if (this.model.expansion2ndPlaneInMm === null) {
      this.model.expansion3rdPlaneInMm = null;
    }
  }

  clearDD2Subordinate() {
    this.model.isDD2Subordinate = false;
  }
}
