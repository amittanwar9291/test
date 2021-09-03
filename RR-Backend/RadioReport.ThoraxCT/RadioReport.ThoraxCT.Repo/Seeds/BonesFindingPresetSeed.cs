using System.Collections.Generic;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Repo.Seeds
{
    internal static class BonesFindingPresetSeed
    {
        internal static List<BonesFindingPreset> GetPreconfiguredPresets()
        {
            return new List<BonesFindingPreset>
            {
                #region MassClavicle

                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Hemangioma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.Intact,
                    FormType = FormType.Round,
                    IsPunctiformHyperintens = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.BoneIslandEnostoses,
                    MarginType = MarginType.BrushShaped,
                    FormType = FormType.Oval,
                    IsSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.AneurysmaticBoneCyst,
                    MarginType = MarginType.WellDefined,
                    IsSepta = true,
                    IsLiquidLevel = true,
                    IsOsteolytic = true,
                    IsScleroticBorder = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.EosinophilicGranuloma,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteoidOsteoma,
                    MarginType = MarginType.WellDefined,
                    IsNidus = true,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteoblastoma,
                    MatrixType = MatrixType.Osseous,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteochondroma,
                    IsPedunculatedGrowingFromTheEpiphysis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chondroblastoma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    MatrixType = MatrixType.Chondroid,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.FibrousDysplasia,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsCystic = true,
                    IsGroundGlassAspect = true,
                    IsExpansion = true,
                    PeriostealReactionType = PeriostealReactionType.Missing,
                    IsAdjacentSclerosis = true,
                    AdjacentSclerosisType = AdjacentSclerosisType.Broad
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Enchondroma,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    FormType = FormType.Round,
                    MatrixType = MatrixType.Chondroid,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Missing
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.IntraosseousLipoma,
                    MarginType = MarginType.WellDefined,
                    DensityType = DensityType.FatEquivalent,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Central,
                    IsFatty = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.IntraosseousCyst,
                    MarginType = MarginType.WellDefined,
                    IsOsteolytic = true,
                    IsSubchondral = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.GiantCellTumor,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chondrosarcoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    MatrixType = MatrixType.Chondroid,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Dystrophic,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Continuously,
                    IsRemodelling = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chordoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Dystrophic,
                    IsOsteolytic = true,
                    IsInfiltrationOfAdjacentSoftTissue = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteosarcoma,
                    MatrixType = MatrixType.Osseous,
                    IsOsteolytic = true,
                    IsInfiltrationOfAdjacentSoftTissue = true,
                    PeriostealReactionType = PeriostealReactionType.Interrupted,
                    IsSunburst = true,
                    IsCodmanTriangle = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.EwingSarcoma,
                    MarginType = MarginType.IllDefined,
                    IsInfiltrationOfAdjacentSoftTissue = true,
                    PeriostealReactionType = PeriostealReactionType.Interrupted,
                    IsSpiculated = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteolyticMetastasis,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteoblasticMetastasis,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteolyticAndOsteoblasticMetastasis,
                    IsOsteolytic = true,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Lymphoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Plasmocytoma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.MultipleMyeloma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true,
                    IsMoreThanOneLesion = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.MultipleMyeloma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true,
                    IsMoreThanOneLesion = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteomyelitis,
                    MarginType = MarginType.IllDefined,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Continuously,
                    IsRemodelling = true,
                    IsOsteoproliferativeReaction = true,
                    IsBoneApposition = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassClavicle,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.BoneInfarction,
                    IsScleroticBorder = true,
                    IsGeographic = true
                },

                #endregion

                #region MassScapula

                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Hemangioma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.Intact,
                    FormType = FormType.Round,
                    IsPunctiformHyperintens = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.BoneIslandEnostoses,
                    MarginType = MarginType.BrushShaped,
                    FormType = FormType.Oval,
                    IsSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.AneurysmaticBoneCyst,
                    MarginType = MarginType.WellDefined,
                    IsSepta = true,
                    IsLiquidLevel = true,
                    IsOsteolytic = true,
                    IsScleroticBorder = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.EosinophilicGranuloma,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteoidOsteoma,
                    MarginType = MarginType.WellDefined,
                    IsNidus = true,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteoblastoma,
                    MatrixType = MatrixType.Osseous,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteochondroma,
                    IsPedunculatedGrowingFromTheEpiphysis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chondroblastoma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    MatrixType = MatrixType.Chondroid,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.FibrousDysplasia,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsCystic = true,
                    IsGroundGlassAspect = true,
                    IsExpansion = true,
                    PeriostealReactionType = PeriostealReactionType.Missing,
                    IsAdjacentSclerosis = true,
                    AdjacentSclerosisType = AdjacentSclerosisType.Broad
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Enchondroma,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    FormType = FormType.Round,
                    MatrixType = MatrixType.Chondroid,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Missing
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.IntraosseousLipoma,
                    MarginType = MarginType.WellDefined,
                    DensityType = DensityType.FatEquivalent,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Central,
                    IsFatty = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.IntraosseousCyst,
                    MarginType = MarginType.WellDefined,
                    IsOsteolytic = true,
                    IsSubchondral = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.GiantCellTumor,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chondrosarcoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    MatrixType = MatrixType.Chondroid,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Dystrophic,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Continuously,
                    IsRemodelling = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chordoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Dystrophic,
                    IsOsteolytic = true,
                    IsInfiltrationOfAdjacentSoftTissue = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteosarcoma,
                    MatrixType = MatrixType.Osseous,
                    IsOsteolytic = true,
                    IsInfiltrationOfAdjacentSoftTissue = true,
                    PeriostealReactionType = PeriostealReactionType.Interrupted,
                    IsSunburst = true,
                    IsCodmanTriangle = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.EwingSarcoma,
                    MarginType = MarginType.IllDefined,
                    IsInfiltrationOfAdjacentSoftTissue = true,
                    PeriostealReactionType = PeriostealReactionType.Interrupted,
                    IsSpiculated = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteolyticMetastasis,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteoblasticMetastasis,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteolyticAndOsteoblasticMetastasis,
                    IsOsteolytic = true,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Lymphoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Plasmocytoma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.MultipleMyeloma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true,
                    IsMoreThanOneLesion = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.MultipleMyeloma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true,
                    IsMoreThanOneLesion = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteomyelitis,
                    MarginType = MarginType.IllDefined,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Continuously,
                    IsRemodelling = true,
                    IsOsteoproliferativeReaction = true,
                    IsBoneApposition = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassScapula,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.BoneInfarction,
                    IsScleroticBorder = true,
                    IsGeographic = true
                },

                #endregion

                #region MassRibs

                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Hemangioma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.Intact,
                    FormType = FormType.Round,
                    IsPunctiformHyperintens = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.BoneIslandEnostoses,
                    MarginType = MarginType.BrushShaped,
                    FormType = FormType.Oval,
                    IsSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.AneurysmaticBoneCyst,
                    MarginType = MarginType.WellDefined,
                    IsSepta = true,
                    IsLiquidLevel = true,
                    IsOsteolytic = true,
                    IsScleroticBorder = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.EosinophilicGranuloma,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteoidOsteoma,
                    MarginType = MarginType.WellDefined,
                    IsNidus = true,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteoblastoma,
                    MatrixType = MatrixType.Osseous,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteochondroma,
                    IsPedunculatedGrowingFromTheEpiphysis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chondroblastoma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    MatrixType = MatrixType.Chondroid,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.FibrousDysplasia,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsCystic = true,
                    IsGroundGlassAspect = true,
                    IsExpansion = true,
                    PeriostealReactionType = PeriostealReactionType.Missing,
                    IsAdjacentSclerosis = true,
                    AdjacentSclerosisType = AdjacentSclerosisType.Broad
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Enchondroma,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    FormType = FormType.Round,
                    MatrixType = MatrixType.Chondroid,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Missing
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.IntraosseousLipoma,
                    MarginType = MarginType.WellDefined,
                    DensityType = DensityType.FatEquivalent,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Central,
                    IsFatty = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.IntraosseousCyst,
                    MarginType = MarginType.WellDefined,
                    IsOsteolytic = true,
                    IsSubchondral = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.GiantCellTumor,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chondrosarcoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    MatrixType = MatrixType.Chondroid,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Dystrophic,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Continuously,
                    IsRemodelling = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chordoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Dystrophic,
                    IsOsteolytic = true,
                    IsInfiltrationOfAdjacentSoftTissue = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteosarcoma,
                    MatrixType = MatrixType.Osseous,
                    IsOsteolytic = true,
                    IsInfiltrationOfAdjacentSoftTissue = true,
                    PeriostealReactionType = PeriostealReactionType.Interrupted,
                    IsSunburst = true,
                    IsCodmanTriangle = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.EwingSarcoma,
                    MarginType = MarginType.IllDefined,
                    IsInfiltrationOfAdjacentSoftTissue = true,
                    PeriostealReactionType = PeriostealReactionType.Interrupted,
                    IsSpiculated = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteolyticMetastasis,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteoblasticMetastasis,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteolyticAndOsteoblasticMetastasis,
                    IsOsteolytic = true,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Lymphoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Plasmocytoma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.MultipleMyeloma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true,
                    IsMoreThanOneLesion = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.MultipleMyeloma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true,
                    IsMoreThanOneLesion = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteomyelitis,
                    MarginType = MarginType.IllDefined,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Continuously,
                    IsRemodelling = true,
                    IsOsteoproliferativeReaction = true,
                    IsBoneApposition = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassRibs,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.BoneInfarction,
                    IsScleroticBorder = true,
                    IsGeographic = true
                },

                #endregion

                #region MassSternum

                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Hemangioma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.Intact,
                    FormType = FormType.Round,
                    IsPunctiformHyperintens = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.BoneIslandEnostoses,
                    MarginType = MarginType.BrushShaped,
                    FormType = FormType.Oval,
                    IsSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.AneurysmaticBoneCyst,
                    MarginType = MarginType.WellDefined,
                    IsSepta = true,
                    IsLiquidLevel = true,
                    IsOsteolytic = true,
                    IsScleroticBorder = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.EosinophilicGranuloma,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteoidOsteoma,
                    MarginType = MarginType.WellDefined,
                    IsNidus = true,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteoblastoma,
                    MatrixType = MatrixType.Osseous,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteochondroma,
                    IsPedunculatedGrowingFromTheEpiphysis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chondroblastoma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    MatrixType = MatrixType.Chondroid,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.FibrousDysplasia,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsCystic = true,
                    IsGroundGlassAspect = true,
                    IsExpansion = true,
                    PeriostealReactionType = PeriostealReactionType.Missing,
                    IsAdjacentSclerosis = true,
                    AdjacentSclerosisType = AdjacentSclerosisType.Broad
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Enchondroma,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    FormType = FormType.Round,
                    MatrixType = MatrixType.Chondroid,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Missing
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.IntraosseousLipoma,
                    MarginType = MarginType.WellDefined,
                    DensityType = DensityType.FatEquivalent,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Central,
                    IsFatty = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.IntraosseousCyst,
                    MarginType = MarginType.WellDefined,
                    IsOsteolytic = true,
                    IsSubchondral = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.GiantCellTumor,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chondrosarcoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    MatrixType = MatrixType.Chondroid,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Dystrophic,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Continuously,
                    IsRemodelling = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chordoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Dystrophic,
                    IsOsteolytic = true,
                    IsInfiltrationOfAdjacentSoftTissue = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteosarcoma,
                    MatrixType = MatrixType.Osseous,
                    IsOsteolytic = true,
                    IsInfiltrationOfAdjacentSoftTissue = true,
                    PeriostealReactionType = PeriostealReactionType.Interrupted,
                    IsSunburst = true,
                    IsCodmanTriangle = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.EwingSarcoma,
                    MarginType = MarginType.IllDefined,
                    IsInfiltrationOfAdjacentSoftTissue = true,
                    PeriostealReactionType = PeriostealReactionType.Interrupted,
                    IsSpiculated = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteolyticMetastasis,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteoblasticMetastasis,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteolyticAndOsteoblasticMetastasis,
                    IsOsteolytic = true,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Lymphoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Plasmocytoma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.MultipleMyeloma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true,
                    IsMoreThanOneLesion = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.MultipleMyeloma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true,
                    IsMoreThanOneLesion = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteomyelitis,
                    MarginType = MarginType.IllDefined,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Continuously,
                    IsRemodelling = true,
                    IsOsteoproliferativeReaction = true,
                    IsBoneApposition = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSternum,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.BoneInfarction,
                    IsScleroticBorder = true,
                    IsGeographic = true
                },

                #endregion

                #region MassSpine

                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Hemangioma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.Intact,
                    FormType = FormType.Round,
                    IsPunctiformHyperintens = true,
                    IsVertebralHemangioma = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.BoneIslandEnostoses,
                    MarginType = MarginType.BrushShaped,
                    FormType = FormType.Oval,
                    IsSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.AneurysmaticBoneCyst,
                    MarginType = MarginType.WellDefined,
                    IsSepta = true,
                    IsLiquidLevel = true,
                    IsOsteolytic = true,
                    IsScleroticBorder = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.EosinophilicGranuloma,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteoidOsteoma,
                    MarginType = MarginType.WellDefined,
                    IsNidus = true,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteoblastoma,
                    MatrixType = MatrixType.Osseous,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteochondroma,
                    IsPedunculatedGrowingFromTheEpiphysis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chondroblastoma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    MatrixType = MatrixType.Chondroid,
                    IsOsteolytic = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.FibrousDysplasia,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsCystic = true,
                    IsGroundGlassAspect = true,
                    IsExpansion = true,
                    PeriostealReactionType = PeriostealReactionType.Missing,
                    IsAdjacentSclerosis = true,
                    AdjacentSclerosisType = AdjacentSclerosisType.Broad
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Enchondroma,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    FormType = FormType.Round,
                    MatrixType = MatrixType.Chondroid,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Missing
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.IntraosseousLipoma,
                    MarginType = MarginType.WellDefined,
                    DensityType = DensityType.FatEquivalent,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Central,
                    IsFatty = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.IntraosseousCyst,
                    MarginType = MarginType.WellDefined,
                    IsOsteolytic = true,
                    IsSubchondral = true,
                    IsAdjacentSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.GiantCellTumor,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chondrosarcoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    MatrixType = MatrixType.Chondroid,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Dystrophic,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Continuously,
                    IsRemodelling = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Chordoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    IsCalcification = true,
                    CalcificationType = CalcificationType.Dystrophic,
                    IsOsteolytic = true,
                    IsInfiltrationOfAdjacentSoftTissue = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteosarcoma,
                    MatrixType = MatrixType.Osseous,
                    IsOsteolytic = true,
                    IsInfiltrationOfAdjacentSoftTissue = true,
                    PeriostealReactionType = PeriostealReactionType.Interrupted,
                    IsSunburst = true,
                    IsCodmanTriangle = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.EwingSarcoma,
                    MarginType = MarginType.IllDefined,
                    IsInfiltrationOfAdjacentSoftTissue = true,
                    PeriostealReactionType = PeriostealReactionType.Interrupted,
                    IsSpiculated = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteolyticMetastasis,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteoblasticMetastasis,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.OsteolyticAndOsteoblasticMetastasis,
                    IsOsteolytic = true,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Lymphoma,
                    CorticalBoneType = CorticalBoneType.Destruction,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Plasmocytoma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.MultipleMyeloma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true,
                    IsMoreThanOneLesion = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.MultipleMyeloma,
                    MarginType = MarginType.WellDefined,
                    CorticalBoneType = CorticalBoneType.ThinningScalopping,
                    IsOsteolytic = true,
                    IsMoreThanOneLesion = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.Osteomyelitis,
                    MarginType = MarginType.IllDefined,
                    IsOsteolytic = true,
                    PeriostealReactionType = PeriostealReactionType.Continuously,
                    IsRemodelling = true,
                    IsOsteoproliferativeReaction = true,
                    IsBoneApposition = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.SchmorlsNode,
                    MarginType = MarginType.WellDefined,
                    IsAdjacentSclerosis = true,
                    IsDestructionOfEndPlate = true,
                    IsOsteoproliferativeReaction = true,
                    IsEdgrenVainoSign = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDifferentialDiagnosisType = BonesDifferentialDiagnosisType.BoneInfarction,
                    IsScleroticBorder = true,
                    IsGeographic = true
                }

                #endregion
            };
        }
    }
}
