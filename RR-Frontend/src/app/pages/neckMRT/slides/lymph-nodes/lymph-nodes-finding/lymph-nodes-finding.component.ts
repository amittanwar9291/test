import { Component, Input, OnInit } from '@angular/core';
import { LymphNodesFindingUiModel } from '@models/neckMRT/ui/lymph-nodes/lymph-nodes-finding-ui.model';
import { CharacterizationTypeEnum, MarginTypeEnum, ShapeTypeEnum } from '@enums/neckMRT/lymph-nodes';
import { AppConfig } from '../../../../../app.config';
import { ControlContainer, NgForm } from '@angular/forms';
import { nameof } from 'ts-simple-nameof/index';

@Component({
  selector: 'rr-lymph-nodes-finding',
  templateUrl: './lymph-nodes-finding.component.html',
  styleUrls: ['./lymph-nodes-finding.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LymphNodesFindingComponent implements OnInit {
  @Input() model: LymphNodesFindingUiModel;

  shapeType = ShapeTypeEnum;
  marginType = MarginTypeEnum;
  characterizationType = CharacterizationTypeEnum;

  localizationValidationGroup = [
    nameof<LymphNodesFindingUiModel>(m => m.isLevelIaSubmental),
    nameof<LymphNodesFindingUiModel>(m => m.isLevelIbSubmandibular),
    nameof<LymphNodesFindingUiModel>(m => m.isLevelIIaUpperInternal),
    nameof<LymphNodesFindingUiModel>(m => m.isLevelIIbUpperInternal),
    nameof<LymphNodesFindingUiModel>(m => m.isLevelIIIMidInternal),
    nameof<LymphNodesFindingUiModel>(m => m.isLevelIVLowerInternal),
    nameof<LymphNodesFindingUiModel>(m => m.isLevelVaSuperiorPosteriorcervical),
    nameof<LymphNodesFindingUiModel>(m => m.isLevelVbInferiorPosterior),
    nameof<LymphNodesFindingUiModel>(m => m.isLevelVIAnteriorCompartment),
    nameof<LymphNodesFindingUiModel>(m => m.isLevelVIIUppermediastinalLN)
  ].join(' ');

  ngOnInit(): void {
    this.applyLocalizationBlockLogic();
  }

  applyLocalizationBlockLogic(): boolean {
    const numberOfSelectedCheckboxes = [
      this.model.isLevelIaSubmental,
      this.model.isLevelIbSubmandibular,
      this.model.isLevelIIaUpperInternal,
      this.model.isLevelIIIMidInternal,
      this.model.isLevelIIbUpperInternal,
      this.model.isLevelIVLowerInternal,
      this.model.isLevelVaSuperiorPosteriorcervical,
      this.model.isLevelVbInferiorPosterior,
      this.model.isLevelVIAnteriorCompartment,
      this.model.isLevelVIIUppermediastinalLN
    ].filter(Boolean).length;

    if (numberOfSelectedCheckboxes !== 1) {
      this.model.shapeType = ShapeTypeEnum.None;
      this.model.marginType = MarginTypeEnum.None;
      return true;
    }
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.neckMRT.lymphNodes.fileUpload;
  }
}
