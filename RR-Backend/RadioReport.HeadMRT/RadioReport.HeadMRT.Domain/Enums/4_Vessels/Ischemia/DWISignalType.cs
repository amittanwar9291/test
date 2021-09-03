using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum DWISignalType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040308", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Increased = 1,

        [RadioReportId("hea_m_040309", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Decreased = 2
    }
}
