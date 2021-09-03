import { PathologyTypeEnum, UpperArteriesFindingTypeEnum } from '@enums/angiographyMRT/upper-arteries';
import { UpperArteriesFindingUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';

export const UpperArteriesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: UpperArteriesFindingTypeEnum.BrachiocephalicTrunk,
      elements: [
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCET),
          validateCondition: {
            customConditionFunction: (m: UpperArteriesFindingUiModel) => !!m.diameterStenosis && !!m.diameterDiseaseFreePoststenoticSegment
          },
          customMessage: 'errors.angiographyMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: UpperArteriesFindingTypeEnum.SubclavianArtery,
      elements: [
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.sideType) },
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCET),
          validateCondition: {
            customConditionFunction: (m: UpperArteriesFindingUiModel) => !!m.diameterStenosis && !!m.diameterDiseaseFreePoststenoticSegment
          },
          customMessage: 'errors.angiographyMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: UpperArteriesFindingTypeEnum.AxillarArtery,
      elements: [
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.sideType) },
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCET),
          validateCondition: {
            customConditionFunction: (m: UpperArteriesFindingUiModel) => !!m.diameterStenosis && !!m.diameterDiseaseFreePoststenoticSegment
          },
          customMessage: 'errors.angiographyMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: UpperArteriesFindingTypeEnum.BrachialArtery,
      elements: [
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.sideType) },
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCET),
          validateCondition: {
            customConditionFunction: (m: UpperArteriesFindingUiModel) => !!m.diameterStenosis && !!m.diameterDiseaseFreePoststenoticSegment
          },
          customMessage: 'errors.angiographyMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: UpperArteriesFindingTypeEnum.UlnarArtery,
      elements: [
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.sideType) },
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCET),
          validateCondition: {
            customConditionFunction: (m: UpperArteriesFindingUiModel) => !!m.diameterStenosis && !!m.diameterDiseaseFreePoststenoticSegment
          },
          customMessage: 'errors.angiographyMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: UpperArteriesFindingTypeEnum.RadialArtery,
      elements: [
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.sideType) },
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCET),
          validateCondition: {
            customConditionFunction: (m: UpperArteriesFindingUiModel) => !!m.diameterStenosis && !!m.diameterDiseaseFreePoststenoticSegment
          },
          customMessage: 'errors.angiographyMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: UpperArteriesFindingTypeEnum.DeepPalmarArch,
      elements: [
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.sideType) },
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        }
      ]
    },
    {
      findingName: UpperArteriesFindingTypeEnum.SuperficialPalmarArch,
      elements: [
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.sideType) },
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        }
      ]
    },
    {
      findingName: UpperArteriesFindingTypeEnum.CommonPalmarDigitalArteries,
      elements: [
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.sideType) },
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        }
      ]
    },
    {
      findingName: UpperArteriesFindingTypeEnum.ProperPalmarDigitalArteries,
      elements: [
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.sideType) },
        { modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<UpperArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        }
      ]
    },
    {
      findingName: UpperArteriesFindingTypeEnum.DiffuseVascularPathology,
      elements: [
        {
          modelName: nameof<UpperArteriesFindingUiModel>(m => m.differentialDiagnosis1)
        },
        {
          modelName: [
            nameof<UpperArteriesFindingUiModel>(m => m.isBrachiocephalicTrunk),
            nameof<UpperArteriesFindingUiModel>(m => m.isRightSubclavianArtery),
            nameof<UpperArteriesFindingUiModel>(m => m.isRightAxillarArtery),
            nameof<UpperArteriesFindingUiModel>(m => m.isRightBrachialArtery),
            nameof<UpperArteriesFindingUiModel>(m => m.isRightUlnarArtery),
            nameof<UpperArteriesFindingUiModel>(m => m.isRightRadialArtery),
            nameof<UpperArteriesFindingUiModel>(m => m.isRightDeepPalmarArch),
            nameof<UpperArteriesFindingUiModel>(m => m.isRightSuperficialPalmarArch),
            nameof<UpperArteriesFindingUiModel>(m => m.isRightPalmarDigitalArteries),
            nameof<UpperArteriesFindingUiModel>(m => m.isLeftSubclavianArtery),
            nameof<UpperArteriesFindingUiModel>(m => m.isLeftAxillarArtery),
            nameof<UpperArteriesFindingUiModel>(m => m.isLeftBrachialArtery),
            nameof<UpperArteriesFindingUiModel>(m => m.isLeftUlnarArtery),
            nameof<UpperArteriesFindingUiModel>(m => m.isLeftRadialArtery),
            nameof<UpperArteriesFindingUiModel>(m => m.isLeftDeepPalmarArch),
            nameof<UpperArteriesFindingUiModel>(m => m.isLeftSuperficialPalmarArch),
            nameof<UpperArteriesFindingUiModel>(m => m.isLeftPalmarDigitalArteries)
          ]
        }
      ]
    }
  ]
};
