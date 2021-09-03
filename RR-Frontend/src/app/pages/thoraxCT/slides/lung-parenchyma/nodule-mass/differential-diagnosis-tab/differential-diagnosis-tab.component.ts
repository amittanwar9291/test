import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { TranslateService } from '@ngx-translate/core';
import { LungParenchymaDiagnosisTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-diagnosis-type.enum';
import { LungParenchymaLocalizationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-localization-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LungParenchymaFindingTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-finding-type.enum';
import { LungParenchymaHelperService, LungParenchymaLargeLocalizerConfig } from '../../lung-parenchyma-helper.service';
import { LungsSegmentsModel } from '@models/thoraxCT/ui/thorax/lungs-segments.model';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';

@Component({
  selector: 'rr-differential-diagnosis-tab',
  templateUrl: './differential-diagnosis-tab.component.html',
  styleUrls: ['./differential-diagnosis-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisTabComponent implements OnInit, OnDestroy {
  @Input() model: LungParenchymaFindingUiModel;

  ddW019: DropdownGroupedModel[];
  ddW020: DropdownGroupedModel[];
  ddW022: DropdownGroupedModel[];
  ddW023: DropdownGroupedModel[];

  subscriptions: Subscription[] = [];

  lungParenchymaFindingTypeEnum = LungParenchymaFindingTypeEnum;
  lungParenchymaDiagnosisTypeEnum = LungParenchymaDiagnosisTypeEnum;
  lungParenchymaLocalizationTypeEnum = LungParenchymaLocalizationTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;

  constructor(private translate: TranslateService, private lungParenchymaHelperService: LungParenchymaHelperService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungParenchyma.ddW019.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW019 = Object.values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungParenchyma.ddW020.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW020 = Object.values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungParenchyma.ddW022.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW022 = Object.values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungParenchyma.ddW023.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW023 = Object.values(out);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  dd1Change() {
    this.model.isSubordinated = false;
    this.model.isSuspected = false;
  }

  dd2Change() {
    this.model.isSubordinated = false;
  }

  openLargeLocalizer(whichLocalizer: 'segments' | 'flaps', modelPropName: string) {
    this.lungParenchymaHelperService.largeLocalizerOpen.next(
      new LungParenchymaLargeLocalizerConfig(whichLocalizer, this.model.findingType === LungParenchymaFindingTypeEnum.Nodule, modelPropName)
    );
  }

  dd2Enabled(): boolean {
    return (
      this.model.differentialDiagnosis01 !== this.lungParenchymaDiagnosisTypeEnum.None ||
      this.model.mainCharacteristicsDifferentialDiagnosis01 !== this.lungParenchymaDiagnosisTypeEnum.None
    );
  }

  clearLocalizers() {
    this.clearLocalizer('segments');
    this.clearLocalizer('flaps');
  }

  clearLocalizer(whichLocalizer: 'segments' | 'flaps') {
    if (whichLocalizer === 'segments') {
      this.model.differentialDiagnosisLungsSegmentsLocation = new LungsSegmentsModel();
    }
    if (whichLocalizer === 'flaps') {
      this.model.differentialDiagnosisLungsFlapsLocation = new LungsFlapsModel();
    }
  }
}
