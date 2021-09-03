using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum GradingOcclusionType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040496", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        Partial = 1,

        [RadioReportId("hea_m_040497", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        Complete = 2
    }
}
