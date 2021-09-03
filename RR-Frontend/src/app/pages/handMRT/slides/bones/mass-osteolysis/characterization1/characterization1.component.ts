import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { MarginTypeEnum } from '@enums/handMRT/bones/';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { CortexTypeEnum } from '@enums/handMRT/bones/';
import { QuantitativeTypeEnum } from '@enums/handMRT/bones/';
import { CmEnhancementTypeEnum } from '@enums/handMRT/bones/';
import { BonesHelperService } from '../../bones-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-handmrt-characterization1',
  templateUrl: './characterization1.component.html',
  styleUrls: ['./characterization1.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class Characterization1Component implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  isCMYes: boolean;

  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  cortexTypeEnum = CortexTypeEnum;
  quantitativeTypeEnum = QuantitativeTypeEnum;
  cmEnhancementTypeEnum = CmEnhancementTypeEnum;

  isCMYesSubscription: Subscription;

  constructor(private bonesHelperService: BonesHelperService) {}

  ngOnInit(): void {
    this.isCMYesSubscription = this.bonesHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
    });
  }

  ngOnDestroy(): void {
    this.isCMYesSubscription.unsubscribe();
  }
}
