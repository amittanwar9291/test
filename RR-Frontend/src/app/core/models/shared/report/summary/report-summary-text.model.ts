export class ReportSummaryTextModel {
  lang: string;
  text: string;
  actualTextLang: string;

  constructor(lang: string, text: string, actualTextLang: string) {
    this.lang = lang;
    this.text = text;
    this.actualTextLang = actualTextLang;
  }
}
