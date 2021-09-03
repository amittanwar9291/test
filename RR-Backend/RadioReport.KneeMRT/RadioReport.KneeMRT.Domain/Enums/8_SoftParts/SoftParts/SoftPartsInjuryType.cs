using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum SoftPartsInjuryType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0802135", InstanceName = nameof(SoftPartsFindingType.SoftParts))]
        Haematoma = 1,

        [RadioReportId("kne_m_0802136", InstanceName = nameof(SoftPartsFindingType.SoftParts))]
        Abscess = 2
    }
}
