import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { PleuraHelperService } from '../../pleura-helper.service';
import { MarginTypeEnum } from '@enums/thoraxMRT/pleura/common/margin-type.enum';
import { PleuraShapeTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-shape-type.enum';
import { CysticChangesTypeEnum } from '@enums/thoraxMRT/pleura/common/cystic-changes-type.enum';
import { LevelTypeEnum } from '@enums/thoraxMRT/pleura/chest-wall-soft-tissue/level-type.enum';
import { FocalSignalVoidsTypeEnum } from '@enums/thoraxMRT/pleura/common/focal-signal-voids-type.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-chest-wall-additional-characteristics-one',
  templateUrl: './chest-wall-additional-characteristics-one.component.html',
  styleUrls: ['./chest-wall-additional-characteristics-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChestWallAdditionalCharacteristicsOneComponent implements OnDestroy {
  @Input() model: PleuraFindingUiModel;

  homogeneityTypeEnum = HomogeneityTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  shapeTypeEnum = PleuraShapeTypeEnum;
  cysticChangesTypeEnum = CysticChangesTypeEnum;
  levelTypeEnum = LevelTypeEnum;
  focalSignalVoidsTypeEnum = FocalSignalVoidsTypeEnum;
  isDWISubscription: Subscription;
  isDWISelected = false;

  constructor(private pleuraHelperService: PleuraHelperService) {
    this.isDWISubscription = this.pleuraHelperService.isWeightingTypeDWI.subscribe(value => {
      this.isDWISelected = value;
    });
  }
  ngOnDestroy(): void {
    this.isDWISubscription.unsubscribe();
  }
}
