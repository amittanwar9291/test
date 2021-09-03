import { Subscription } from 'rxjs';
import { Component, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { LiverHelperService } from '../../liver-helper.service';

@Component({
  selector: 'rr-biliary-characterization-one',
  templateUrl: './characterization-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent implements OnDestroy {
  @Input() model: LiverFindingUiModel;
  @Output() emitLocalizer = new EventEmitter();
  isCMReinforced: boolean;
  isCMReinforcedSubscription: Subscription;

  constructor(private liverHelperService: LiverHelperService) {
    this.isCMReinforcedSubscription = this.liverHelperService.isCMReinforced.subscribe(v => (this.isCMReinforced = v));
  }

  ngOnDestroy(): void {
    this.isCMReinforcedSubscription.unsubscribe();
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit();
  }

  get isDuctusCholedochusPapillaInLocalizerSelected(): boolean {
    return this.model.liverPathologyLocations.ductusCholedochusCloseToPapilla;
  }
}
