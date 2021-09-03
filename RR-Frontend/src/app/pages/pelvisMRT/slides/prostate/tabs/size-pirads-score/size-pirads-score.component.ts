import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ProstateFindingUiModel } from '@models/pelvisMRT/ui/prostate/prostate-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ProstataFindingTypeEnum } from '@enums/pelvisMRT/prostate/prostata-finding-type.enum';
import { IndexLesionTypeEnum } from '@enums/pelvisMRT/prostate/index-lesion-type.enum';
import { SizeTypeEnum } from '@enums/pelvisMRT/prostate/size-type.enum';
import { ProstateHelperService } from '../../prostate-helper.service';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/prostate/differential-diagnosis-type.enum';

@Component({
  selector: 'rr-size-pirads-score',
  templateUrl: './size-pirads-score.component.html',
  styleUrls: ['./size-pirads-score.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SizePiradsScoreComponent implements OnInit {
  @Input() model: ProstateFindingUiModel;
  @Input() w026DifferentialDiagnosisType: DropdownModel[];

  previousIndexLesionType: IndexLesionTypeEnum;

  findingType = ProstataFindingTypeEnum;
  indexLesionType = IndexLesionTypeEnum;
  sizeType = SizeTypeEnum;
  differentialDiagnosisType = DifferentialDiagnosisTypeEnum;

  constructor(private prostateHelperService: ProstateHelperService) {}

  ngOnInit() {
    this.previousIndexLesionType = this.model.indexLesionType;
  }

  onSliderPiradasScoreTypeChanged() {
    this.prostateHelperService.sliderPiradasScoreTypeChanged.next(true);
  }

  onIndexLesionTypeClicked() {
    if (this.model.indexLesionType !== this.previousIndexLesionType) {
      this.prostateHelperService.indexLesionTypeChanged.next(true);
    }

    this.previousIndexLesionType = this.model.indexLesionType;
  }

  clearDifferentialDiagnose01() {
    this.model.isSuspicionOf01 = false;
    this.model.isSuspicionOf02 = false;
    this.model.isDifferentialDiagnosis01GranulomatousProstatitis = false;
    this.model.isDifferentialDiagnosis02GranulomatousProstatitis = false;
  }

  clearDifferentialDiagnose02() {
    this.model.isSuspicionOf02 = false;
    this.model.isDifferentialDiagnosis02GranulomatousProstatitis = false;
  }
}
