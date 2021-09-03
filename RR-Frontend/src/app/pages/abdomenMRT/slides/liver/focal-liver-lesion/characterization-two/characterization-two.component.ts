import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { WashInArterialPhaseTypeEnum, FatTypeEnum, GrowthPatternsTypeEnum } from '@enums/abdomenMRT/liver';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { LiverHelperService } from '../../liver-helper.service';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent implements OnDestroy {
  @Input() model: LiverFindingUiModel;
  @Input() growthPatternsDDOptions: DropdownModel[];

  isCMReinforced: boolean;
  isCMReinforcedSubscription: Subscription;

  washInArterialPhaseType = WashInArterialPhaseTypeEnum;
  fatType = FatTypeEnum;
  growthPatternsType = GrowthPatternsTypeEnum;

  constructor(private liverHelperService: LiverHelperService) {
    this.isCMReinforcedSubscription = this.liverHelperService.isCMReinforced.subscribe(v => (this.isCMReinforced = v));
  }

  conditionallyResetInfiltrationBlock(): void {
    if (this.model.growthPatternsType !== GrowthPatternsTypeEnum.Infiltrating) {
      this.model.isPortalVeinRightBranch = false;
      this.model.isPortalVeinProximal = false;
      this.model.isPortalVeinLeftBranch = false;
      this.model.isRightHepaticVein = false;
      this.model.isMiddleHepaticVein = false;
      this.model.isLeftHepaticVein = false;
      this.model.isAssociatedCholestasis = false;
      this.model.isRightHepaticDuct = false;
      this.model.isLeftHepaticDuct = false;
      this.model.isCommonHepaticDuct = false;
      this.model.isGallBladder = false;
    }
  }

  ngOnDestroy() {
    this.isCMReinforcedSubscription.unsubscribe();
  }
}
