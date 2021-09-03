using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum SubarachnoidHemorrhageType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040527", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        Minor = 1,

        [RadioReportId("hea_m_040528", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        Pronounced = 2
    }
}
