import { TextReportUiModel } from './text-report-ui';

export class ReportPageViewModel {
  isDiscussion: boolean;
  isLocalizer: boolean;
  isReferenceImage: boolean;
  isICD10: boolean;
  isSignature: boolean;
  isEdit: boolean;
  selectedLangDoctor: string;
  selectedLangPatient: string;
  discussion: string;
  signature: string;
  isApproved: boolean;

  constructor() {
    this.isDiscussion = false;
    this.isLocalizer = false;
    this.isReferenceImage = false;
    this.isICD10 = false;
    this.isSignature = false;
    this.isEdit = false;
    this.selectedLangDoctor = 'de';
    this.selectedLangPatient = 'de';
    this.discussion = null;
    this.signature = null;
    this.isApproved = false;
  }

  clear() {
    this.isApproved = false;
    this.isDiscussion = false;
    this.isLocalizer = false;
    this.isReferenceImage = false;
    this.isICD10 = false;
    this.isEdit = false;
    this.discussion = null;
  }

  restoreFlagsFromTextReport(textReport: TextReportUiModel, user: any = null) {
    this.isLocalizer = textReport.isLocalizer;
    this.isReferenceImage = textReport.isReferenceImage;
    this.isICD10 = textReport.isICD10;
    if (user) {
      this.selectedLangDoctor = user.languageDoctorFindings.toLowerCase();
      this.selectedLangPatient = user.languagePatientFindings.toLowerCase();
    }
  }

  setDiscussion(newDiscussion: string) {
    if (newDiscussion) {
      this.isDiscussion = true;
      this.discussion = newDiscussion;
    } else {
      this.isDiscussion = false;
      this.discussion = null;
    }
  }
}
