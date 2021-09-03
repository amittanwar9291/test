using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.SoftParts.Domain.Enums
{
    public enum CMEnchancementType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0804236", InstanceName = nameof(SoftPartsFinding.TissueTumorCMEnhancementType))]
        [RadioReportId("kne_m_0803222", InstanceName = nameof(SoftPartsFinding.MusculatureCMEnchancementType))]
        Powerful = 1,

        [RadioReportId("kne_m_0804237", InstanceName = nameof(SoftPartsFinding.TissueTumorCMEnhancementType))]
        [RadioReportId("kne_m_0803221", InstanceName = nameof(SoftPartsFinding.MusculatureCMEnchancementType))]
        Low = 2,

        [RadioReportId("kne_m_0804238", InstanceName = nameof(SoftPartsFinding.TissueTumorCMEnhancementType))]
        [RadioReportId("kne_m_0803220", InstanceName = nameof(SoftPartsFinding.MusculatureCMEnchancementType))]
        No = 3
    }
}
