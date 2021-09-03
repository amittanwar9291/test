using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum IschemicAreaPatternType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0403154", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Lacunary = 1,

        [RadioReportId("hea_c_0403157", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Territorial = 2,

        [RadioReportId("hea_c_0403161", InstanceName = nameof(VesselsFindingType.Ischemia))]
        BorderZone = 3,

        [RadioReportId("hea_c_0403163", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Cortical = 4
    }
}
