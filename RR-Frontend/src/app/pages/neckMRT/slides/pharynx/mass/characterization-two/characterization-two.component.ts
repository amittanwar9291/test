import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AsymmetryTypeEnum, MarginTypeEnum, HomogeneityTypeEnum, ShapeTypeEnum } from '@enums/neckMRT/pharynx';
import { PharynxFindingUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-ui.model';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent implements OnInit {
  @Input() model: PharynxFindingUiModel;

  asymmetryType = AsymmetryTypeEnum;
  marginType = MarginTypeEnum;
  massHomogeneityType = HomogeneityTypeEnum;
  shapeType = ShapeTypeEnum;

  ngOnInit(): void {
    this.checkIfMoreThanOneInColumn2And3Selected();
  }

  checkIfMoreThanOneInColumn2And3Selected(): void {
    const numberOfSelectedCheckboxes = [
      this.model.isPharyngealMucosalSpacePms,
      this.model.isParapharyngealSpacePps,
      this.model.isMasticatorSpaceMs,
      this.model.isBuccalSpaceBs,
      this.model.isParotidSpacePs,
      this.model.isCarotidSpaceCs,
      this.model.isRetropharyngealSpaceRpsAndDangerSpace,
      this.model.isPerivertebralSpacePvsPrevertebral,
      this.model.isPerivertebralSpacePvsParaspinal,
      this.model.isVisceralSpaceVs,
      this.model.isAnteriorCervicalSpaceAcs,
      this.model.isPosteriorCervicalSpacePcs,
      this.model.isOralMucosalSpaceOms,
      this.model.isSubmandibularSpaceSms,
      this.model.isSublingualSpaceSls,
      this.model.isRootOfTheTongueRot,
      this.model.isFasciaSpacesLingualTonsils,
      this.model.isFasciaSpacesValleculae
    ].filter(Boolean).length;

    this.model.isTransspatialGrowth = numberOfSelectedCheckboxes > 1;
  }

  resetBothPlanes(): void {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
}
