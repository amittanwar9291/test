import { Component, Input, OnDestroy } from '@angular/core';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { Subscription } from 'rxjs/internal/Subscription';
import { FacialSkullHelperService } from '../../facial-skull-helper.service';

@Component({
  selector: 'rr-temporal-bone-characterization-one',
  templateUrl: './temporal-bone-characterization-one.component.html',
  styleUrls: ['./temporal-bone-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TemporalBoneCharacterizationOneComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;
  signalVoidTypeEnum = SignalVoidTypeEnum;

  isDWISubscription: Subscription;
  isDWI: boolean;

  constructor(private facialSkullHelperService: FacialSkullHelperService) {
    this.isDWISubscription = this.facialSkullHelperService.isDWI.subscribe(v => (this.isDWI = v));
  }

  ngOnDestroy(): void {
    this.isDWISubscription.unsubscribe();
  }

  onMaxDiameterChange() {
    if (!this.model.maxDiameter) {
      this.model.size2ndPlane = null;
      this.model.size3rdPlane = null;
    }
  }

  onSize2ndPlaneChange() {
    if (!this.model.size2ndPlane) {
      this.model.size3rdPlane = null;
    }
  }
}