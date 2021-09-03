using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum SubarachnoidHemorrhageLocalizationType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040530", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        Perimesencephalic = 1,

        [RadioReportId("hea_m_040531", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        SylvianFissure = 2,

        [RadioReportId("hea_m_040532", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        ExternalCerebrospinalFluidSpaces = 3
    }
}
