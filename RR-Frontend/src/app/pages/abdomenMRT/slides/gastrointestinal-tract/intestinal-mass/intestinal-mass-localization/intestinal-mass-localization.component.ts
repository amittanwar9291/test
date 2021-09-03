import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { GastrointestinalDifferentialDiagnosisTypeEnum, HistologyKnownTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/common';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
@Component({
  selector: 'rr-intestinal-mass-localization',
  templateUrl: './intestinal-mass-localization.component.html',
  styleUrls: ['./intestinal-mass-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IntestinalMassLocalizationComponent implements OnInit, OnDestroy {
  @Input() model: GastrointestinalTractFindingUiModel;

  subscriptions: Subscription[] = [];
  desctiptionType = DescriptionTypeEnum;
  differentialDiagnosisType = GastrointestinalDifferentialDiagnosisTypeEnum;
  differentialDiagnosisOptions: DropdownGroupedModel[];
  histologyKnownType = HistologyKnownTypeEnum;

  localizationCheckboxes = [
    nameof<GastrointestinalTractFindingUiModel>(m => m.isDuodenum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isJejunum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isIleum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isCecum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isVermiformAppendix),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isAscendingColon),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isHepaticFlexure),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isTransverseColon),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isSplenicFlexure),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isDescendingColon),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isSigmoidColon),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isRectumUpperThird),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isRectumMiddleThird),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isRectumLowerThird),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isAnalCanal)
  ];

  get isLocalizationChecked() {
    return this.localizationCheckboxes.some(name => this.model[name] !== false);
  }

  constructor(private translateService: TranslateService) {}
  ngOnInit() {
    this.initTranslations();
  }
  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService
        .stream('abdomenMRT.gastrointestinal.w040IntestianlMassDD1.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.differentialDiagnosisOptions = out))
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  resetDiffDiagnosisDependent() {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.isSubordinate = false;
  }
}
