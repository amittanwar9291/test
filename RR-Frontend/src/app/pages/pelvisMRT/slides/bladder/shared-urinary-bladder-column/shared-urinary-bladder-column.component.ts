import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { SharedUrinaryBladderColumnModel } from '@models/pelvisMRT/ui/bladder/shared-urinary-bladder-column.model';
import { BladderHelperService } from '../bladder-helper.service';

@Component({
  selector: 'rr-shared-urinary-bladder-column',
  templateUrl: './shared-urinary-bladder-column.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SharedUrinaryBladderColumnComponent {
  @Input() model: BladderFindingUiModel;

  constructor(private bladderHelperService: BladderHelperService) {}

  onSharedUrinaryBladderColumnModelChange() {
    this.bladderHelperService.sharedUrinaryBladderColumnModel.next(
      new SharedUrinaryBladderColumnModel(
        this.model.isArtifacts,
        this.model.isNotSufficientBladderFilling,
        this.model.isInsertedBladderCatheter,
        this.model.isDoubleJCatheterRight,
        this.model.isDoubleJCatheterLeft
      )
    );
  }
}
