import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { ModelBase } from '@models/model-base';
import { ExpansionInputsGroupModelInterface } from '@interfaces/controls/expansion-inputs-group-model.interface';

import { merge } from 'lodash';

@Component({
  selector: 'rr-expansion-inputs-group',
  templateUrl: './expansion-inputs-group.component.html',
  styleUrls: ['./expansion-inputs-group.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ExpansionInputsGroupComponent {
  @Input() model: ModelBase;
  @Input('config') set _config(val: ExpansionInputsGroupModelInterface) {
    if (val) {
      merge(this.config, val);
    }
  }

  config: ExpansionInputsGroupModelInterface = {
    isMainHeader: true,
    mainHeaderTranslationKey: '',
    mainHeaderRrId: '',
    size: {
      mandatory: true,
      modelName: '',
      headerTranslationKey: '',
      headerRrId: '',
      inputRrId: '',
      labelTranslationKey: '',
      labelRrId: '',
      min: null,
      max: null,
      placeholder: ''
    },
    secondPlane: {
      modelName: '',
      headerTranslationKey: '',
      headerRrId: '',
      inputRrId: '',
      labelTranslationKey: '',
      labelRrId: '',
      min: null,
      max: null,
      placeholder: ''
    },
    thirdPlane: {
      modelName: '',
      headerTranslationKey: '',
      headerRrId: '',
      inputRrId: '',
      labelTranslationKey: '',
      labelRrId: '',
      min: null,
      max: null,
      placeholder: ''
    }
  };

  constructor() {}

  resetBothPlanes(): void {
    if (!this.model[this.config.size.modelName]) {
      this.model[this.config.secondPlane.modelName] = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model[this.config.secondPlane.modelName]) {
      this.model[this.config.thirdPlane.modelName] = null;
    }
  }
}
