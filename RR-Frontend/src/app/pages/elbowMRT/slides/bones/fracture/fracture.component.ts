import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  AoClassificationTypeEnum,
  BonesClassificationTypeEnum,
  FractureFormDetailsTypeEnum,
  FractureFormSubTypeEnum,
  FractureFormTypeEnum,
  FractureTypeEnum,
  LocalizationLongitudinalTypeEnum,
  NotFurtherSpecifiedTypeEnum
} from '@enums/elbowMRT/bones';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-fracture',
  templateUrl: './fracture.component.html',
  styleUrls: ['./fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  fractureTypeEnum = FractureTypeEnum;
  bonesClassificationTypeEnum = BonesClassificationTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW013: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('elbowMRT.bones.W013.options').subscribe((out: DropdownModel[]) => {
        this.ddlW013 = Object.values(out);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  clearClassificationTypeDetails(value: BonesClassificationTypeEnum): string {
    return this.model.classificationType !== value ? 'AO-block ModifiedAccordingToMason-block' : '';
  }

  clearOptions() {
    this.model.classificationType = BonesClassificationTypeEnum.None;
    this.model.aoClassificationType = AoClassificationTypeEnum.None;
    this.model.classificationType = BonesClassificationTypeEnum.None;
    this.model.notFurtherSpecifiedType = NotFurtherSpecifiedTypeEnum.None;
    this.model.fractureFormType = FractureFormTypeEnum.None;
    this.model.fractureFormSubType = FractureFormSubTypeEnum.None;
    this.model.fractureFormDetailsType = FractureFormDetailsTypeEnum.None;
    this.model.localizationLongitudinalType = LocalizationLongitudinalTypeEnum.None;
  }
}
