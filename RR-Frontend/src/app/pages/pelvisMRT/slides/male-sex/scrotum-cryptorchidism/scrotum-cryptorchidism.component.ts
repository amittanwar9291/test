import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { LocalizationOfTheNondescendedTypeEnum } from '@enums/pelvisMRT/male-sex/localization-of-the-nondescended-type.enum';

@Component({
  selector: 'rr-scrotum-cryptorchidism',
  templateUrl: './scrotum-cryptorchidism.component.html',
  styleUrls: ['./scrotum-cryptorchidism.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ScrotumCryptorchidismComponent {
  localizationOfTheNondescendedType: typeof LocalizationOfTheNondescendedTypeEnum;
  @Input() model: MaleSexFindingUiModel;

  constructor() {
    this.localizationOfTheNondescendedType = LocalizationOfTheNondescendedTypeEnum;
  }
}
