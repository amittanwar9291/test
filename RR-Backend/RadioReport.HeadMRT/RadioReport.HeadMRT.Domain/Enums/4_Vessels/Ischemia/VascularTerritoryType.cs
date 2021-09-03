using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum VascularTerritoryType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040278", InstanceName = nameof(VesselsFindingType.Ischemia))]
        MultipleSmallInfarcts = 1,

        [RadioReportId("hea_m_040279", InstanceName = nameof(VesselsFindingType.Ischemia))]
        BilateralThalamicInfarcts = 2,

        [RadioReportId("hea_m_040280", InstanceName = nameof(VesselsFindingType.Ischemia))]
        DorsolateralInfarctMedulla = 3
    }
}
