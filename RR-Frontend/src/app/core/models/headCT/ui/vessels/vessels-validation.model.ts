import { IValidationModel, IValidationModelElement } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { VesselsFindingTypeEnum } from '@enums/headCT/vessels/vessels-finding-type.enum';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { ArterialTerritoryTypeEnum } from '@enums/headCT/vessels/ischemia/arterial-territory-type.enum';
import { ArterialSupplyAreaPatternTypeEnum } from '@enums/headCT/vessels/ischemia/arterial-supply-area-pattern-type.enum';
import { PathologyTypeEnum } from '@enums/headCT/vessels/pathology-type.enum';

export const SharedMandatoryElements: IValidationModelElement[] = [
  {
    modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType)
  },
  {
    modelName: nameof<VesselsFindingUiModel>(m => m.severityType),
    validateCondition: {
      modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType),
      requiredValue: PathologyTypeEnum.StenosisOcclusion
    }
  },
  {
    modelName: nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisCalculatedInNASCETInPercentage),
    validateCondition: {
      customConditionFunction: (m: VesselsFindingUiModel) =>
        m.pathologyType === PathologyTypeEnum.StenosisOcclusion &&
        !!m.diameterStenosisInMm &&
        !!m.diameterDiseaseFreePoststenoticSegmentInMm
    },
    customMessage: 'errors.headCT.nascetCalculation'
  }
];

export const VesslesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: VesselsFindingTypeEnum.NormVariant,
      elements: [
        {
          modelName: [
            nameof<VesselsFindingUiModel>(m => m.isRightP1HypoplasiaOrFTPConfiguration),
            nameof<VesselsFindingUiModel>(m => m.isRightP1Aplasia),
            nameof<VesselsFindingUiModel>(m => m.isRightP1SplittingOrDuplication),
            nameof<VesselsFindingUiModel>(m => m.isRightA1Hypoplasia),
            nameof<VesselsFindingUiModel>(m => m.isRightA1Aplasia),
            nameof<VesselsFindingUiModel>(m => m.isRightA1SplittingOrDuplication),
            nameof<VesselsFindingUiModel>(m => m.isRightAcomPHypoplasia),
            nameof<VesselsFindingUiModel>(m => m.isRightAcomPAplasia),
            nameof<VesselsFindingUiModel>(m => m.isRightPICAEndingAV),
            nameof<VesselsFindingUiModel>(m => m.isRightAVHypoplasia),
            nameof<VesselsFindingUiModel>(m => m.isRightAVAplasia),
            nameof<VesselsFindingUiModel>(m => m.isRightTripleACA),
            nameof<VesselsFindingUiModel>(m => m.isRightAcomAHypoplasia),
            nameof<VesselsFindingUiModel>(m => m.isRightAcomAAplasia),
            nameof<VesselsFindingUiModel>(m => m.isRightAcomASplittingOrDuplication),
            nameof<VesselsFindingUiModel>(m => m.isLeftP1HypoplasiaOrFTPConfiguration),
            nameof<VesselsFindingUiModel>(m => m.isLeftP1Aplasia),
            nameof<VesselsFindingUiModel>(m => m.isLeftP1SplittingOrDuplication),
            nameof<VesselsFindingUiModel>(m => m.isLeftA1Hypoplasia),
            nameof<VesselsFindingUiModel>(m => m.isLeftA1Aplasia),
            nameof<VesselsFindingUiModel>(m => m.isLeftA1SplittingOrDuplication),
            nameof<VesselsFindingUiModel>(m => m.isLeftAcomPHypoplasia),
            nameof<VesselsFindingUiModel>(m => m.isLeftAcomPAplasia),
            nameof<VesselsFindingUiModel>(m => m.isLeftPICAEndingAV),
            nameof<VesselsFindingUiModel>(m => m.isLeftAVHypoplasia),
            nameof<VesselsFindingUiModel>(m => m.isLeftAVAplasia),
            nameof<VesselsFindingUiModel>(m => m.isLeftTripleACA),
            nameof<VesselsFindingUiModel>(m => m.isLeftAcomAHypoplasia),
            nameof<VesselsFindingUiModel>(m => m.isLeftAcomAAplasia),
            nameof<VesselsFindingUiModel>(m => m.isLeftAcomASplittingOrDuplication)
          ]
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.Ischemia,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.arterialTerritoryType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.arterialSupplyAreaPatternType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.arterialTerritoryType),
            requiredValue: ArterialTerritoryTypeEnum.ArterialSupplyArea
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.vascularTerritoryLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.arterialSupplyAreaPatternType),
            requiredValue: ArterialSupplyAreaPatternTypeEnum.TypicalAreasOfInfarction
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.vascularTerritoryType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.arterialSupplyAreaPatternType),
            requiredValue: ArterialSupplyAreaPatternTypeEnum.RareTerritorialInfarcts
          }
        },

        {
          modelName: [
            nameof<VesselsFindingUiModel>(m => m.isCorticalVeins),
            nameof<VesselsFindingUiModel>(m => m.isInternalCerebralVeins),
            nameof<VesselsFindingUiModel>(m => m.isRightVeinOfLabbe),
            nameof<VesselsFindingUiModel>(m => m.isLeftVeinOfLabbe),
            nameof<VesselsFindingUiModel>(m => m.isRightSphenoparietalSinus),
            nameof<VesselsFindingUiModel>(m => m.isLeftSphenoparietalSinus)
          ],
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.arterialTerritoryType),
            requiredValue: ArterialTerritoryTypeEnum.VenousVascularTerritories
          }
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.CircleOfWillisAndCerebralArteries,
      elements: [
        ...SharedMandatoryElements,
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.extensionAneurysmInMm),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.Aneurysm
          }
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.CommonCarotidArtery,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType)
        },
        ...SharedMandatoryElements
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.InternalCarotidArtery,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType)
        },
        ...SharedMandatoryElements,
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.extensionAneurysmInMm),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.Aneurysm
          }
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.ExternalCarotidArtery,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType)
        },
        ...SharedMandatoryElements
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.VertebralArtery,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType)
        },
        ...SharedMandatoryElements,
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.extensionAneurysmInMm),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.Aneurysm
          }
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.CerebralVeinsSinusDuraeMatris,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.cerebralVenousThrombosisLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType)
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.DuralAVFistula,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType)
        },
        {
          modelName: [
            nameof<VesselsFindingUiModel>(m => m.isFrontal),
            nameof<VesselsFindingUiModel>(m => m.isTemporal),
            nameof<VesselsFindingUiModel>(m => m.isParietal),
            nameof<VesselsFindingUiModel>(m => m.isOccipital),
            nameof<VesselsFindingUiModel>(m => m.isInfratentorial)
          ]
        }
      ]
    }
  ]
};
