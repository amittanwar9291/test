using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum FLAIRDWIRatioType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040417", InstanceName = nameof(VesselsFindingType.Ischemia))]
        NoFLAIRDWIMismatch = 1,

        [RadioReportId("hea_m_040418", InstanceName = nameof(VesselsFindingType.Ischemia))]
        HyperintenseAreaLessThanDiffusionRestrictedArea = 2,

        [RadioReportId("hea_m_040419", InstanceName = nameof(VesselsFindingType.Ischemia))]
        HyperintenseAreaEqualDiffusionRestrictedArea = 3
    }
}