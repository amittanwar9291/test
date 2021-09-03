import { Component, Input } from '@angular/core';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { HansenAndStockTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/hansen-and-stock-type.enum';
import { ClassificationOfDiverticularDiseaseSubTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/classification-of-diverticular-disease-sub-type.enum';
import { ClassificationOfDiverticularDiseaseTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/classification-of-diverticular-disease-type.enum';
import { SigmoidDifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/sigmoid-diverticular-disease-differential-diagnosis';

@Component({
  selector: 'rr-sigmoid-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SigmoidCharacterizationTwoComponent {
  @Input() model: RectumFindingUiModel;
  hansenAndStockType: typeof HansenAndStockTypeEnum;
  sigmoidDifferentialDiagnosis: typeof SigmoidDifferentialDiagnosisTypeEnum;
  classificationOfDiverticularDiseaseSubType: typeof ClassificationOfDiverticularDiseaseSubTypeEnum;
  classificationOfDiverticularDiseaseType: typeof ClassificationOfDiverticularDiseaseTypeEnum;

  constructor() {
    this.hansenAndStockType = HansenAndStockTypeEnum;
    this.sigmoidDifferentialDiagnosis = SigmoidDifferentialDiagnosisTypeEnum;
    this.classificationOfDiverticularDiseaseSubType = ClassificationOfDiverticularDiseaseSubTypeEnum;
    this.classificationOfDiverticularDiseaseType = ClassificationOfDiverticularDiseaseTypeEnum;
  }

  disableSubordinatedCheckbox() {
    if (this.model.sigmoidDiverticularDiseaseDifferentialDiagnosisType === 'None') {
      this.model.isSubordinated = false;
    }
  }
}
