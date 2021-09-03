using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum DiffusionRestrictionType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040305", InstanceName = nameof(VesselsFindingType.Ischemia))]
        LessThanThird = 1,
        
        [RadioReportId("hea_m_040306", InstanceName = nameof(VesselsFindingType.Ischemia))]
        MoreThanThird = 2
    }
}
