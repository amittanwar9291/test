import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { TunicaAlbugineaTypeEnum } from '@enums/pelvisMRT/male-sex/tunica-albuginea-type.enum';
import { DifferentialDiagnosisPenisTraumaTypeEnum } from '@enums/pelvisMRT/male-sex/differential-diagnosis-penis-trauma-type.enum';

@Component({
  selector: 'rr-penis-trauma',
  templateUrl: './penis-trauma.component.html',
  styleUrls: ['./penis-trauma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PenisTraumaComponent {
  tunicaAlbugineaType: typeof TunicaAlbugineaTypeEnum;
  differentialDiagnosisPenisTraumaType: typeof DifferentialDiagnosisPenisTraumaTypeEnum;

  @Input() model: MaleSexFindingUiModel;

  constructor() {
    this.tunicaAlbugineaType = TunicaAlbugineaTypeEnum;
    this.differentialDiagnosisPenisTraumaType = DifferentialDiagnosisPenisTraumaTypeEnum;
  }
}
