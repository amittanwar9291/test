using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum DiffusionImagingType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040303", InstanceName = nameof(VesselsFindingType.Ischemia))]
        NoDiffusionRestriction = 1,

        [RadioReportId("hea_m_040304", InstanceName = nameof(VesselsFindingType.Ischemia))]
        DiffusionRestriction = 2
    }
}
