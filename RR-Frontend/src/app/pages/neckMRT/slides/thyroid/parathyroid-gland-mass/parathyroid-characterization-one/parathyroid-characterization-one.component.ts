import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HomogeneityTypeEnum } from '@enums/neckMRT/thyroid/common/homogeneity-type.enum';
import { MarginTypeEnum } from '@enums/neckMRT/thyroid/common/margin-type.enum';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';
import { SideTypeEnum } from '@enums/neckMRT/thyroid/common/side-type.enum';
import { RelationToThyroidGlandTypeEnum } from '@enums/neckMRT/thyroid';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-parathyroid-characterization-one',
  templateUrl: './parathyroid-characterization-one.component.html',
  styleUrls: ['./parathyroid-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ParathyroidCharacterizationOneComponent {
  @Input() model: ThyroidFindingUiModel;
  @Input() isDWI: boolean;

  marginType = MarginTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  sideType = SideTypeEnum;
  relationToThyroidGlandType = RelationToThyroidGlandTypeEnum;

  inputDisable(name: string): boolean {
    switch (name) {
      case nameof<ThyroidFindingUiModel>(m => m.secondPlaneInMm): {
        return this.model.sizeInMm === null;
      }
      case nameof<ThyroidFindingUiModel>(m => m.thirdPlaneInMm): {
        return this.model.sizeInMm === null || this.model.secondPlaneInMm === null;
      }
    }
  }

  inputChange(): void {
    if (this.model.sizeInMm === null) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    }
    if (this.model.secondPlaneInMm === null) {
      this.model.thirdPlaneInMm = null;
    }
  }
}
