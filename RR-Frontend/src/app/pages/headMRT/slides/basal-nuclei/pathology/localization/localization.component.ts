import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BasalNucleiDiagnosisTypeEnum } from '@enums/headMRT/basal-nuclei';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BasalNucleiFindingUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BasalNucleiHelperService } from '../../basal-nuclei-helper.service';
import { DominantFindingTypeEnum } from '@enums/headMRT/basal-nuclei/dominant-finding-type.enum';
import { HistologyKnownTypeEnum } from '@enums/headMRT/common/histology-known-type.enum';
import { DiffusionRestrictionDiagnoses, T1wSignalEnhancementDiagnoses, T2wSignalEnhancementDiagnoses } from '../pathology-diagnosis-groups';

@Component({
  selector: 'rr-pathology-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PathologyLocalizationComponent implements OnInit, OnDestroy {
  constructor(private translateService: TranslateService, private basalNucleiHelperService: BasalNucleiHelperService) {}

  @Input() model: BasalNucleiFindingUiModel;

  w029: DropdownGroupedModel[];
  w029DiffusionRestriction: DropdownGroupedModel[];
  w029T1wSignalEnhancement: DropdownGroupedModel[];
  w029T2wSignalEnhancement: DropdownGroupedModel[];

  subscriptions: Subscription[] = [];

  differentialDiagnosisType = BasalNucleiDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  knownHistologyType = HistologyKnownTypeEnum;

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
      })
    );
  }

  openLargeLocalizer() {
    this.basalNucleiHelperService.isLargeLocalizerOpen.next(true);
  }

  getDD01Options(): DropdownGroupedModel[] {
    switch (this.model.dominantFindingType) {
      case DominantFindingTypeEnum.DiffusionRestriction:
        return this.w029DiffusionRestriction;
      case DominantFindingTypeEnum.T1wSignalEnhancement:
        return this.w029T1wSignalEnhancement;
      case DominantFindingTypeEnum.T2wSignalEnhancement:
        return this.w029T2wSignalEnhancement;
      default:
        return this.w029;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
