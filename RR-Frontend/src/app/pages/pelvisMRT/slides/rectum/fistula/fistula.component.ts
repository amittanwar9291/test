import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { FistulaTypeEnum } from '@enums/pelvisMRT/rectum/fistula/fistula-type.enum';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { filter } from 'lodash';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { LocalizationSSLTypeEnum } from '@enums/pelvisMRT/rectum/common/localization-ssl-type.enum';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { omit } from 'lodash';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-fistula',
  templateUrl: './fistula.component.html',
  styleUrls: ['./fistula.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FistulaComponent implements OnChanges {
  @Input() model: RectumFindingUiModel;
  @Input() localizationModel: LocalizationUiModel;
  @Input() fistelDropdownOptions: DropdownModel[];
  @Input() fistulaLocalizationSSLTypeDropdownOptions: DropdownModel[];
  @Input() technologyModel: TechnologyUiModel;
  @Output() openLargeLocaliser = new EventEmitter();

  fistulaType: typeof FistulaTypeEnum;
  localizationSSLType: typeof LocalizationSSLTypeEnum;
  gender: typeof GenderTypeEnum;

  constructor() {
    this.fistulaType = FistulaTypeEnum;
    this.localizationSSLType = LocalizationSSLTypeEnum;
    this.gender = GenderTypeEnum;
  }

  ngOnChanges() {
    if (!this.localizationModel || !this.fistelDropdownOptions) {
      return;
    }

    if (this.localizationModel.patientInformation.gender !== this.gender.Female) {
      filter(this.fistelDropdownOptions, option => {
        if (
          option.value === FistulaTypeEnum.Rectovaginal ||
          option.value === FistulaTypeEnum.Colovaginal ||
          option.value === FistulaTypeEnum.Vesicovaginal ||
          option.value === FistulaTypeEnum.Vesicocervical
        ) {
          return (option.disabled = true);
        }
      });
    }

    if (this.localizationModel.patientInformation.gender === this.gender.Female) {
      this.fistelDropdownOptions.map(option => (option.disabled = false));
    }
  }

  openLargeLocaliserFn() {
    this.openLargeLocaliser.emit();
  }

  clearFistulaModel(): void {
    const omittedProperties = findingBaseProperties.concat([nameof<RectumFindingUiModel>(m => m.fistulaType)]);
    Object.assign(this.model, omit(new RectumFindingUiModel(), omittedProperties));
  }
}
