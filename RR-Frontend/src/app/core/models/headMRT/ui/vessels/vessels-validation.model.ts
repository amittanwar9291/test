import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';
import { FormTypeEnum, ArterialTerritoryTypeEnum, VesselsFindingTypeEnum, LocalizationAneurysmaTypeEnum } from '@enums/headMRT/vessels';

export const VesslesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: VesselsFindingTypeEnum.Ischemia,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.arterialTerritoryType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.formType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.arterialTerritoryType),
            requiredValue: ArterialTerritoryTypeEnum.ArteriaSupplyArea
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.vascularTerritoryType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.formType),
            requiredValue: FormTypeEnum.RareTerritorialInfarcts
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.vascularTerritoryLocations),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.formType),
            requiredValue: FormTypeEnum.TypicalAreasOfInfarction
          }
        },
        {
          modelName: [
            nameof<VesselsFindingUiModel>(m => m.isCorticalVeins),
            nameof<VesselsFindingUiModel>(m => m.isInternalCerebralVeins),
            nameof<VesselsFindingUiModel>(m => m.isSphenoparietalSinusRight),
            nameof<VesselsFindingUiModel>(m => m.isSphenoparietalSinusLeft),
            nameof<VesselsFindingUiModel>(m => m.isVeinOfLabbeRight),
            nameof<VesselsFindingUiModel>(m => m.isVeinOfLabbeLeft)
          ],
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.arterialTerritoryType),
            requiredValue: ArterialTerritoryTypeEnum.VenousVascularTerritories
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.affectedSegmentsOrVesselsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.isVascularOcclusion)
          }
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.CerebralVenousThrombosis,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.cerebralVenousThrombosisLocations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.Aneurysm,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.localizationAneurysmaType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.affectedSegmentsOrVesselsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.localizationAneurysmaType),
            requiredValue: LocalizationAneurysmaTypeEnum.CircleOfWilliscerebral
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.localizationAneurysmaType),
            requiredValue: LocalizationAneurysmaTypeEnum.VertebralArtery
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.localizationAneurysmaType),
            requiredValue: LocalizationAneurysmaTypeEnum.InternalCarotidArtery
          }
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
