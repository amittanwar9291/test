import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { PathologyAnatomicVariantsTypeEnum } from '@enums/pelvisMRT/bladder';
import { VesselsUreterPathologyTypeEnum } from '@enums/pelvisMRT/bladder';
import { AffectedVesselUreterTypeEnum } from '@enums/pelvisMRT/bladder';
import { ArteriopathyTypeEnum } from '@enums/pelvisMRT/bladder';
import { SideTypeEnum } from '@enums/shared/side-type.enum';

@Component({
  selector: 'rr-vessels-ureter',
  templateUrl: './vessels-ureter.component.html',
  styleUrls: ['./vessels-ureter.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VesselsUreterComponent {
  @Input() model: BladderFindingUiModel;

  affectedVesselUreterTypeEnum = AffectedVesselUreterTypeEnum;
  arteriopathyTypeEnum = ArteriopathyTypeEnum;
  sideTypeEnum = SideTypeEnum;
  pathologyAnatomicVariantsTypeEnum = PathologyAnatomicVariantsTypeEnum;
  vesselsUreterPathologyTypeEnum = VesselsUreterPathologyTypeEnum;

  arteryAffectedVesselUreterTypes = [
    AffectedVesselUreterTypeEnum.CommonIliacArtery,
    AffectedVesselUreterTypeEnum.ExternalIliacArtery,
    AffectedVesselUreterTypeEnum.InternalIliacArtery
  ];

  clearAffectedVesselUreterDetails(value: AffectedVesselUreterTypeEnum): string {
    return this.model.affectedVesselUreterType !== value ? 'affectedVesselUreterDetails' : '';
  }
}
