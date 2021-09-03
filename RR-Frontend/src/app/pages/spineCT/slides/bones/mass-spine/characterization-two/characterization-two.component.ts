import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AdjacentSclerosisTypeEnum } from '@enums/spineCT/bones/mass-spine/adjacent-sclerosis-type.enum';
import { CalcificationTypeEnum } from '@enums/spineCT/bones/mass-spine/calcification-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/spineCT/bones/mass-spine/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/spineCT/myelon/homogeneity-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/spineCT';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { BonesHelperService } from '../../bones-helper.service';
import { BonesDiagnosisTypeEnum } from '@enums/spineCT/bones/bones-diagnosis-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/spineCT/bones/mass-spine/contrast-enhancement-distribution-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['../mass-spine.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  w024: DropdownModel[];
  subscriptions: Subscription[] = [];

  calcificationTypeEnum = CalcificationTypeEnum;
  adjacentSclerosisTypeEnum = AdjacentSclerosisTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  isCMYes: boolean;

  constructor(private translate: TranslateService, private bonesHelperService: BonesHelperService) {}

  ngOnInit(): void {
    this.initTranslations();
    this.subscriptions.push(this.bonesHelperService.isCMYes.subscribe(v => (this.isCMYes = v)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('spineCT.bones.W024.options').subscribe((out: DropdownModel[]) => {
        this.w024 = Object.values(out);
      })
    );
  }

  resetDependField() {
    this.model.contrastEnhancementDistribution = ContrastEnhancementDistributionTypeEnum.None;
  }
}
