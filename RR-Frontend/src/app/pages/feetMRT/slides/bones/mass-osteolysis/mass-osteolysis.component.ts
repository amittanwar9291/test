import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesHelperService } from '../bones-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-mass-osteolysis',
  templateUrl: './mass-osteolysis.component.html',
  styleUrls: ['./mass-osteolysis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassOsteolysisComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  activeTabIndex = 0;

  differentialDiagnosisTumor01: DropdownModel[];
  differentialDiagnosisTumor0203: DropdownModel[];

  largeLocalizerOpenSubscription: Subscription;
  localizationSideSubsription: Subscription;
  side: 'right' | 'left';

  subscriptions: Subscription[];

  constructor(
    private translate: TranslateService,
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {
    this.localizationSideSubsription = this.bonesHelperService.localizationSide.subscribe(value => (this.side = value as 'right' | 'left'));
    this.subscriptions = [];
  }

  ngOnInit() {
    this.initTranslations();
    this.largeLocalizerOpenSubscription = this.bonesHelperService.largeLocalizerOpen.subscribe(() => {
      if (this.enumMapper.mapToString(this.model.threeDimensionalLocalization) !== 'None') {
        this.validationHelperService.removeError('threeDimensionalLocalization');
      }
    });
  }

  // propably to be deleted
  setActiveTabIndex(activeIndex: number) {
    this.activeTabIndex = activeIndex;
  }

  onTabChange(event) {}

  ngOnDestroy(): void {
    this.localizationSideSubsription.unsubscribe();
    this.largeLocalizerOpenSubscription.unsubscribe();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translate.stream('feetMRT.bones.differentialDiagnosis01Array.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisTumor01 = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('feetMRT.bones.differentialDiagnosis0203Array.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisTumor0203 = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
