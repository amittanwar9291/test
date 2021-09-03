using RadioReport.AbdomenMRT.Domain.Enums.Kidneys;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums.Spleen;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;
using RadioReport.AbdomenMRT.Domain.Enums.Pancreas;
using RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity;

namespace RadioReport.AbdomenMRT.Domain.Enums
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("abd_m_050402", InstanceName = nameof(SpleenFinding.HomogeneityType), CustomConditionName = nameof(SpleenFindingType.Mass))]
        [RadioReportId("abd_m_050319", InstanceName = nameof(SpleenFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(SpleenFindingType.Mass))]
        [RadioReportId("abd_m_060527", InstanceName = nameof(PancreasFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("abd_m_060281", InstanceName = nameof(PancreasFinding.DiffuseParenchymalChangesHomogeneityType))]
        [RadioReportId("abd_m_0602103", InstanceName = nameof(PancreasFinding.CharacterizationIIIHomogeneityType))]
        [RadioReportId(
            "abd_m_070440",
            InstanceName = nameof(KidneysFinding.ContrastEnhancementQuantitativeStrongType),
            CustomConditionName = nameof(KidneysFindingType.Mass)
        )]
        [RadioReportId(
            "abd_m_070568",
            InstanceName = nameof(KidneysFinding.ContrastEnhancementQuantitativeStrongType),
            CustomConditionName = nameof(KidneysFindingType.DecreasedRenalVolume)
        )]
        [RadioReportId(
            "abd_m_0702114",
            InstanceName = nameof(KidneysFinding.ContrastEnhancementQuantitativeStrongType),
            CustomConditionName = nameof(KidneysFindingType.IncreasedRenalVolume)
        )]
        [RadioReportId("abd_m_080411", InstanceName = nameof(InstanceNames.AdrenalGlands))]
        [RadioReportId("abd_m_100529", InstanceName = nameof(PeritonealCavityFinding.PMLocalizationHomogeneityType), CustomConditionName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100439", InstanceName = nameof(PeritonealCavityFinding.PMStrongHomogeneityType), CustomConditionName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100454", InstanceName = nameof(PeritonealCavityFinding.RMLocalizationHomogeneityType), CustomConditionName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        [RadioReportId("abd_m_100557", InstanceName = nameof(PeritonealCavityFinding.RMStrongHomogeneityType), CustomConditionName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        [RadioReportId("abd_m_110521", InstanceName = nameof(InstanceNames.LymphaticSystem))]
        Homogeneous = 1,

        [RadioReportId("abd_m_050403", InstanceName = nameof(SpleenFinding.HomogeneityType), CustomConditionName = nameof(SpleenFindingType.Mass))]
        [RadioReportId("abd_m_050320", InstanceName = nameof(SpleenFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(SpleenFindingType.Mass))]
        [RadioReportId("abd_m_060528", InstanceName = nameof(PancreasFinding.ContrastEnhancementHomogeneityType))]
        [RadioReportId("abd_m_060282", InstanceName = nameof(PancreasFinding.DiffuseParenchymalChangesHomogeneityType))]
        [RadioReportId("abd_m_0602104", InstanceName = nameof(PancreasFinding.CharacterizationIIIHomogeneityType))]
        [RadioReportId(
            "abd_m_070441",
            InstanceName = nameof(KidneysFinding.ContrastEnhancementQuantitativeStrongType),
            CustomConditionName = nameof(KidneysFindingType.Mass)
        )]
        [RadioReportId(
            "abd_m_070569",
            InstanceName = nameof(KidneysFinding.ContrastEnhancementQuantitativeStrongType),
            CustomConditionName = nameof(KidneysFindingType.DecreasedRenalVolume)
        )]
        [RadioReportId(
            "abd_m_0702115",
            InstanceName = nameof(KidneysFinding.ContrastEnhancementQuantitativeStrongType),
            CustomConditionName = nameof(KidneysFindingType.IncreasedRenalVolume)
        )]
        [RadioReportId("abd_m_080412", InstanceName = nameof(InstanceNames.AdrenalGlands))]
        [RadioReportId("abd_m_100530", InstanceName = nameof(PeritonealCavityFinding.PMLocalizationHomogeneityType), CustomConditionName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100440", InstanceName = nameof(PeritonealCavityFinding.PMStrongHomogeneityType), CustomConditionName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100455", InstanceName = nameof(PeritonealCavityFinding.RMLocalizationHomogeneityType), CustomConditionName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        [RadioReportId("abd_m_100558", InstanceName = nameof(PeritonealCavityFinding.RMStrongHomogeneityType), CustomConditionName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        [RadioReportId("abd_m_110522", InstanceName = nameof(InstanceNames.LymphaticSystem))]
        Heterogeneous = 2
    }
}