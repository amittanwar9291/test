import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { LungsFlapsMulticolorLocalizerUi } from '@models/shared/thorax/localizers/lungs-flaps-multicolor-localizer-ui';
import { LungParenchymaHelperService } from '../../../slides/lung-parenchyma/lung-parenchyma-helper.service';
import { MorphologyEditorDialogData } from '@models/thoraxMRT/ui/lung-parenchyma/morphology-editor-dialog-data.model';

@Component({
  selector: 'rr-morphology-editor-dialog',
  templateUrl: './morphology-editor-dialog.component.html',
  styleUrls: ['./morphology-editor-dialog.component.scss']
})
export class MorphologyEditorDialogComponent implements OnInit, OnDestroy {
  model: LungsFlapsMulticolorLocalizerUi;

  viewModel = {
    rightOL: 0,
    rightML: 0,
    rightUL: 0,
    leftOL: 0,
    leftLI: 0,
    leftUL: 0
  };

  scoringModes = {
    score1: 'score1',
    score2: 'score2'
  };

  currentScoringMode: string;

  score: number;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private userBasicDataService: UserBasicDataService,
    private lungParenchymaHelperService: LungParenchymaHelperService
  ) {}

  ngOnInit(): void {
    this.model = this.config.data.localizerModel || new LungsFlapsMulticolorLocalizerUi();
    this.score = this.config.data.score || 0;
    this.convertModelToViewModel();
  }

  ngOnDestroy() {
    this.lungParenchymaHelperService.morphologyQuantitativeEditorValueUpdate.next(null);
  }

  convertModelToViewModel() {
    this.viewModel.rightOL = this.model.moreThan50Location.rightOL ? 2 : this.model.lessThan50Location.rightOL ? 1 : 0;
    this.viewModel.rightML = this.model.moreThan50Location.rightML ? 2 : this.model.lessThan50Location.rightML ? 1 : 0;
    this.viewModel.rightUL = this.model.moreThan50Location.rightUL ? 2 : this.model.lessThan50Location.rightUL ? 1 : 0;
    this.viewModel.leftOL = this.model.moreThan50Location.leftOL ? 2 : this.model.lessThan50Location.leftOL ? 1 : 0;
    this.viewModel.leftLI = this.model.moreThan50Location.leftLI ? 2 : this.model.lessThan50Location.leftLI ? 1 : 0;
    this.viewModel.leftUL = this.model.moreThan50Location.leftUL ? 2 : this.model.lessThan50Location.leftUL ? 1 : 0;
  }

  convertViewModelToModel() {
    this.model.moreThan50Location.rightOL = this.viewModel.rightOL === 2;
    this.model.moreThan50Location.rightML = this.viewModel.rightML === 2;
    this.model.moreThan50Location.rightUL = this.viewModel.rightUL === 2;
    this.model.moreThan50Location.leftOL = this.viewModel.leftOL === 2;
    this.model.moreThan50Location.leftLI = this.viewModel.leftLI === 2;
    this.model.moreThan50Location.leftUL = this.viewModel.leftUL === 2;
    this.model.lessThan50Location.rightOL = this.viewModel.rightOL === 1;
    this.model.lessThan50Location.rightML = this.viewModel.rightML === 1;
    this.model.lessThan50Location.rightUL = this.viewModel.rightUL === 1;
    this.model.lessThan50Location.leftOL = this.viewModel.leftOL === 1;
    this.model.lessThan50Location.leftLI = this.viewModel.leftLI === 1;
    this.model.lessThan50Location.leftUL = this.viewModel.leftUL === 1;
  }

  setScoringMode(mode: 'score1' | 'score2') {
    this.currentScoringMode = mode;
  }

  getScoreSelectorClass(mode: 'score1' | 'score2'): string {
    return this.currentScoringMode === mode ? 'font-bold' : 'font-light';
  }

  getElementClass(elem: string): string {
    if (this.viewModel[elem] === 1) {
      return 'pointer score-1';
    } else if (this.viewModel[elem] === 2) {
      return 'pointer score-2';
    } else {
      return this.currentScoringMode ? 'pointer' : '';
    }
  }

  clickElement(elem: string) {
    if (!this.currentScoringMode) {
      return;
    }

    if (this.viewModel[elem] > 0) {
      if (this.isElementUnclicked(elem)) {
        this.score = this.score - this.viewModel[elem];
        this.viewModel[elem] = 0;
      }

      if (this.viewModel[elem] === 1 && this.currentScoringMode === 'score2') {
        this.score = this.score - this.viewModel[elem];
        this.viewModel[elem] = 2;
        this.score = this.score + this.viewModel[elem];
      }
      if (this.viewModel[elem] === 2 && this.currentScoringMode === 'score1') {
        this.score = this.score - this.viewModel[elem];
        this.viewModel[elem] = 1;
        this.score = this.score + this.viewModel[elem];
      }
    } else {
      this.viewModel[elem] = this.currentScoringMode === 'score1' ? 1 : 2;
      this.score = this.score + this.viewModel[elem];
    }
    this.informParent();
  }

  isElementUnclicked(elem: string) {
    return (
      (this.viewModel[elem] === 1 && this.currentScoringMode === 'score1') ||
      (this.viewModel[elem] === 2 && this.currentScoringMode === 'score2')
    );
  }

  informParent() {
    this.convertViewModelToModel();
    this.lungParenchymaHelperService.morphologyQuantitativeEditorValueUpdate.next(
      new MorphologyEditorDialogData(this.model, this.score, null, null, this.config.data.selectedLocalizer)
    );
  }

  close() {
    this.ref.close();
  }
}
