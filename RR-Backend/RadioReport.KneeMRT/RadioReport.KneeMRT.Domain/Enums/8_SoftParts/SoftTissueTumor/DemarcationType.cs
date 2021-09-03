using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Enums;

namespace RadioReport.KneeMRT.SoftParts.Domain.Enums
{
    public enum DemarcationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0804230", InstanceName = nameof(SoftPartsFindingType.SoftTissueTumor))]
        Sharp = 1,

        [RadioReportId("kne_m_0804231", InstanceName = nameof(SoftPartsFindingType.SoftTissueTumor))]
        OutOfFocus = 2

    }
}
