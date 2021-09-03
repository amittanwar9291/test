using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum CerebralEdemaType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0403167", InstanceName = nameof(VesselsFindingType.Ischemia))]
        GeneralizedCerebralEdema = 1,

        [RadioReportId("hea_c_0403168", InstanceName = nameof(VesselsFindingType.Ischemia))]
        CytotoxicEdema = 2
    }
}
