import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { LungParenchymaFindingUiModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { LungParenchymaLargeLocalizerConfig } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-large-localizer-config.model';
import { MorphologyEditorDialogData } from '@models/thoraxMRT/ui/lung-parenchyma/morphology-editor-dialog-data.model';

@Injectable({
  providedIn: 'root'
})
export class LungParenchymaHelperService {
  largeLocalizerOpen = new BehaviorSubject<LungParenchymaLargeLocalizerConfig>(null);
  isCMYes = new BehaviorSubject<boolean>(null);
  currentTabIndex = new BehaviorSubject<number>(0);
  morphologyQuantitativeEditorValueUpdate = new BehaviorSubject<MorphologyEditorDialogData>(null);

  morphologyQuantitativeLocalizers = {
    bronchiectasisOrWallThickeningLocalizer: {
      title: 'thoraxMRT.shared.morphologyEditor.editorBronchiectasisWallThickening.value',
      rrids: ['tho_m_0502117', 'tho_m_0502120', 'tho_m_0502121'],
      modelProp: nameof<LungParenchymaFindingUiModel>(m => m.bronchiectasisOrWallThickeningLocalizer)
    },
    mucusPlaqueLocalizer: {
      title: 'thoraxMRT.shared.morphologyEditor.editorMucusPlaque.value',
      rrids: ['tho_m_0502128', 'tho_m_0502129', 'tho_m_0502130'],
      modelProp: nameof<LungParenchymaFindingUiModel>(m => m.mucusPlaqueLocalizer)
    },
    sacculationOrAbscessLocalizer: {
      title: 'thoraxMRT.shared.morphologyEditor.editorSacculationAbscess.value',
      rrids: ['tho_m_0502122', 'tho_m_0502123', 'tho_m_0502124'],
      modelProp: nameof<LungParenchymaFindingUiModel>(m => m.sacculationOrAbscessLocalizer)
    },
    consolidationLocalizer: {
      title: 'thoraxMRT.shared.morphologyEditor.editorConsolidation.value',
      rrids: ['tho_m_0502131', 'tho_m_0502132', 'tho_m_0502133'],
      modelProp: nameof<LungParenchymaFindingUiModel>(m => m.consolidationLocalizer)
    },
    otherAbnormalityLocalizer: {
      title: 'thoraxMRT.shared.morphologyEditor.editorOtherAbnormality.value',
      rrids: ['tho_m_0502125', 'tho_m_0502126', 'tho_m_0502127'],
      modelProp: nameof<LungParenchymaFindingUiModel>(m => m.otherAbnormalityLocalizer)
    },
    functionLocalizer: {
      title: 'thoraxMRT.shared.morphologyEditor.editorFunctionPerfusionDisorder.value',
      rrids: ['tho_m_0502134', 'tho_m_0502135', 'tho_m_0502136'],
      modelProp: nameof<LungParenchymaFindingUiModel>(m => m.functionLocalizer)
    }
  };

  morphologyDescriptiveLocalizers = {
    bronchiectasisOrWallThickeningLocation: nameof<LungParenchymaFindingUiModel>(m => m.bronchiectasisOrWallThickeningLocation),
    mucusPlaqueLocation: nameof<LungParenchymaFindingUiModel>(m => m.mucusPlaqueLocation),
    sacculationOrAbscessLocation: nameof<LungParenchymaFindingUiModel>(m => m.sacculationOrAbscessLocation),
    consolidationLocation: nameof<LungParenchymaFindingUiModel>(m => m.consolidationLocation),
    perfusionDisorderLocation: nameof<LungParenchymaFindingUiModel>(m => m.perfusionDisorderLocation)
  };
}
