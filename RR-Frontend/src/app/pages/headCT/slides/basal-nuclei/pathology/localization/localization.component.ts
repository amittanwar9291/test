import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BasalNucleiFindingUiModel } from '@models/headCT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BasalNucleiHelperService } from '../../basal-nuclei-helper.service';
import { HistologyKnownTypeEnum } from '@enums/headCT/common/histology-known-type.enum';
import { BasalNucleiDiagnosisTypeEnum } from '@enums/headCT/basal-nuclei/basal-nuclei-diagnosis-type.enum';
import { DistributionTypeEnum } from '@enums/headCT/common/distribution-type.enum';

@Component({
  selector: 'rr-pathology-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PathologyLocalizationComponent implements OnInit, OnDestroy {
  constructor(private translateService: TranslateService, private basalNucleiHelperService: BasalNucleiHelperService) {}

  @Input() model: BasalNucleiFindingUiModel;

  differentialDiagnosisOptions: DropdownGroupedModel[];

  subscriptions: Subscription[] = [];

  differentialDiagnosisType = BasalNucleiDiagnosisTypeEnum;
  descriptionType = DescriptionTypeEnum;
  knownHistologyType = HistologyKnownTypeEnum;
  distributionType = DistributionTypeEnum;

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headCT.basalNuclei.differentialDiagnosis01.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisOptions = out;
      })
    );
  }

  resetDifferentialDiagnosis(): void {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.isSubordinate = false;
  }

  openLargeLocalizer() {
    this.basalNucleiHelperService.isLargeLocalizerOpen.next(true);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
