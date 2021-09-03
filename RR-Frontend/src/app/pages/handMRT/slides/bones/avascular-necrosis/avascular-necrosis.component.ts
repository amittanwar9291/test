import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  LichtmanStagingSubTypeEnum,
  ScaphoideumClassificationTypeEnum,
  ScaphoideumGradingTypeEnum,
  StagingTypeEnum
} from '@enums/handMRT/bones';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-avascular-necrosis',
  templateUrl: './avascular-necrosis.component.html',
  styleUrls: ['./avascular-necrosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AvascularNecrosisComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  side: LocationTypeEnum;

  scaphoideumClassificationType = ScaphoideumClassificationTypeEnum;
  stagingTypeEnum = StagingTypeEnum;
  lichtmanStagingSubType = LichtmanStagingSubTypeEnum;
  scaphoideumGradingType = ScaphoideumGradingTypeEnum;

  localizationSideSubscription: Subscription;

  constructor(private bonesHelperService: BonesHelperService) {}

  ngOnInit(): void {
    this.localizationSideSubscription = this.bonesHelperService.localizationSide.subscribe(value => {
      this.side = value;
    });
    this.getNoFurtherDetailsHeader();
  }

  ngOnDestroy(): void {
    this.localizationSideSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    const cleanup = (m: BonesFindingUiModel) => {
      m.scaphoideumClassificationType = ScaphoideumClassificationTypeEnum.None;
      m.scaphoideumGradingType = ScaphoideumGradingTypeEnum.None;
      m.lichtmanStagingType = StagingTypeEnum.None;
      m.lichtmanStagingSubType = LichtmanStagingSubTypeEnum.None;
    };
    this.bonesHelperService.largeLocalizerOpen.next(new ComplexLocalizerData('bones', true, false, true, false, cleanup));
  }

  showNoFurtherDetailsHeader(): boolean {
    return !!this.getNoFurtherDetailsHeader() && !this.model.involvedBonesType.scaphoid && !this.model.involvedBonesType.osLunatum;
  }

  getNoFurtherDetailsHeader() {
    return Object.keys(this.model.involvedBonesType).find(k => this.model.involvedBonesType[k]);
  }
}
