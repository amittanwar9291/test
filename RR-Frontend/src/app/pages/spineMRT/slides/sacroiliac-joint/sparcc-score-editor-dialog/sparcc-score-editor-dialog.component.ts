import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SparccEditorConfirmDialogComponent } from '../../../../../shared/dialogs/sparcc-editor-confirm-dialog/sparcc-editor-confirm-dialog.component';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { ScoreEditorModel } from '@models/spineMRT/ui/sacroiliac-joint/score-editor.model';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';

@Component({
  selector: 'rr-sparcc-score-editor',
  templateUrl: './sparcc-score-editor-dialog.component.html',
  styleUrls: ['./sparcc-score-editor-dialog.component.scss'],
  providers: [DialogService]
})
export class SparccScoreEditorDialogComponent extends ResizableBaseComponent implements OnInit {
  editorModel: ScoreEditorModel;
  currentStep = 1;
  maxVisitedStep = 1;

  constructor(
    private dialogService: DialogService,
    private userBasicDataService: UserBasicDataService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    super();
  }

  ngOnInit(): void {
    this.editorModel = new ScoreEditorModel(this.config.data.model);
    if (this.editorModel.scoreSum !== null) {
      this.currentStep = 6;
      this.maxVisitedStep = 6;
    }
  }

  closeEditor() {
    if (this.userBasicDataService.userData.getValue().role === 'Viewer') {
      this.ref.close();
    } else {
      this.dialogService
        .open(SparccEditorConfirmDialogComponent, {
          width: '33%',
          showHeader: false,
          data: {
            title: 'spineMRT.sacroiliacJoint.closeSPARCCScoreEditor.value.title',
            text: 'spineMRT.sacroiliacJoint.closeSPARCCScoreEditor.value.text'
          }
        })
        .onClose.subscribe(async (out: boolean) => {
          if (out) {
            this.ref.close();
          }
        });
    }
  }

  setStep(stepNumber: number): void {
    if (stepNumber > this.maxVisitedStep + 1) {
      return;
    }
    this.currentStep = stepNumber;
    this.maxVisitedStep = stepNumber > this.maxVisitedStep ? stepNumber : this.maxVisitedStep;
  }

  getStepClass(stepNumber: number): string {
    const current: boolean = stepNumber === this.currentStep;
    const nextToLastVisited: boolean = stepNumber === this.maxVisitedStep + 1;
    const visited: boolean = stepNumber <= this.maxVisitedStep;
    const field: boolean = !!this.editorModel.scores.find(item => item.step === stepNumber).stepScore;

    let cssClass = '';
    if (current) {
      cssClass += ' step-current';
    }
    if (!current && !visited) {
      cssClass += ' step-default';
    }
    if (!current && visited && field) {
      cssClass += ' step-visited';
    }
    if (!current && visited && !field) {
      cssClass += ' step-skipped';
    }
    if (!current && (visited || nextToLastVisited)) {
      cssClass += ' step-clickable';
    }
    if (stepNumber < this.maxVisitedStep && this.maxVisitedStep !== stepNumber) {
      {
        cssClass += ' step-line-full';
      }
    } else {
      {
        cssClass += ' step-line-default';
      }
    }
    return cssClass;
  }

  onLocalizerClicked(isElementSelected: boolean) {
    isElementSelected
      ? this.editorModel.scores[this.currentStep - 1].stepScore++
      : this.editorModel.scores[this.currentStep - 1].stepScore--;
    this.setScoreSum();
  }

  updateScoreOnCheckbox(isCheckboxChecked: boolean) {
    isCheckboxChecked
      ? this.editorModel.scores[this.currentStep - 1].stepScore++
      : this.editorModel.scores[this.currentStep - 1].stepScore--;
    this.setScoreSum();
  }

  setScoreSum() {
    this.editorModel.scoreSum = this.editorModel.scores.map(item => item.stepScore).reduce((a, b) => a + b, 0);
  }

  finish() {
    if (this.editorModel.scoreSum === null) {
      this.editorModel.scoreSum = 0;
    }
    this.ref.close(this.editorModel);
  }
}
