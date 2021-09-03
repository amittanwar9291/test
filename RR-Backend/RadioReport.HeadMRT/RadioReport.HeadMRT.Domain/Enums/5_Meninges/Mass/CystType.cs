using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Meninges
{
    public enum CystType : byte
    {
        None = 0,

        [RadioReportId("hea_m_0502205", InstanceName = nameof(MeningesFindingType.Mass))]
        Simple = 1,

        [RadioReportId("hea_m_0502206", InstanceName = nameof(MeningesFindingType.Mass))]
        Complex = 2
    }
}
