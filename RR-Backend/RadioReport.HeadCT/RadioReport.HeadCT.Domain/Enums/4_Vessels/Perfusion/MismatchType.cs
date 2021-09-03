using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum MismatchType : byte
    {
        None = 0,

        [RadioReportId("hea_c_040522", InstanceName = nameof(VesselsFindingType.Perfusion))]
        NoMismatch = 1,

        [RadioReportId("hea_c_040523", InstanceName = nameof(VesselsFindingType.Perfusion))]
        Mismatch = 2
    }
}
