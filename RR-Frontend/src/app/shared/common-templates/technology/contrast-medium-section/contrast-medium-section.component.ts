import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SideEffectUiBaseModel } from '@models/shared/newTechnology/ui/side-effect-ui-base.model';
import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';

import { LoggingService } from '@services/shared';

import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { TechnologyCtBaseUiModel } from '@models/shared/newTechnology/ui/technology-ct-base-ui.model';
import { AcquisitionUiBaseModel } from '@models/shared/newTechnology/ui/acquisition-ui-base.model';
import { ReconstructionUiBaseModel } from '@models/shared/newTechnology/ui/reconstruction-ui-base.model';

type mrtModel = TechnologyMrtBaseUiModel<SequenceUiBaseModel>;
type ctModel = TechnologyCtBaseUiModel<AcquisitionUiBaseModel<ReconstructionUiBaseModel>, ReconstructionUiBaseModel>;

@Component({
  selector: 'rr-contrast-medium-section',
  templateUrl: './contrast-medium-section.component.html',
  styleUrls: ['./contrast-medium-section.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ContrastMediumSectionComponent implements OnInit, OnDestroy {
  @Input() model: ctModel | mrtModel; // TODO check if passing this generic is necessary
  @Input() isHandMRT: boolean;
  @Input() isCTModule: boolean;
  @Input() scrollHeight = '220px';
  @Input() customActiveSubstanceTranslation: string;

  sideEffectsHandlerRef: DynamicComponentHandler<SideEffectUiBaseModel>;
  activeSubstanceOptions: DropdownModel[];
  contrastMediumConcentration: DropdownModel[];
  subscriptions: Subscription[] = [];

  simpleAnswerType: typeof SimpleAnswerEnum;

  constructor(private logger: LoggingService, private translate: TranslateService, private technologyService: SideEffectsSectionService) {
    this.simpleAnswerType = SimpleAnswerEnum;
  }

  ngOnInit(): void {
    this.sideEffectsHandlerRef = new DynamicComponentHandler(this.logger, this.model.cmSideEffects, SideEffectUiBaseModel);
    this.initTranslations();
    this.initStreams();
  }

  isSideEffectsColumnDisabled(): boolean {
    return this.sideEffectsHandlerRef ? this.sideEffectsHandlerRef.currentItem.cmSideEffectType === 'None' : null;
  }

  initStreams(): void {
    this.subscriptions.push(
      this.technologyService.getHandlerReinitializeStream().subscribe(out => {
        this.sideEffectsHandlerRef.reinitializeCollection(out);
      }),
      this.technologyService.getSideEffectsDeletedItemsRemovalStream().subscribe(out => {
        this.sideEffectsHandlerRef.collectionPostSaveCleanup(out);
      }),
      this.technologyService.getPreSaveCleanupStream().subscribe(() => {
        this.sideEffectsHandlerRef.collectionPreSaveCleanup();
      }),
      this.technologyService.getContrastEnhancedStream().subscribe(() => {
        this.clearContrastMediumSection();
        this.clearSideEffectAndTherapySections();
      })
    );
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate
        .stream(
          this.customActiveSubstanceTranslation
            ? this.customActiveSubstanceTranslation
            : 'shared-templates.technology.activeSubstanceOptions.options'
        )
        .subscribe((out: DropdownModel[]) => {
          this.activeSubstanceOptions = Object.values(out);
        }),
      this.translate
        .stream('shared-templates.technology.activeSubstanceIodineConcentrationOptions.options')
        .subscribe((out: DropdownModel[]) => {
          this.contrastMediumConcentration = Object.values(out);
        })
    );
  }

  private clearContrastMediumSection(): void {
    const mrtModule = this.model as mrtModel;
    const ctModule = this.model as ctModel;
    this.model.isCMSideEffect = false;
    mrtModule.contrastMediumType = 'None';
    mrtModule.contrastQuantity = null;
    ctModule.iodineConcentrationType = 'None';
    ctModule.contrastVolumeInMl = null;
  }

  // triggered by checkbox "uni_x_030301"
  clearSideEffectAndTherapySections(): void {
    if (!this.model.isCMSideEffect) {
      this.clearSideEffectsSection();
      this.clearTherapySection();
    }
  }

  private clearSideEffectsSection(): void {
    this.sideEffectsHandlerRef.deleteAllElements();
  }

  private clearTherapySection(): void {
    if (!this.model.isCMSideEffect) {
      this.model.isH1BlockerIV = false;
      this.model.isH2BlockerIV = false;
      this.model.isCortisoneIV = false;
      this.model.isO2Administration = false;
      this.model.isSubcutaneousEpinephrine = false;
      this.model.isNotFurtherSpecified = false;
      this.model.barcodeCMCharge = null;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
