import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AcquisitionUiModel } from '@models/headCT/ui/technology/acquisition-ui.model';
import { CenterspecificPreferencesAcquisitionUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-acquisition-ui.model';
import { ReconstructionFindingUiModel } from '@models/headCT/ui/technology/reconstruction-finding-ui.model';

import { ReconstructionTypeEnum } from '@enums/shared/technology/reconstruction-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-head-ct-acquisition',
  templateUrl: './headCT-acquisitions.component.html',
  styleUrls: ['./headCT-acquisitions.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class HeadCTAcquisitionsComponent implements OnInit, OnDestroy {
  @Input() model: AcquisitionUiModel | CenterspecificPreferencesAcquisitionUiModel;
  @Input() cspMode: boolean;
  @Input() reconstructionsHandler: DynamicComponentHandler<ReconstructionFindingUiModel>;
  @Input() disabled: boolean;
  @Input() cmReinforcedType: SimpleAnswerEnum;

  @Input() activeTabIndex = 0;
  @Output() activeTabIndexChange = new EventEmitter<number>();

  @Input() formRef: NgForm;

  @Output() changeInSubcomponent = new EventEmitter();

  investigationTechniquesTypeOptions: DropdownModel[];
  positionTypeOptions: DropdownModel[];
  breathingProtocolTypeOptions: DropdownModel[];

  subscriptions: Subscription[] = [];

  reconstructionHandlerConfig: FindingColumnConfig;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initReconstructionFindingConfig();
    this.initTranslations();
  }

  emitModelChangeInSubcomponent(): void {
    this.changeInSubcomponent.emit();
  }

  onTabChange(index: number): void {
    this.activeTabIndexChange.emit(index);
  }

  isReconstructionFindingContentDisabled(): boolean {
    return (
      this.reconstructionsHandler.currentItem && this.reconstructionsHandler.currentItem.reconstructionType === ReconstructionTypeEnum.None
    );
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared-templates.technology.headCTInvestigationTechniquesType.options').subscribe(out => {
        this.investigationTechniquesTypeOptions = Object.values(out);
      }),
      this.translate.stream('shared-templates.technology.patientPositionType.options').subscribe(out => {
        this.positionTypeOptions = Object.values(out);
      }),
      this.translate.stream('shared-templates.technology.breathingProtocolType.options').subscribe(out => {
        this.breathingProtocolTypeOptions = Object.values(out);
      }),
      this.translate.stream('shared-templates.technology.addNewReconstruction.value').subscribe((out: string) => {
        this.reconstructionHandlerConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.reconstructionHandlerConfig.placeholder = out;
      }),
      this.translate.stream('shared-templates.technology.headCTReconstructionTypeValues.options').subscribe(out => {
        this.reconstructionHandlerConfig.dropdownValues = Object.values(out);
      })
    );
  }

  private initReconstructionFindingConfig(): void {
    this.reconstructionHandlerConfig = new FindingColumnConfig();
    this.reconstructionHandlerConfig.findingType = 'reconstructionType';
    this.reconstructionHandlerConfig.findingColumnIds.buttonRRId = 'uni_xc_030328';
    this.reconstructionHandlerConfig.findingColumnIds.findingRRId = 'uni_xc_030327';
    this.reconstructionHandlerConfig.itemCount = 8;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
