using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Enums;

namespace RadioReport.KneeMRT.SoftParts.Domain.Enums
{
    public enum LocalizationCraniocaudalRelationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0802244", InstanceName = nameof(SoftPartsFindingType.SoftTissueTumor))]
        Proximal = 1,

        [RadioReportId("kne_m_0802245", InstanceName = nameof(SoftPartsFindingType.SoftTissueTumor))]
        Distal = 2

    }
}
