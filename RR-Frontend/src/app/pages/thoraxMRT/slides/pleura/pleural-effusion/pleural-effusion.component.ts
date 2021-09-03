import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FormTypeEnum } from '@enums/thoraxMRT/pleura/common/form-type.enum';
import { PleuraSiteTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-site-type.enum';
import { DistributionTypeEnum } from '@enums/thoraxMRT/pleura/pleural-effusion/distribution-type.enum';
import { QualityTypeEnum } from '@enums/thoraxMRT/pleura/pleural-effusion/quality-type.enum';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';

import { Subscription } from 'rxjs';
import { PleuraHelperService } from '../pleura-helper.service';
@Component({
  selector: 'rr-pleural-effusion',
  templateUrl: './pleural-effusion.component.html',
  styleUrls: ['./pleural-effusion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PleuralEffusionComponent implements OnInit, OnDestroy {
  @Input() model: PleuraFindingUiModel;
  @Input() findings: PleuraFindingUiModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  pleuraSiteTypeEnum = PleuraSiteTypeEnum;
  formTypeEnum = FormTypeEnum;
  qualityTypeEnum = QualityTypeEnum;
  distributionTypeEnum = DistributionTypeEnum;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  constructor(public pleuraHelperService: PleuraHelperService) {}

  ngOnInit(): void {
    this.isCMYesSubscription = this.pleuraHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
      // === false is here on purpose. Condition should be met only if value is false and not null or undef
      if (this.isCMYes === false) {
        this.model.isCMEnrichingCapsule = false;
      }
    });
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }

  leftOrRightSelected(): boolean {
    return [this.pleuraSiteTypeEnum.Right, this.pleuraSiteTypeEnum.Left].includes(this.model.pleuraSiteType);
  }
}
