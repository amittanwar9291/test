import { Subscription } from 'rxjs';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ClassificationCorletteTypeEnum, GrowthPatternTypeEnum } from '@enums/abdomenMRT/liver';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LiverHelperService } from '../../liver-helper.service';
import { ExpansionTypeEnum } from '@enums/hipMRT/bones';

@Component({
  selector: 'rr-bile-duct-characterization-one',
  templateUrl: './characterization-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent implements OnDestroy {
  @Input() model: LiverFindingUiModel;
  @Input() bileDuctMassDDOptions: DropdownModel[];
  @Output() emitLocalizer = new EventEmitter();
  @Output() emitReset = new EventEmitter();

  isCMReinforced: boolean;
  isCMReinforcedSubscription: Subscription;

  growthPatternType = GrowthPatternTypeEnum;

  constructor(private liverHelperService: LiverHelperService) {
    this.isCMReinforcedSubscription = this.liverHelperService.isCMReinforced.subscribe(v => (this.isCMReinforced = v));
  }

  ngOnDestroy(): void {
    this.isCMReinforcedSubscription.unsubscribe();
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit();
  }
  resetRadioButtons(): void {
    if (!this.model.liverPathologyLocations.perihilar) {
      this.emitReset.emit();
    }
  }
  resetExtensionInputs(): void {
    this.liverHelperService.resetExtensionInputs(this.model);
  }
}
