using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum IntramuscularHaematomaType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0803215", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        Hyperacute = 1,

        [RadioReportId("kne_m_0803216", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        Acute = 2,

        [RadioReportId("kne_m_0803217", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        Subacute = 3,

        [RadioReportId("kne_m_0803218", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        ChronicOrganized = 4
    }
}
