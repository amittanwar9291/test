using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Enums;

namespace RadioReport.KneeMRT.SoftParts.Domain.Enums
{
    public enum LocalizationAxialType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0802239", InstanceName = nameof(SoftPartsFindingType.SoftTissueTumor))]
        Anterior = 1,

        [RadioReportId("kne_m_0802240", InstanceName = nameof(SoftPartsFindingType.SoftTissueTumor))]
        Posterior = 2,

        [RadioReportId("kne_m_0802241", InstanceName = nameof(SoftPartsFindingType.SoftTissueTumor))]
        Medial = 3,

        [RadioReportId("kne_m_0802242", InstanceName = nameof(SoftPartsFindingType.SoftTissueTumor))]
        Lateral = 4

    }
}
