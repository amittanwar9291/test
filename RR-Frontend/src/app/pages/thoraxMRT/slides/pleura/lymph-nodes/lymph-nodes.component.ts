import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FocalSignalVoidsTypeEnum } from '@enums/thoraxMRT/pleura/common/focal-signal-voids-type.enum';
import { LymphNodesAxillaryTypeEnum } from '@enums/thoraxMRT/pleura/lymph-nodes-axillary/lymph-nodes-axillary-type.enum';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { Subscription } from 'rxjs';
import { PleuraHelperService } from '../pleura-helper.service';

@Component({
  selector: 'rr-lymph-nodes',
  templateUrl: './lymph-nodes.component.html',
  styleUrls: ['./lymph-nodes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LymphNodesComponent implements OnInit, OnDestroy {
  @Input() model: PleuraFindingUiModel;

  lymphNodesAxillaryTypeEnum = LymphNodesAxillaryTypeEnum;
  focalSignalVoidsTypeEnum = FocalSignalVoidsTypeEnum;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;
  isWeightingTypeDWISubscription: Subscription;
  isWeightingTypeDWI: boolean;

  constructor(public pleuraHelperService: PleuraHelperService) {
    this.isCMYesSubscription = this.pleuraHelperService.isCMYes.subscribe(value => (this.isCMYes = value));
    this.isWeightingTypeDWISubscription = this.pleuraHelperService.isWeightingTypeDWI.subscribe(value => (this.isWeightingTypeDWI = value));
  }
  ngOnInit(): void {
    if (!this.isCMYes) {
      this.model.isContrastEnhancement = false;
    }
    if (!this.isWeightingTypeDWI) {
      this.model.isDiffusionRestriction = false;
    }
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
    this.isWeightingTypeDWISubscription.unsubscribe();
  }

  clearLymphNodesDetails(value: LymphNodesAxillaryTypeEnum): string {
    return value === this.model.lymphNodesAxillaType ? '' : 'col3-block col4-block';
  }
}
