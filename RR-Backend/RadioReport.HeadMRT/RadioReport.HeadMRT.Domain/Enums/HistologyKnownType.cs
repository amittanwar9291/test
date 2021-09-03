using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums.BrainstemCranialNerves;

namespace RadioReport.HeadMRT.Domain.Enums
{
    public enum HistologyKnownType : byte
    {
        None = 0,

        [RadioReportId("hea_m_050206", InstanceName = nameof(InstanceNames.Meninges))]
        [RadioReportId("hea_m_060206", InstanceName = nameof(InstanceNames.Cortex))]
        [RadioReportId("hea_m_070244", InstanceName = nameof(InstanceNames.BasalNuclei))]
        [RadioReportId("hea_m_080251", InstanceName = nameof(InstanceNames.BrainstemCranialNerves), CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_m_080254", InstanceName = nameof(InstanceNames.BrainstemCranialNerves), CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_m_090241", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace))]
        Benign = 1,

        [RadioReportId("hea_m_050207", InstanceName = nameof(InstanceNames.Meninges))]
        [RadioReportId("hea_m_060207", InstanceName = nameof(InstanceNames.Cortex))]
        [RadioReportId("hea_m_070245", InstanceName = nameof(InstanceNames.BasalNuclei))]
        [RadioReportId("hea_m_080252", InstanceName = nameof(InstanceNames.BrainstemCranialNerves), CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_m_080255", InstanceName = nameof(InstanceNames.BrainstemCranialNerves), CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_m_090242", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace))]
        Malignant = 2
    }
}
