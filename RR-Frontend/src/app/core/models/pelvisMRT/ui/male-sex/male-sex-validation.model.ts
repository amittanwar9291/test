import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { MaleSexFindingUiModel } from './male-sex-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { MaleGenderFindingType } from '@enums/pelvisMRT/male-sex/male-sex-finding-types.enum';

export const MaleSexValidationModel: IValidationModel = {
  finding: [
    {
      findingName: MaleGenderFindingType.PenisTrauma,
      elements: [
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.tunicaAlbugineaType)
        },
        {
          modelName: [
            nameof<MaleSexFindingUiModel>(m => m.isCorpusCavernosumRight),
            nameof<MaleSexFindingUiModel>(m => m.isCorpusCavernosumLeft),
            nameof<MaleSexFindingUiModel>(m => m.isCorpusSpongiosum)
          ],
          validateCondition: { modelName: nameof<MaleSexFindingUiModel>(m => m.tunicaAlbugineaType), requiredValue: 'Discontinuity' }
        }
      ]
    },
    {
      findingName: MaleGenderFindingType.PenisInfectionInflammation,
      elements: [
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.differentialDiagnosisInfection01Type)
        }
      ]
    },
    {
      findingName: MaleGenderFindingType.PenisMass,
      elements: [
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.mainFeaturesLocalizationType)
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.directionType),
          validateCondition: {
            modelName: nameof<MaleSexFindingUiModel>(m => m.mainFeaturesLocalizationType),
            requiredValue: 'CorpusCavernosum'
          }
        },
        {
          modelName: [
            nameof<MaleSexFindingUiModel>(m => m.corpusCavernosumLeft),
            nameof<MaleSexFindingUiModel>(m => m.corpusCavernosumRight)
          ],
          validateCondition: { modelName: nameof<MaleSexFindingUiModel>(m => m.isAdjacentStructuresCorpusCavernosum), requiredValue: true }
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.penisMassHomogeneity01Type)
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.differentialDiagnosisMainFeatures01Type),
          validateCondition: {
            modelName: nameof<MaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IKnow'
          }
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.differentialDiagnosisPenisMass01Type),
          validateCondition: {
            modelName: nameof<MaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IDescribe'
          }
        }
      ]
    },
    {
      findingName: MaleGenderFindingType.ScrotumTrauma,
      elements: [
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.testiclesType)
        },
        {
          modelName: [
            nameof<MaleSexFindingUiModel>(m => m.isDiscontinuityOfTheTunicaAlbugineaLeft),
            nameof<MaleSexFindingUiModel>(m => m.isDiscontinuityOfTheTunicaAlbugineaRight)
          ],
          validateCondition: {
            modelName: nameof<MaleSexFindingUiModel>(m => m.testiclesType),
            requiredValue: 'DiscontinuityOfTheTunicaAlbuginea'
          }
        }
      ]
    },
    {
      findingName: MaleGenderFindingType.ScrotumCryptorchidism,
      elements: [
        {
          modelName: [
            nameof<MaleSexFindingUiModel>(m => m.isCryptorchidismLeft),
            nameof<MaleSexFindingUiModel>(m => m.isCryptorchidismRight)
          ]
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.localizationOfTheNondescendedType)
        }
      ]
    },
    {
      findingName: MaleGenderFindingType.ScrotumInfectionInflammation,
      elements: []
    },
    {
      findingName: MaleGenderFindingType.ScrotumMass,
      elements: [
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.differentialDiagnosisScrotumMassType),
          validateCondition: { modelName: nameof<MaleSexFindingUiModel>(m => m.descriptionType), requiredValue: 'IKnow' }
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.differentialDiagnosisScrotumMassType01),
          validateCondition: { modelName: nameof<MaleSexFindingUiModel>(m => m.descriptionType), requiredValue: 'IDescribe' }
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.scrotumMassLocalizationType)
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.scrotumMassHomogeneity01Type)
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.directionType),
          validateCondition: {
            modelName: nameof<MaleSexFindingUiModel>(m => m.scrotumMassLocalizationType)
          }
        },
        {
          modelName: [
            nameof<MaleSexFindingUiModel>(m => m.isEnlargedTesticleLeft),
            nameof<MaleSexFindingUiModel>(m => m.isEnlargedTesticleRight)
          ],
          validateCondition: { modelName: nameof<MaleSexFindingUiModel>(m => m.isEnlargedTesticle), requiredValue: true }
        },
        {
          modelName: [
            nameof<MaleSexFindingUiModel>(m => m.isEnlargedEpididymisLeft),
            nameof<MaleSexFindingUiModel>(m => m.isEnlargedEpididymisRight)
          ],
          validateCondition: { modelName: nameof<MaleSexFindingUiModel>(m => m.isEnlargedEpididymis), requiredValue: true }
        },
        {
          modelName: [
            nameof<MaleSexFindingUiModel>(m => m.isDuctusDeferensRight),
            nameof<MaleSexFindingUiModel>(m => m.isDuctusDeferensLeft)
          ],
          validateCondition: { modelName: nameof<MaleSexFindingUiModel>(m => m.isVasDeferens), requiredValue: true }
        },
        {
          modelName: [
            nameof<MaleSexFindingUiModel>(m => m.isTesticularArteryRight),
            nameof<MaleSexFindingUiModel>(m => m.isTesticularArteryLeft)
          ],
          validateCondition: { modelName: nameof<MaleSexFindingUiModel>(m => m.isTesticularArtery), requiredValue: true }
        }
      ]
    },
    {
      findingName: MaleGenderFindingType.SeminalVesiclesInfectionInflammation,
      elements: [
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.directionType)
        }
      ]
    },
    {
      findingName: MaleGenderFindingType.SeminalVesiclesMass,
      elements: [
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.differentialDiagnosisSeminalVesiclesMassMainFeatures01Type),
          validateCondition: { modelName: nameof<MaleSexFindingUiModel>(m => m.descriptionType), requiredValue: 'IKnow' }
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.differentialDiagnosisSeminalVesiclesMass01Type),
          validateCondition: { modelName: nameof<MaleSexFindingUiModel>(m => m.descriptionType), requiredValue: 'IDescribe' }
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.directionType)
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: [
            nameof<MaleSexFindingUiModel>(m => m.isDuctusDeferensLeft),
            nameof<MaleSexFindingUiModel>(m => m.isDuctusDeferensRight)
          ],
          validateCondition: { modelName: nameof<MaleSexFindingUiModel>(m => m.isVasDeferens), requiredValue: true }
        },
        {
          modelName: nameof<MaleSexFindingUiModel>(m => m.marginType)
        }
      ]
    }
  ]
};
