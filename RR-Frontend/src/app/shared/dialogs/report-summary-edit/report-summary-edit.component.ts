import { Component, OnInit } from '@angular/core';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';
import { ReportSummaryApiModel } from '@models/shared/report/summary/report-summary-api.model';
import { LanguagesTypes } from '@models/shared/report/report-languages-types';
import { trim, remove } from 'lodash';
import { ReportSummaryUiModel } from '@models/shared/report/summary/report-summary-ui.model';
import { ReportSummaryTextModel } from '@models/shared/report/summary/report-summary-text.model';

@Component({
  selector: 'rr-report-summary-edit',
  templateUrl: './report-summary-edit.component.html',
  styleUrls: ['./report-summary-edit.component.scss']
})
export class ReportSummaryEditComponent extends ResizableBaseComponent implements OnInit {
  reportLang: string;
  summary: ReportSummaryUiModel[];

  newLineText = '';
  userLineInEditing: boolean;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, public translate: TranslateService) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.reportLang = LanguagesTypes[this.config.data.reportLang];
    this.summary = this.config.data.summary.map(
      elem => new ReportSummaryUiModel(elem.order, elem.pageNumber, elem.translations, elem.isAddedByUser, elem.priority)
    );
  }

  getTextByLang(translation: ReportSummaryTextModel[]) {
    return translation.find(item => item.lang === this.reportLang).text;
  }

  getLineInEdition(): ReportSummaryUiModel {
    return this.summary.find(item => item.inEdition);
  }

  getSelectedLine(): ReportSummaryUiModel {
    return this.summary.find(item => item.selected);
  }

  isRemoveLineButtonEnable(): boolean {
    return !!this.summary && !!this.getSelectedLine() && this.getSelectedLine().isAddedByUser;
  }

  isMoveLineButtonEnable(): boolean {
    return !!this.summary && !!this.getSelectedLine();
  }

  isTextInCorrectLang(translation: ReportSummaryTextModel[]) {
    return translation.find(item => item.lang === this.reportLang).actualTextLang === this.reportLang;
  }

  isNewLineText(): boolean {
    return trim(this.newLineText).length !== 0;
  }

  dialogCancel() {
    this.ref.close();
  }

  dialogSave() {
    const result = this.summary.map(
      (item: ReportSummaryUiModel) =>
        new ReportSummaryApiModel(item.order, item.pageNumber, item.translations, item.isAddedByUser, item.priority)
    );
    this.ref.close(result);
  }

  getSortedLines(): ReportSummaryUiModel[] {
    return this.summary.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      } else if (a.order === b.order) {
        return 0;
      } else {
        return -1;
      }
    });
  }

  moveLineUp() {
    const selectedLine = this.summary.find(item => item.selected);
    if (selectedLine && selectedLine.order !== 1) {
      const lineAbove = this.summary.find(item => item.order === selectedLine.order - 1);
      selectedLine.order--;
      lineAbove.order++;
      setTimeout(() => this.calculateScroll());
    }
  }

  moveLineDown() {
    const selectedLine = this.summary.find(item => item.selected);
    if (selectedLine && selectedLine.order !== this.summary.length) {
      const lineBelow = this.summary.find(item => item.order === selectedLine.order + 1);
      selectedLine.order++;
      lineBelow.order--;
      setTimeout(() => this.calculateScroll());
    }
  }

  selectLine(line: ReportSummaryUiModel) {
    if (this.userLineInEditing) {
      return;
    }
    this.summary.forEach(item => (item.id === line.id ? (item.selected = !item.selected) : (item.selected = false)));

    if (line.isAddedByUser) {
      this.getSelectedLine().inEdition = true;
      this.newLineText = this.getSelectedLine().translations.find(elem => elem.lang === this.reportLang).text;
      this.userLineInEditing = true;
    }
  }

  addNewLine() {
    this.userLineInEditing = true;
    this.summary.forEach(item => (item.selected = false));
    const newElemTranslations: ReportSummaryTextModel[] = [];
    Object.keys(LanguagesTypes).forEach(key => newElemTranslations.push(new ReportSummaryTextModel(LanguagesTypes[key], '', '')));
    this.summary.push(new ReportSummaryUiModel(this.summary.length + 1, 0, newElemTranslations, true, null, true, true));
    this.scrollToContentBottom();
  }

  saveUserAddedLine() {
    const lineInEdition = this.getLineInEdition();
    const isNewLine = !!lineInEdition.translations.find(item => item.actualTextLang === '');

    lineInEdition.translations.forEach(item => {
      if (isNewLine) {
        item.text = this.newLineText;
        item.actualTextLang = this.reportLang;
        this.scrollToContentBottom();
      } else if (item.lang === this.reportLang || item.actualTextLang === this.reportLang) {
        item.text = this.newLineText;
        item.actualTextLang = this.reportLang;
      }
    });

    this.newLineText = '';
    lineInEdition.selected = false;
    lineInEdition.inEdition = false;
    this.userLineInEditing = false;
  }

  removeLine() {
    const selectedLineOrder = this.getSelectedLine().order;
    this.summary.forEach(item => (item.order > selectedLineOrder ? item.order-- : item.order));
    remove(this.summary, item => item.selected);
    this.newLineText = '';
    this.userLineInEditing = false;
  }

  private calculateScroll() {
    const selectedLineOffsetTop = document.getElementById(this.getSelectedLine().id).offsetTop;
    const selectedLineOffsetHeight = document.getElementById(this.getSelectedLine().id).offsetHeight + 1;
    const selectedLineParentOffsetTop = document.getElementById(this.getSelectedLine().id).parentElement.offsetTop;
    const selectedLineParentOffsetHeight = document.getElementById(this.getSelectedLine().id).parentElement.offsetHeight;
    const selectedLineParentScrollTop = document.getElementById(this.getSelectedLine().id).parentElement.scrollTop;

    const parentTop = selectedLineParentScrollTop;
    const parentBottom = selectedLineParentOffsetTop + selectedLineParentOffsetHeight;
    const elemTop = selectedLineOffsetTop - selectedLineParentOffsetTop;
    const elemBottom = selectedLineOffsetTop + selectedLineOffsetHeight;

    if (elemTop < parentTop || elemBottom > parentBottom) {
      document.getElementById(this.getSelectedLine().id).parentElement.scrollTop = elemTop;
    }
  }

  private scrollToContentBottom() {
    setTimeout(() => (document.getElementById('content').scrollTop = document.getElementById('content').scrollHeight));
  }
}
