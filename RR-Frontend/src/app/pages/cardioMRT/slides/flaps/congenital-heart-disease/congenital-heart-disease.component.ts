import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { values } from 'lodash';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { FlapsUiModel } from '@models/cardioMRT/ui/flaps/flaps-ui.model';
import { CongenitalHeartDiseasesFindingUiModel } from '@models/cardioMRT/ui/flaps/congenital-heart-diseases-finding-ui.model';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import {
  CongenitalHeartDiseaseFindingType,
  ArtialSeptalDefectType,
  SinusVenosusType,
  VentricleSeptalDefectType,
  TranspositionOfTheGreatArteriesType,
  OneChamberHeartSingleType,
  AVConnectionType
} from '@enums/cardioMRT/flaps';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

interface IButtonFindingDropdownModel {
  button: string;
  findings: FindingDropdownModel[];
}

@Component({
  selector: 'rr-congenital-heart-disease',
  templateUrl: './congenital-heart-disease.component.html',
  styleUrls: ['../flaps.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CongenitalHeartDiseaseComponent implements OnInit, OnDestroy {
  @Input() model: FlapsUiModel;
  @Input() congenitalHeartDiseasesFindingsHandler: DynamicComponentHandler<CongenitalHeartDiseasesFindingUiModel>;

  subscriptions: Subscription[] = [];
  congenitalHeartDiseaseFindinsConfig: FindingColumnConfig;

  findingType: typeof CongenitalHeartDiseaseFindingType;
  artialSeptalDefectType: typeof ArtialSeptalDefectType;
  sinusVenosusType: typeof SinusVenosusType;
  ventricleSeptalDefectType: typeof VentricleSeptalDefectType;
  transpositionOfTheGreatArteriesType: typeof TranspositionOfTheGreatArteriesType;
  oneChamberHeartSingleType: typeof OneChamberHeartSingleType;
  mainVentricleType: typeof LocationTypeEnum;
  avConnectionType: typeof AVConnectionType;
  areFindings: typeof AreFindingsEnum;

  constructor(private translate: TranslateService) {
    this.configureCongenitalHeartDiseaseFindingsDropdown();

    this.findingType = CongenitalHeartDiseaseFindingType;
    this.artialSeptalDefectType = ArtialSeptalDefectType;
    this.sinusVenosusType = SinusVenosusType;
    this.ventricleSeptalDefectType = VentricleSeptalDefectType;
    this.transpositionOfTheGreatArteriesType = TranspositionOfTheGreatArteriesType;
    this.oneChamberHeartSingleType = OneChamberHeartSingleType;
    this.mainVentricleType = LocationTypeEnum;
    this.avConnectionType = AVConnectionType;
    this.areFindings = AreFindingsEnum;
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  private configureCongenitalHeartDiseaseFindingsDropdown(): void {
    this.congenitalHeartDiseaseFindinsConfig = new FindingColumnConfig();
    this.congenitalHeartDiseaseFindinsConfig.findingType = 'findingType';
    this.congenitalHeartDiseaseFindinsConfig.findingColumnIds.findingRRId = 'car_m_040226';
    this.congenitalHeartDiseaseFindinsConfig.findingColumnIds.buttonRRId = 'car_m_040223';
    this.congenitalHeartDiseaseFindinsConfig.itemCount = 7;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.congenitalHeartDiseaseFindinsConfig.placeholder = out;
      }),

      this.translate.stream('cardioMRT.flaps.findingTypes2.options').subscribe(out => {
        this.congenitalHeartDiseaseFindinsConfig.dropdownValues = Object.values(out);
      }),

      this.translate.stream('cardioMRT.flaps.addPathology.value').subscribe(out => {
        this.congenitalHeartDiseaseFindinsConfig.buttonText = out;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  get oneChamberHeartSelected() {
    return this.congenitalHeartDiseasesFindingsHandler.currentItem.findingType === CongenitalHeartDiseaseFindingType.OneChamberHeart;
  }
}
