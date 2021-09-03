import { ICardioMultiColorEditorConfig } from '@interfaces/cardio-multi-color-localizer-configs.interface';
import { ColorsEnum } from '@enums/cardioMRT/left-ventricle/colors.enum';

export const LOCALIZERS_DIALOG_STYLING_CONFIG = {
  position: 'relative',
  top: '43px'
};

export const KINETIC_LOCALIZER_EDITOR_CONFIG: ICardioMultiColorEditorConfig = {
  headerTranslationKey: 'cardioMRT.leftVentricle.kineticDisorderEditor.value',
  headerRrID: 'car_m_060214',
  instructionTranslationKey: 'cardioMRT.leftVentricle.pleaseActivateTheColor.value',
  instructionRrID: 'car_m_060215',
  localizerRrID: 'car_m_060210',
  showVessels: false,
  colorPickerConfig: [
    {
      sectionType: 'akinesiaSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.akinesia.value',
      color: ColorsEnum.Purple,
      rrID: 'car_m_060415'
    },
    {
      sectionType: 'dyskinesiaSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.dyskinesia.value',
      color: ColorsEnum.Blue,
      rrID: 'car_m_060416'
    },
    {
      sectionType: 'hypokinesiaSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.hypokinesia.value',
      color: ColorsEnum.Yellow,
      rrID: 'car_m_060417'
    }
  ]
};

export const PERFUSION_LOCALIZER_EDITOR_CONFIG: ICardioMultiColorEditorConfig = {
  headerTranslationKey: 'cardioMRT.leftVentricle.perfusionDefectsEditor.value',
  headerRrID: 'car_m_060216',
  instructionTranslationKey: 'cardioMRT.leftVentricle.pleaseActivateTheColor.value',
  instructionRrID: 'car_m_060217',
  localizerRrID: 'car_m_060305',
  showVessels: false,
  colorPickerConfig: [
    {
      sectionType: 'underStressSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.underStress.value',
      color: ColorsEnum.Purple,
      rrID: 'car_m_060419'
    },
    {
      sectionType: 'inPeaceAndUnderStressSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.atRestUnderStress.value',
      color: ColorsEnum.Blue,
      rrID: 'car_m_060420'
    },
    {
      sectionType: 'inPeaceSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.atRest.value',
      color: ColorsEnum.Yellow,
      rrID: 'car_m_060421'
    }
  ]
};

export const LGE_SEGMENTAL_LOCALIZER_EDITOR_CONFIG: ICardioMultiColorEditorConfig = {
  headerTranslationKey: 'cardioMRT.leftVentricle.lGESegmentalEditor.value',
  headerRrID: 'car_m_060218',
  instructionTranslationKey: 'cardioMRT.leftVentricle.pleaseActivateTheColor.value',
  instructionRrID: 'car_m_060219',
  localizerRrID: 'car_m_060409',
  showVessels: true,
  colorPickerConfig: [
    {
      sectionType: 'trasmuralSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.transmural.value',
      color: ColorsEnum.Purple,
      rrID: 'car_m_060423'
    },
    {
      sectionType: 'subendocardialSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.subendocardial.value',
      color: ColorsEnum.Turquoise,
      rrID: 'car_m_060424'
    },
    {
      sectionType: 'mesocardialSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.mesocardial.value',
      color: ColorsEnum.Blue,
      rrID: 'car_m_060425'
    },
    {
      sectionType: 'subepicardialSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.subepicardial.value',
      color: ColorsEnum.Yellow,
      rrID: 'car_m_060426'
    }
  ]
};

// TODO extract the common part with LGE_SEGMENTAL_LOCALIZER_EDITOR_CONFIG
export const LGE_NOT_SEGMENTAL_LOCALIZER_EDITOR_CONFIG: ICardioMultiColorEditorConfig = {
  headerTranslationKey: 'cardioMRT.leftVentricle.lGENonsegmentalEditor.value',
  headerRrID: 'car_m_060220',
  instructionTranslationKey: 'cardioMRT.leftVentricle.pleaseActivateTheColor.value',
  instructionRrID: 'car_m_060221',
  localizerRrID: 'car_m_060409',
  showVessels: true,
  colorPickerConfig: [
    {
      sectionType: 'trasmuralSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.transmural.value',
      color: ColorsEnum.Purple,
      rrID: 'car_m_060428'
    },
    {
      sectionType: 'subendocardialSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.subendocardial.value',
      color: ColorsEnum.Turquoise,
      rrID: 'car_m_060429'
    },
    {
      sectionType: 'mesocardialSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.mesocardial.value',
      color: ColorsEnum.Blue,
      rrID: 'car_m_060430'
    },
    {
      sectionType: 'subepicardialSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.subepicardial.value',
      color: ColorsEnum.Yellow,
      rrID: 'car_m_060431'
    },
    {
      sectionType: 'pointShapedSections',
      sectionTypeTranslationKey: 'cardioMRT.leftVentricle.punctiform.value',
      color: ColorsEnum.Pink,
      rrID: 'car_m_060432'
    }
  ]
};
