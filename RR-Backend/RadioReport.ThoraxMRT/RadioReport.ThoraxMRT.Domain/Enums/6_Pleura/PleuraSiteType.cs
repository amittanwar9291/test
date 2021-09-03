using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxMRT.Domain.Models;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum PleuraSiteType : byte
    {
        None = 0,

        [RadioReportId("tho_m_060203", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.PleuralEffusion))]
        [RadioReportId("tho_m_060215", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060236", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.Pneumothorax))]
        [RadioReportId("tho_m_060334", InstanceName = nameof(PleuraFinding.MediastinalPleuraSiteType), CustomConditionName = nameof(PleuraFindingType.Pneumothorax))]
        [RadioReportId("tho_m_060344", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060289", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.Mamma))]
        [RadioReportId("tho_m_0602105", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        [RadioReportId("tho_m_0602133", InstanceName = nameof(PleuraFinding.FocalLeasionSiteType), CustomConditionName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        [RadioReportId("tho_m_060478", InstanceName = nameof(PleuraFinding.AdrenalGlandMassSiteType), CustomConditionName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        Right = 1,

        [RadioReportId("tho_m_060204", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.PleuralEffusion))]
        [RadioReportId("tho_m_060216", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060237", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.Pneumothorax))]
        [RadioReportId("tho_m_060335", InstanceName = nameof(PleuraFinding.MediastinalPleuraSiteType), CustomConditionName = nameof(PleuraFindingType.Pneumothorax))]
        [RadioReportId("tho_m_060345", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060290", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.Mamma))]
        [RadioReportId("tho_m_0602106", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        [RadioReportId("tho_m_0602134", InstanceName = nameof(PleuraFinding.FocalLeasionSiteType), CustomConditionName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        [RadioReportId("tho_m_060479", InstanceName = nameof(PleuraFinding.AdrenalGlandMassSiteType), CustomConditionName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        Left = 2,

        [RadioReportId("tho_m_060346", InstanceName = nameof(PleuraFinding.PleuraSiteType), CustomConditionName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        Median = 3
    }
}
