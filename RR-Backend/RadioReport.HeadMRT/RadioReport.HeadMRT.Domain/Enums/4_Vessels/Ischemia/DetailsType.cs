using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum DetailsType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040550", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Periventricular = 1,

        [RadioReportId("hea_m_040551", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Confluent = 2
    }
}
