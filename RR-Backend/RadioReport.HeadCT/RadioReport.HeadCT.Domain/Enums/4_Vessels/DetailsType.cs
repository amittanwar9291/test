using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum DetailsType : byte
    {
        None = 0,

        [RadioReportId("hea_c_040550", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0404132", InstanceName = nameof(VesselsFindingType.Perfusion))]
        Periventricular = 1,

        [RadioReportId("hea_c_040551", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0404133", InstanceName = nameof(VesselsFindingType.Perfusion))]
        Confluent = 2
    }
}
