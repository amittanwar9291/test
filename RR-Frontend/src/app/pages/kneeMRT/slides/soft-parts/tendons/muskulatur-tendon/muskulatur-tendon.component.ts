import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';

@Component({
  selector: 'rr-muskulatur-tendon',
  templateUrl: './muskulatur-tendon.component.html',
  styleUrls: ['./muskulatur-tendon.component.scss', '../../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MuskulaturTendonComponent {
  @Input() model: SoftPartsFindingUiModel;
}
