import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftPartsFormTypeEnum, SoftPartsSiteTypeEnum } from '@enums/thoraxCT/soft-parts';
import { DistributionTypeEnum, QualityTypeEnum } from '@enums/thoraxCT/soft-parts/pleural-effusion';

import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { Subscription } from 'rxjs';
import { SoftPartsHelperService } from '../soft-parts-helper.service';

@Component({
  selector: 'rr-pleural-effusion',
  templateUrl: './pleural-effusion.component.html',
  styleUrls: ['./pleural-effusion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PleuralEffusionComponent implements OnDestroy {
  @Input() model: SoftPartsFindingUiModel;
  @Input() findings: SoftPartsFindingUiModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  softPartsSiteTypeEnum = SoftPartsSiteTypeEnum;
  formType = SoftPartsFormTypeEnum;
  qualityTypeEnum = QualityTypeEnum;
  distributionTypeEnum = DistributionTypeEnum;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  constructor(public softPartsHelperService: SoftPartsHelperService) {
    this.isCMYesSubscription = this.softPartsHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
    });
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }

  leftOrRightSelected(): boolean {
    return [this.softPartsSiteTypeEnum.Right, this.softPartsSiteTypeEnum.Left].includes(this.model.siteType);
  }

  clearSiteTypeDetails(value: SoftPartsSiteTypeEnum): string {
    return value === this.softPartsSiteTypeEnum.Bilateral
      ? 'siteMaxWidthInMm-block col3-block col5-block'
      : this.model.siteType === value
      ? ''
      : 'siteMaxWidthInMm-block col3-block col5-block';
  }
}
