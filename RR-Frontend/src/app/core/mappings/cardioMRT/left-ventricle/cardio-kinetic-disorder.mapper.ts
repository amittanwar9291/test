import { Injectable } from '@angular/core';

import { CardioKineticDisorderLocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-kinetic-disorder-localizer-ui.model';
import { CardioKineticDisorderLocalizerApiModel } from '@models/cardioMRT/api/left-ventricle/cardio-kinetic-disorder-localizer-api.model';

import { LeftVentricleMappingHelperService } from '@mappings/cardioMRT/left-ventricle/left-ventricle-mapping-helper.service';

@Injectable({
  providedIn: 'root'
})
export class CardioKineticDisorderMapper {
  constructor(private leftVentricleMappingHelperService: LeftVentricleMappingHelperService) {
    automapper
      .createMap('KineticDisorderLocalizer_CardioMRT_UiModel', 'KineticDisorderLocalizer_CardioMRT_ApiModel')
      .convertToType(CardioKineticDisorderLocalizerApiModel);
    automapper
      .createMap('KineticDisorderLocalizer_CardioMRT_ApiModel', 'KineticDisorderLocalizer_CardioMRT_UiModel')
      .convertToType(CardioKineticDisorderLocalizerUiModel);
  }

  mapToAPI(
    source: CardioKineticDisorderLocalizerUiModel,
    out: CardioKineticDisorderLocalizerApiModel
  ): CardioKineticDisorderLocalizerApiModel {
    out = automapper.map('KineticDisorderLocalizer_CardioMRT_UiModel', 'KineticDisorderLocalizer_CardioMRT_ApiModel', source);
    out.akinesiaSections = this.leftVentricleMappingHelperService.mapLocCollectionToLocString(source.akinesiaSections);
    out.dyskinesiaSections = this.leftVentricleMappingHelperService.mapLocCollectionToLocString(source.dyskinesiaSections);
    out.hypokinesiaSections = this.leftVentricleMappingHelperService.mapLocCollectionToLocString(source.hypokinesiaSections);

    return out;
  }

  mapToUI(
    source: CardioKineticDisorderLocalizerApiModel,
    out: CardioKineticDisorderLocalizerUiModel
  ): CardioKineticDisorderLocalizerUiModel {
    out = automapper.map('KineticDisorderLocalizer_CardioMRT_ApiModel', 'KineticDisorderLocalizer_CardioMRT_UiModel', source);
    out.akinesiaSections = this.leftVentricleMappingHelperService.mapLocStringToLocCollection(source.akinesiaSections);
    out.dyskinesiaSections = this.leftVentricleMappingHelperService.mapLocStringToLocCollection(source.dyskinesiaSections);
    out.hypokinesiaSections = this.leftVentricleMappingHelperService.mapLocStringToLocCollection(source.hypokinesiaSections);

    return out;
  }
}
