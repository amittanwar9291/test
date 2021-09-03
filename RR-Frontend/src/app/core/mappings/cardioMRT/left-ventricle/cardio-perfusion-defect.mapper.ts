import { Injectable } from '@angular/core';

import { CardioPerfusionDefectLocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-perfusion-defect-localizer-ui.model';
import { CardioPerfusionDefectLocalizerApiModel } from '@models/cardioMRT/api/left-ventricle/cardio-perfusion-defect-localizer-api.model';

import { LeftVentricleMappingHelperService } from '@mappings/cardioMRT/left-ventricle/left-ventricle-mapping-helper.service';

@Injectable({
  providedIn: 'root'
})
export class CardioPerfusionDefectMapper {
  constructor(private leftVentricleMappingHelperService: LeftVentricleMappingHelperService) {
    automapper
      .createMap('PerfusionDefectLocalizer_CardioMRT_UiModel', 'PerfusionDefectLocalizer_CardioMRT_ApiModel')
      .convertToType(CardioPerfusionDefectLocalizerApiModel);
    automapper
      .createMap('PerfusionDefectLocalizer_CardioMRT_ApiModel', 'PerfusionDefectLocalizer_CardioMRT_UiModel')
      .convertToType(CardioPerfusionDefectLocalizerUiModel);
  }

  mapToAPI(
    source: CardioPerfusionDefectLocalizerUiModel,
    out: CardioPerfusionDefectLocalizerApiModel
  ): CardioPerfusionDefectLocalizerApiModel {
    out = automapper.map('PerfusionDefectLocalizer_CardioMRT_UiModel', 'PerfusionDefectLocalizer_CardioMRT_ApiModel', source);
    out.underStressSections = this.leftVentricleMappingHelperService.mapLocCollectionToLocString(source.underStressSections);
    out.inPeaceAndUnderStressSections = this.leftVentricleMappingHelperService.mapLocCollectionToLocString(
      source.inPeaceAndUnderStressSections
    );
    out.inPeaceSections = this.leftVentricleMappingHelperService.mapLocCollectionToLocString(source.inPeaceSections);

    return out;
  }

  mapToUI(
    source: CardioPerfusionDefectLocalizerApiModel,
    out: CardioPerfusionDefectLocalizerUiModel
  ): CardioPerfusionDefectLocalizerUiModel {
    out = automapper.map('PerfusionDefectLocalizer_CardioMRT_ApiModel', 'PerfusionDefectLocalizer_CardioMRT_UiModel', source);
    out.underStressSections = this.leftVentricleMappingHelperService.mapLocStringToLocCollection(source.underStressSections);
    out.inPeaceAndUnderStressSections = this.leftVentricleMappingHelperService.mapLocStringToLocCollection(
      source.inPeaceAndUnderStressSections
    );
    out.inPeaceSections = this.leftVentricleMappingHelperService.mapLocStringToLocCollection(source.inPeaceSections);

    return out;
  }
}
