import { Injectable } from '@angular/core';

import { CardioLGELocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-LGE-localizer-ui.model';
import { CardioLGELocalizerApiModel } from '@models/cardioMRT/api/left-ventricle/cardio-LGE-localizer-api.model';

import { LeftVentricleMappingHelperService } from '@mappings/cardioMRT/left-ventricle/left-ventricle-mapping-helper.service';

@Injectable({
  providedIn: 'root'
})
export class CardioLGEMapper {
  constructor(private leftVentricleMappingHelperService: LeftVentricleMappingHelperService) {
    automapper.createMap('LGELocalizer_CardioMRT_UiModel', 'LGELocalizer_CardioMRT_ApiModel').convertToType(CardioLGELocalizerApiModel);
    automapper.createMap('LGELocalizer_CardioMRT_ApiModel', 'LGELocalizer_CardioMRT_UiModel').convertToType(CardioLGELocalizerUiModel);
  }

  mapToAPI(source: CardioLGELocalizerUiModel, out: CardioLGELocalizerApiModel): CardioLGELocalizerApiModel {
    out = automapper.map('LGELocalizer_CardioMRT_UiModel', 'LGELocalizer_CardioMRT_ApiModel', source);

    out.trasmuralSections = this.leftVentricleMappingHelperService.mapLocCollectionToLocString(source.trasmuralSections);
    out.subendocardialSections = this.leftVentricleMappingHelperService.mapLocCollectionToLocString(source.subendocardialSections);
    out.mesocardialSections = this.leftVentricleMappingHelperService.mapLocCollectionToLocString(source.mesocardialSections);
    out.subepicardialSections = this.leftVentricleMappingHelperService.mapLocCollectionToLocString(source.subepicardialSections);
    out.pointShapedSections = this.leftVentricleMappingHelperService.mapLocCollectionToLocString(source.pointShapedSections);

    return out;
  }

  mapToUI(source: CardioLGELocalizerApiModel, out: CardioLGELocalizerUiModel): CardioLGELocalizerUiModel {
    out = automapper.map('LGELocalizer_CardioMRT_ApiModel', 'LGELocalizer_CardioMRT_UiModel', source);

    out.trasmuralSections = this.leftVentricleMappingHelperService.mapLocStringToLocCollection(source.trasmuralSections);
    out.subendocardialSections = this.leftVentricleMappingHelperService.mapLocStringToLocCollection(source.subendocardialSections);
    out.mesocardialSections = this.leftVentricleMappingHelperService.mapLocStringToLocCollection(source.mesocardialSections);
    out.subepicardialSections = this.leftVentricleMappingHelperService.mapLocStringToLocCollection(source.subepicardialSections);
    out.pointShapedSections = this.leftVentricleMappingHelperService.mapLocStringToLocCollection(source.pointShapedSections);

    return out;
  }
}
