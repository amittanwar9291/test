import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BasalNucleiDiagnosisTypeEnum } from '@enums/headMRT/basal-nuclei';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BasalNucleiFindingUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DominantFindingTypeEnum } from '@enums/headMRT/basal-nuclei/dominant-finding-type.enum';
import { DiffusionRestrictionDiagnoses, T1wSignalEnhancementDiagnoses, T2wSignalEnhancementDiagnoses } from '../pathology-diagnosis-groups';

@Component({
  selector: 'rr-pathology-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PathologyDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  constructor(private translateService: TranslateService) {}

  @Input() model: BasalNucleiFindingUiModel;

  w029: DropdownGroupedModel[];
  w029DiffusionRestriction: DropdownGroupedModel[];
  w029T1wSignalEnhancement: DropdownGroupedModel[];
  w029T2wSignalEnhancement: DropdownGroupedModel[];
  w030: DropdownGroupedModel[];
  w030DiffusionRestriction: DropdownGroupedModel[];
  w030T1wSignalEnhancement: DropdownGroupedModel[];
  w030T2wSignalEnhancement: DropdownGroupedModel[];

  subscriptions: Subscription[] = [];

  differentialDiagnosisType = BasalNucleiDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  dominantFindingType = DominantFindingTypeEnum;

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headMRT.basalNuclei.w029').subscribe((out: DropdownGroupedModel[]) => {
        this.w029 = out;
      }),
      this.translateService.stream('headMRT.basalNuclei.w029DiffusionRestriction').subscribe((out: DropdownGroupedModel[]) => {
        this.w029DiffusionRestriction = out;
      }),
      this.translateService.stream('headMRT.basalNuclei.w029T1wSignalEnhancement').subscribe((out: DropdownGroupedModel[]) => {
        this.w029T1wSignalEnhancement = out;
      }),
      this.translateService.stream('headMRT.basalNuclei.w029T2wSignalEnhancement').subscribe((out: DropdownGroupedModel[]) => {
        this.w029T2wSignalEnhancement = out;
      }),
      this.translateService.stream('headMRT.basalNuclei.w030').subscribe((out: DropdownGroupedModel[]) => {
        this.w030 = out;
      }),
      this.translateService.stream('headMRT.basalNuclei.w030DiffusionRestriction').subscribe((out: DropdownGroupedModel[]) => {
        this.w030DiffusionRestriction = out;
      }),
      this.translateService.stream('headMRT.basalNuclei.w030T1wSignalEnhancement').subscribe((out: DropdownGroupedModel[]) => {
        this.w030T1wSignalEnhancement = out;
      }),
      this.translateService.stream('headMRT.basalNuclei.w030T2wSignalEnhancement').subscribe((out: DropdownGroupedModel[]) => {
        this.w030T2wSignalEnhancement = out;
      })
    );
  }

  getDDOptions(isDD01?: boolean): DropdownGroupedModel[] {
    switch (this.model.dominantFindingType) {
      case DominantFindingTypeEnum.DiffusionRestriction:
        return isDD01 ? this.w029DiffusionRestriction : this.w030DiffusionRestriction;
      case DominantFindingTypeEnum.T1wSignalEnhancement:
        return isDD01 ? this.w029T1wSignalEnhancement : this.w030T1wSignalEnhancement;
      case DominantFindingTypeEnum.T2wSignalEnhancement:
        return isDD01 ? this.w029T2wSignalEnhancement : this.w030T2wSignalEnhancement;
      default:
        return isDD01 ? this.w029 : this.w030;
    }
  }

  clearDDLCheckboxes() {
    this.model.isSuspicionOf = false;
    this.clearSubordinateCheckbox();
  }

  clearSubordinateCheckbox() {
    this.model.isSubordinate = false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
