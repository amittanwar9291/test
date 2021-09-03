import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { EtiologyDetailsTypeEnum, EtiologyTypeEnum, MinaarClassificationTypeEnum } from '@enums/handMRT/bones';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { BonesHelperService, ComplexLocalizerData } from '../../bones-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-carpal-coalition',
  templateUrl: './carpal-coalition.component.html',
  styleUrls: ['./carpal-coalition.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CarpalCoalitionComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  side: LocationTypeEnum;

  etiologyType = EtiologyTypeEnum;
  etiologyDetailsType = EtiologyDetailsTypeEnum;
  minaarClassificationType = MinaarClassificationTypeEnum;

  localizationSideSubscription: Subscription;

  constructor(private bonesHelperService: BonesHelperService) {}

  ngOnInit(): void {
    this.localizationSideSubscription = this.bonesHelperService.localizationSide.subscribe(value => {
      this.side = value;
    });
  }

  ngOnDestroy(): void {
    this.localizationSideSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpen.next(new ComplexLocalizerData('bones', true, false, true, true));
  }
}
