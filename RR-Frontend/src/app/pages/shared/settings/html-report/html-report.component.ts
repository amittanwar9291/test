import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'rr-html-befund',
  templateUrl: './html-report.component.html',
  styleUrls: ['./html-report.component.scss']
})
export class HtmlReportComponent implements OnInit {
  // HTML Template
  bodyInput: string;
  menuItems: MenuItem[];
  footerInput: string;
  htmlContent = '';

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote'
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1'
      }
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']]
  };

  constructor() {}

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Header'
      },
      {
        label: 'Body',
        items: [
          {
            label: 'HTML',
            items: []
          },
          { separator: true },
          {
            label: 'CSS',
            items: []
          }
        ]
      },
      {
        label: 'Footer'
      }
    ];
  }

  resetHtml(): void {
    // TODO
  }

  saveHtml(): void {
    // TODO
  }
}
