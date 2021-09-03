import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { LiverHelperService } from '../liver-helper.service';

@Component({
  selector: 'rr-gallbladder-hydrops',
  templateUrl: './gallbladder-hydrops.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class GallbladderHydropsComponent {
  @Input() model: LiverFindingUiModel;

  constructor(private liverHelperService: LiverHelperService) {}

  resetExtensionInputs(): void {
    this.liverHelperService.resetExtensionInputs(this.model);
  }
}
