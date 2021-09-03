import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { Subscription } from 'rxjs/internal/Subscription';
import { FacialSkullHelperService } from '../../facial-skull-helper.service';
import { CorticalisTypeEnum } from '@enums/headMRT/facial-skull/Skull/corticalis-type.enum';

@Component({
  selector: 'rr-skull-characterization-one',
  templateUrl: './skull-characterization-one.component.html',
  styleUrls: ['./skull-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SkullCharacterizationOneComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;
  corticalisTypeEnum = CorticalisTypeEnum;

  signalVoidTypeEnum = SignalVoidTypeEnum;

  isDWISubscription: Subscription;
  isDWI: boolean;

  constructor(private facialSkullHelperService: FacialSkullHelperService) {
    this.isDWISubscription = this.facialSkullHelperService.isDWI.subscribe(v => (this.isDWI = v));
  }

  ngOnDestroy(): void {
    this.isDWISubscription.unsubscribe();
  }
}
