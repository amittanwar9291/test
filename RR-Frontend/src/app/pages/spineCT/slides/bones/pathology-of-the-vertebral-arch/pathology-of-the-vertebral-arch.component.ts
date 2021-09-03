import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/spineCT/ui/bones/bones-finding-ui.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SideTypeEnum } from '@enums/spineCT/bones/side-type-enum';
import { LocalizationVertebralArchTypeEnum } from '@enums/spineCT/bones/pathology-of-the-vertebral-arch/localization-vertebral-arch-type.enum';
import { BonesLargeLocalizerConfig } from '@models/spineCT/ui/bones/bones-large-localizer-config.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { BonesHelperService } from '../bones-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';
import { BonesDiagnosisTypeEnum } from '@enums/spineCT/bones/bones-diagnosis-type.enum';

@Component({
  selector: 'rr-spine-ct-pathology-of-the-vertebral-arch',
  templateUrl: './pathology-of-the-vertebral-arch.component.html',
  styleUrls: ['./pathology-of-the-vertebral-arch.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class PathologyOfTheVertebralArchComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter();

  differentialDiagnosis: DropdownModel[];
  subscriptions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;

  sideTypeEnum = SideTypeEnum;
  localizationVertebralArchTypeEnum = LocalizationVertebralArchTypeEnum;
  bonesDiagnosisTypeEnum = BonesDiagnosisTypeEnum;

  constructor(
    private translate: TranslateService,
    private spineHelperService: SpineCtHelperService,
    private bonesHelperService: BonesHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit() {
    this.initTranslations();
    this.subscriptions.push(
      this.spineHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v)),
      this.bonesHelperService.largeLocalizerConfig.subscribe(() => this.onLocalizerClosed())
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translate.stream('spineCT.bones.W021.options').subscribe(out => {
        this.differentialDiagnosis = out;
      })
    );
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerConfig.next(
      new BonesLargeLocalizerConfig(
        this.model.vertebraSpineLocations,
        SpineLocationLogicTypeEnum.VertebreEach,
        SpineSelectionAccessibilityModeEnum.C0toOsCoccygis,
        'spineCT.bones.localization.value',
        'spineCT.bones.interventionSpineDescription.value'
      )
    );
  }

  onLocalizerClosed() {
    if (compact(Object.values(this.model.vertebraSpineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.vertebraSpineLocations));
    }
  }

  clearIsSuspicionOf() {
    this.model.isSuspicionOf = false;
  }
}
