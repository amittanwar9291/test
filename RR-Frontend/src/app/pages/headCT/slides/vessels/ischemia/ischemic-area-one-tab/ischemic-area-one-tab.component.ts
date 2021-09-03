import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { IschemicAreaPatternTypeEnum } from '@enums/headCT/vessels/ischemia/ischemic-area-pattern-type.enum';
import { VesselsHelperService } from '../../vessels-helper.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ContrastEnhancementTypeEnum } from '@enums/headCT/vessels/ischemia/contrast-enhancement-type.enum';
import { InfarctStageTypeEnum } from '@enums/headCT/vessels/ischemia/infarct-stage-type.enum';

@Component({
  selector: 'rr-ischemic-area-one-tab',
  templateUrl: './ischemic-area-one-tab.component.html',
  styleUrls: ['./ischemic-area-one-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IschemicAreaOneTabComponent implements OnDestroy {
  @Input() model: VesselsFindingUiModel;

  ischemicAreaPatternTypeEnum = IschemicAreaPatternTypeEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  infarctStageTypeEnum = InfarctStageTypeEnum;

  isCMYes: boolean;
  isCMYesSubscription: Subscription;

  constructor(private vesselsHelperService: VesselsHelperService) {
    this.isCMYesSubscription = vesselsHelperService.isCMYes.subscribe(value => (this.isCMYes = value));
  }

  ngOnDestroy(): void {
    this.isCMYesSubscription.unsubscribe();
  }

  onMaxDiameterChange() {
    if (!this.model.maxDiameterInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    }
  }

  onSize2ndPlaneChange() {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
}
